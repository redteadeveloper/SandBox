const MyGrammarListener = require('./sandboxListener.js').sandboxListener

class customListener extends MyGrammarListener {

    constructor () {
        super()
        this._hashmap = new Map()
    }

    exitPrint(ctx) {
        if (ctx.INT() != null && ctx.STRING() == null && ctx.VAR() == null) {
            console.log(parseInt(ctx.INT()))
        } else if (ctx.INT() == null && ctx.STRING() != null && ctx.VAR() == null) {
            console.log(ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, ""))
        } else {
            console.log(this._hashmap.get(ctx.VAR().toString()))
        }
    }

    exitLet(ctx) {
        if (ctx.INT() != null && ctx.STRING() == null) {
            this._hashmap.set(ctx.VAR().toString(), parseInt(ctx.INT()))
        } else {
            this._hashmap.set(ctx.VAR().toString(), ctx.STRING().toString().replace(/"/gi, "").replace(/'/gi, ""))
        }
    }

}

exports.customListener = customListener
