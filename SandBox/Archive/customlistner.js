const MyGrammarListener = require('./sandboxListener.js').sandboxListener

class customListener extends MyGrammarListener {
    
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
    
    }
    
    exitPrint(ctx) {
        console.log(this.getVariable(ctx))
    }

    exitLet(ctx) {
        if (this._protectedmap.get(ctx.VAR().toString()) != undefined) 
            return console.log(`ERROR: '${ctx.VAR().toString()}' is an already declared protected variable.`)

        if (ctx.PROT() == null) {
            if (ctx.INT() != null && ctx.STRING() == null && ctx.BOOL() == null && ctx.FLOAT() == null) {
                this._hashmap.set(ctx.VAR().toString(), parseInt(ctx.INT()))
            } else if (ctx.INT() == null && ctx.STRING() != null && ctx.BOOL() == null && ctx.FLOAT() == null) {
                this._hashmap.set(ctx.VAR().toString(), ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, "").split("\n").join("\n"))
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.BOOL() != null && ctx.FLOAT() == null) {
                this._hashmap.set(ctx.VAR().toString(), ctx.BOOL().toString() === 'true')
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.BOOL() == null && ctx.FLOAT() != null) {
                this._hashmap.set(ctx.VAR().toString(), parseFloat(ctx.FLOAT().toString()))
            }
        } else {
            if (ctx.INT() != null && ctx.STRING() == null && ctx.BOOL() == null && ctx.FLOAT() == null) {
                this._protectedmap.set(ctx.VAR().toString(), parseInt(ctx.INT()))
            } else if (ctx.INT() == null && ctx.STRING() != null && ctx.BOOL() == null && ctx.FLOAT() == null) {
                this._protectedmap.set(ctx.VAR().toString(), ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, "").split("\n").join("\n"))
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.BOOL() != null && ctx.FLOAT() == null) {
                this._protectedmap.set(ctx.VAR().toString(), ctx.BOOL().toString() === 'true')
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.BOOL() == null && ctx.FLOAT() != null) {
                this._protectedmap.set(ctx.VAR().toString(), parseFloat(ctx.FLOAT().toString()))
            }
        }
        
    }

    exitConvtype(ctx) {

        let startingvariable = this._hashmap.get(ctx.VAR().toString()) == undefined ? this._protectedmap.get(ctx.VAR().toString()) : this._hashmap.get(ctx.VAR().toString())

        if (ctx.TYPE_BOOL() != null) {
            this._hashmap.get(ctx.VAR().toString()) != undefined ?
                this._hashmap.set(ctx.VAR().toString(), startingvariable == 'true') : 
                this._protectedmap.set(ctx.VAR().toString(), startingvariable == 'true') 
        } else if (ctx.TYPE_STR() != null) {
            this._hashmap.get(ctx.VAR().toString()) != undefined ?
                this._hashmap.set(ctx.VAR().toString(), startingvariable.toString()) : 
                this._protectedmap.set(ctx.VAR().toString(), startingvariable.toString()) 
        } else if (ctx.TYPE_INT() != null) {
            this._hashmap.get(ctx.VAR().toString()) != undefined ?
                this._hashmap.set(ctx.VAR().toString(), parseInt(startingvariable)) : 
                this._protectedmap.set(ctx.VAR().toString(), parseInt(startingvariable)) 
        } else {
            var numberPattern = '[0-9]+.?[0-9]*';
            this._hashmap.get(ctx.VAR().toString()) != undefined ?
                this._hashmap.set(ctx.VAR().toString(), parseFloat(startingvariable.match(numberPattern)[0])) : 
                this._protectedmap.set(ctx.VAR().toString(), parseFloat(startingvariable.match(numberPattern)[0])) 
        }
    }

}

exports.customListener = customListener
