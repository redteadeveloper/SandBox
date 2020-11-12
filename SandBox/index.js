var antlr4 = require("antlr4");
var fs = require("fs");
var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter .snbx file path: ", function(path) {

    if (!path.endsWith(".snbx")) {
        return console.log("Not a .snbx file. Press Ctrl + c to exit.");
    }

    let filepath = path;

    var MyGrammarLexer = require('./sandboxLexer.js').sandboxLexer;
    var MyGrammarParser = require('./sandboxParser.js').sandboxParser;
    var customVisitor = require('./customVisitor.js').customVisitor;

    try {
        var input = fs.readFileSync(filepath).toString();
    } catch {
        return console.log("Couldn't find file. Press Ctrl + c to exit.");
    }

    console.log("\n### SandBox Programming Language 0.1.2 ###\n");
    console.log("======================");
    console.log("RESULT:");
    console.log("----------------------");

    var chars = new antlr4.InputStream(input);
    var lexer = new MyGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new MyGrammarParser(tokens);
    var visitor = new customVisitor();

    lexer.removeErrorListeners();
    parser.buildParseTrees = true;

    var tree = parser.program();
    visitor.visit(tree);

    console.log("======================\n");
    console.log('Complete. Press Ctrl + c to exit.');

});