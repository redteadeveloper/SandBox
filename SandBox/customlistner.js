const MyGrammarListener = require('./sandboxListener.js').sandboxListener

class customListener extends MyGrammarListener {

    constructor () {
        super()
        this._hashmap = new Map()
    }

    exitShow(ctx) {
        if (ctx.INT() != null) {
            console.log(parseInt(ctx.INT()))
        } else {
            console.log(this._hashmap.get(ctx.VAR().toString()))
        }
    }

    exitLet(ctx) {
        this._hashmap.set(ctx.VAR().toString(), parseInt(ctx.INT()))
    }

}

exports.customListener = customListener
