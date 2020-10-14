const MyGrammarListener = require('./sandboxListener.js').sandboxListener



class customListener extends MyGrammarListener {
    
    constructor () {
        super()
        this._hashmap = new Map()
        this._protectedmap = new Map()

        this.getVariable = function(ctx) {
            if (ctx.INT() != null && ctx.STRING() == null && ctx.VAR() == null && ctx.BOOL() == null && ctx.DOUBLE() == null) {
                return parseInt(ctx.INT())
            } else if (ctx.INT() == null && ctx.STRING() != null && ctx.VAR() == null && ctx.BOOL() == null && ctx.DOUBLE() == null) {
                return ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, "").split("\n").join("\n")
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.VAR() == null && ctx.BOOL() != null && ctx.DOUBLE() == null) {
                return ctx.BOOL().toString() === 'true'
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.VAR() == null && ctx.BOOL() == null && ctx.DOUBLE() != null) {
                return ctx.DOUBLE().parseFloat()
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
            if (ctx.INT() != null && ctx.STRING() == null && ctx.BOOL() == null && ctx.DOUBLE() == null) {
                this._hashmap.set(ctx.VAR().toString(), parseInt(ctx.INT()))
            } else if (ctx.INT() == null && ctx.STRING() != null && ctx.BOOL() == null && ctx.DOUBLE() == null) {
                this._hashmap.set(ctx.VAR().toString(), ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, "").split("\n").join("\n"))
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.BOOL() != null && ctx.DOUBLE() == null) {
                this._hashmap.set(ctx.VAR().toString(), ctx.BOOL().toString() === 'true')
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.BOOL() == null && ctx.DOUBLE() != null) {
                this._hashmap.set(ctx.VAR().toString(), parseFloat(ctx.DOUBLE().toString()))
            }
        } else {
            if (ctx.INT() != null && ctx.STRING() == null && ctx.BOOL() == null && ctx.DOUBLE() == null) {
                this._protectedmap.set(ctx.VAR().toString(), parseInt(ctx.INT()))
            } else if (ctx.INT() == null && ctx.STRING() != null && ctx.BOOL() == null && ctx.DOUBLE() == null) {
                this._protectedmap.set(ctx.VAR().toString(), ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, "").split("\n").join("\n"))
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.BOOL() != null && ctx.DOUBLE() == null) {
                this._protectedmap.set(ctx.VAR().toString(), ctx.BOOL().toString() === 'true')
            } else if (ctx.INT() == null && ctx.STRING() == null && ctx.BOOL() == null && ctx.DOUBLE() != null) {
                this._protectedmap.set(ctx.VAR().toString(), parseFloat(ctx.DOUBLE().toString()))
            }
        }
        
    }

}

exports.customListener = customListener
