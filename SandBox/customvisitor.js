const { parse } = require('path')

const MyGrammarVisitor = require('./sandboxVisitor.js').sandboxVisitor

class customVisitor extends MyGrammarVisitor {
    constructor () {
        super()
        this._hashmap = new Map()
        this._protectedmap = new Map()

        this.getVariable = function(ctx) {
            if (ctx.INT() != null && ctx.STRING() == null && ctx.VAR() == null && ctx.BOOL() == null && ctx.FLOAT() == null) {
                return parseInt(ctx.INT())
            } else if (ctx.INT() == null && ctx.STRING() != null && ctx.VAR() == null && ctx.BOOL() == null && ctx.FLOAT() == null) {
                return ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, "").split("\n").join("\n")
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.VAR() == null && ctx.BOOL() != null && ctx.FLOAT() == null) {
                return ctx.BOOL().toString() === 'true'
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.VAR() == null && ctx.BOOL() == null && ctx.FLOAT() != null) {
                return parseFloat(ctx.FLOAT().toString())
            } else {
                return this._hashmap.get(ctx.VAR().toString()) == undefined ? this._protectedmap.get(ctx.VAR().toString()) : this._hashmap.get(ctx.VAR().toString())
            }
        }

        this.isFloat = function(n) {
            if(!isNaN(parseFloat(n))) {
                return true
            } else {
                return false
            }
         }
    }

    visitPrint(ctx) {
        let value = this.visit(ctx.expr());
        console.log(typeof value == "object" ? value[0] : value)
        return typeof value == "object" ? value[0] : value;
    }

    visitLet(ctx) {
        let id = ctx.VAR().toString();
        if (this._protectedmap.get(id) != undefined) return console.error(`ERROR: '${id}' is an already declared protected variable.`)
        let value = this.visit(ctx.expr());
        if (ctx.PROT() == null) {
            this._hashmap.set(id, typeof value == "object" ? value[0] : value)
        } else {
            this._protectedmap.set(id, typeof value == "object" ? value[0] : value)
        }
    }

    visitVarAtom(ctx) {
        if (this._hashmap.get(ctx.VAR().toString()) != undefined) {
            return this._hashmap.get(ctx.VAR().toString())
        } else {
            return this._protectedmap.get(ctx.VAR().toString()) 
        }
    }

    visitStringAtom(ctx) {
        return ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, "")
    }

    visitNumberAtom(ctx) {
        return parseFloat(ctx.INT() != undefined ? ctx.INT().toString() : ctx.FLOAT().toString())
    }

    visitBooleanAtom(ctx) {
        return ctx.BOOL().toString() == 'true'
    }

    visitNilAtom(ctx) {
        return null
    }

    visitParExpr(ctx) {
        return this.visit(ctx.expr())
    }

    visitPowExpr(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        return Math.pow(parseFloat(left), parseFloat(right))
    }

    visitUnaryMinusExpr(ctx) {
        let value = this.visit(ctx.expr());
        return parseFloat(-value)
    }

    visitNotExpr(ctx) {
        let value = this.visit(ctx.expr());
        return !(Boolean(value.toString()))
    }

    visitMultiplicationExpr(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        if (ctx.MULT() != null) {
            return parseFloat(left.toString()) * parseFloat(right.toString())
        } else if (ctx.DIV() != null) {
            return parseFloat(left.toString()) / parseFloat(right.toString())
        } else if (ctx.MOD() != null) {
            return parseFloat(left.toString()) % parseFloat(right.toString())
        } else {
            throw new RuntimeException("unknown operator");
        }
    }

    visitAdditiveExpr(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        if (ctx.PLUS() != null) {
            return this.isFloat(left) == true && this.isFloat(right) == true ?
                parseFloat(left) + parseFloat(right) :
                left.toString() + right.toString()
        } else if (ctx.MINUS() != null) {
            return parseFloat(left.toString()) - parseFloat(right.toString())
        } else {
            throw new RuntimeException("unknown operator");
        }
    }

    visitRelationalExpr(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        if (ctx.LT() != null) {
            return Boolean(parseFloat(left.toString()) < parseFloat(right.toString()))
        } else if (ctx.LTEQ() != null) {
            return Boolean(parseFloat(left.toString()) <= parseFloat(right.toString()))
        } else if (ctx.GT() != null) {
            return Boolean(parseFloat(left.toString()) > parseFloat(right.toString()))
        } else if (ctx.GTEQ() != null) {
            return Boolean(parseFloat(left.toString()) >= parseFloat(right.toString()))
        } else {
            throw new RuntimeException("unknown operator");
        }
    }

    visitEqualityExpr(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        if (ctx.EQ() != null) {
            return this.isFloat(left) == true && this.isFloat(right) == true ?
                Math.abs(parseFloat(left) - parseFloat(right)) < 0.00000000001 :
                left == right;
        } else if (ctx.NEQ() != null) {
            return this.isFloat(left) == true && this.isFloat(right) == true ?
                Math.abs(parseFloat(left) - parseFloat(right)) >= 0.00000000001 :
                left != right;
        }
    }

    visitAndExpr(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        return Boolean(left) && Boolean(right)
    }

    visitOrExpr(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        return Boolean(left) || Boolean(right)
    }

    visitIfstat(ctx) {
        console.log("IFstat")
        conditions = ctx.condition_block()
        let evaluatedBlock = false;

        console.log(conditions)

        conditions.forEach(condition => {
            let evaluated = this.visit(condition.expr());
            console.log(evaluated)

            if(evaluated == true) {
                evaluatedBlock = true;
                this.visit(condition.stat_block());
                break;
            }

            if(!evaluatedBlock && ctx.stat_block() != null) {
                this.visit(ctx.stat_block());
            }
        });
    }
}

exports.customVisitor = customVisitor