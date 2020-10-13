const MyGrammarListener = require('./sandboxListener.js').sandboxListener

class customListener extends MyGrammarListener {

    constructor () {
        super()
        this._hashmap = new Map()
        this._protectedmap = new Map()
    }

    exitPrint(ctx) {
        if (ctx.INT() != null && ctx.STRING() == null && ctx.VAR() == null) {
            console.log(parseInt(ctx.INT()))
        } else if (ctx.INT() == null && ctx.STRING() != null && ctx.VAR() == null) {
            console.log(ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, "").split("\n").join("\n"))
        } else {
            console.log(this._hashmap.get(ctx.VAR().toString()) == undefined ? this._protectedmap.get(ctx.VAR().toString()) : this._hashmap.get(ctx.VAR().toString()))
        }
    }

    exitLet(ctx) {
        if (this._protectedmap.get(ctx.VAR().toString()) != undefined) 
            return console.log(`ERROR: '${ctx.VAR().toString()}' is an already declared protected variable.`)
        if (ctx.INT() != null && ctx.STRING() == null && ctx.PROT() == null) {
            this._hashmap.set(ctx.VAR().toString(), parseInt(ctx.INT()))
        } else if ((ctx.INT() == null && ctx.STRING() != null && ctx.PROT() == null)) {
            this._hashmap.set(ctx.VAR().toString(), ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, "").split("\n").join("\n"))
        } else if (ctx.INT() != null && ctx.STRING() == null && ctx.PROT() != null) {
            this._protectedmap.set(ctx.VAR().toString(), parseInt(ctx.INT()))
        } else if (ctx.INT() == null && ctx.STRING() != null && ctx.PROT() != null) {
            this._protectedmap.set(ctx.VAR().toString(), ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, "").split("\n").join("\n"))
        }
    }

}

exports.customListener = customListener
