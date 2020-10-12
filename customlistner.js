const MyGrammarListener = require('./sandboxListener.js').sandboxListener

class customListener extends MyGrammarListener {

    exitShow(ctx) {
        console.log("--------------")
        console.log("SHOW Statement");
        console.log(`INT: ${ctx.INT()}`)
        console.log(`VAR: ${ctx.VAR()}`)
        console.log("--------------")
    }

    exitLet(ctx) {
        console.log("--------------")
        console.log("LET Statement")
        console.log(`INT: ${ctx.INT()}`)
        console.log(`VAR: ${ctx.VAR()}`)
        console.log("--------------")
    }

}

exports.customListener = customListener