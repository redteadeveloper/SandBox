var antlr4 = require('antlr4');
var MyGrammarLexer = require('./sandboxLexer.js').sandboxLexer;
var MyGrammarParser = require('./sandboxParser.js').sandboxParser;
var customListener = require('./customlistner.js').customListener

var input = "show 12"

var chars = new antlr4.InputStream(input);
var lexer = new MyGrammarLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new MyGrammarParser(tokens);
parser.buildParseTrees = true;
var tree = parser.program();

var customListener = new customListener()
antlr4.tree.ParseTreeWalker.DEFAULT.walk(customListener, tree);