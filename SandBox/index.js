var antlr4 = require('antlr4');
var fs = require('fs')

var MyGrammarLexer = require('./sandboxLexer.js').sandboxLexer;
var MyGrammarParser = require('./sandboxParser.js').sandboxParser;
var customListener = require('./customlistner.js').customListener

console.log("\n### SandBox Programming Language 0.0.3 ###\n")
console.log("======================")
console.log("RESULT:")
console.log("----------------------")

var input = fs.readFileSync("./snbx-files/main.snbx").toString();

var chars = new antlr4.InputStream(input);
var lexer = new MyGrammarLexer(chars);
lexer.removeErrorListeners()
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;

var tree = parser.program();

var customListener = new customListener()
antlr4.tree.ParseTreeWalker.DEFAULT.walk(customListener, tree);

console.log("======================\n")