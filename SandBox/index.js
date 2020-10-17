// eslint-disable-next-line no-console

var antlr4 = require('antlr4');
var fs = require('fs');

var MyGrammarLexer = require('./sandboxLexer.js').sandboxLexer;
var MyGrammarParser = require('./sandboxParser.js').sandboxParser;
var customVisitor = require('./customVisitor.js').customVisitor;

console.log("\n### SandBox Programming Language 0.1.0 ###\n");
console.log("======================");
console.log("RESULT:");
console.log("----------------------");

var input = fs.readFileSync("./snbx-files/main.snbx").toString();

var chars = new antlr4.InputStream(input);
var lexer = new MyGrammarLexer(chars);
lexer.removeErrorListeners();

var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;

var tree = parser.program();

var visitor = new customVisitor();
visitor.visit(tree);

console.log("======================\n");
