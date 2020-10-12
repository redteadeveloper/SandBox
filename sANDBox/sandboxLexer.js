// Generated from sandbox.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007)\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0006\u0005\u001a",
    "\n\u0005\r\u0005\u000e\u0005\u001b\u0003\u0006\u0006\u0006\u001f\n\u0006",
    "\r\u0006\u000e\u0006 \u0003\u0007\u0006\u0007$\n\u0007\r\u0007\u000e",
    "\u0007%\u0003\u0007\u0003\u0007\u0002\u0002\b\u0003\u0003\u0005\u0004",
    "\u0007\u0002\t\u0005\u000b\u0006\r\u0007\u0003\u0002\u0004\u0003\u0002",
    "c|\u0004\u0002\u000b\f\"\"\u0002*\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0003\u000f\u0003\u0002\u0002\u0002\u0005\u0011\u0003\u0002\u0002\u0002",
    "\u0007\u0016\u0003\u0002\u0002\u0002\t\u0019\u0003\u0002\u0002\u0002",
    "\u000b\u001e\u0003\u0002\u0002\u0002\r#\u0003\u0002\u0002\u0002\u000f",
    "\u0010\u0007?\u0002\u0002\u0010\u0004\u0003\u0002\u0002\u0002\u0011",
    "\u0012\u0007u\u0002\u0002\u0012\u0013\u0007j\u0002\u0002\u0013\u0014",
    "\u0007q\u0002\u0002\u0014\u0015\u0007y\u0002\u0002\u0015\u0006\u0003",
    "\u0002\u0002\u0002\u0016\u0017\u00042;\u0002\u0017\b\u0003\u0002\u0002",
    "\u0002\u0018\u001a\t\u0002\u0002\u0002\u0019\u0018\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\n\u0003\u0002\u0002",
    "\u0002\u001d\u001f\u0005\u0007\u0004\u0002\u001e\u001d\u0003\u0002\u0002",
    "\u0002\u001f \u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002",
    " !\u0003\u0002\u0002\u0002!\f\u0003\u0002\u0002\u0002\"$\t\u0003\u0002",
    "\u0002#\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%#\u0003",
    "\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002",
    "\'(\b\u0007\u0002\u0002(\u000e\u0003\u0002\u0002\u0002\u0006\u0002\u001b",
    " %\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function sandboxLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

sandboxLexer.prototype = Object.create(antlr4.Lexer.prototype);
sandboxLexer.prototype.constructor = sandboxLexer;

Object.defineProperty(sandboxLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

sandboxLexer.EOF = antlr4.Token.EOF;
sandboxLexer.T__0 = 1;
sandboxLexer.T__1 = 2;
sandboxLexer.VAR = 3;
sandboxLexer.INT = 4;
sandboxLexer.WS = 5;

sandboxLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

sandboxLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

sandboxLexer.prototype.literalNames = [ null, "'='", "'show'" ];

sandboxLexer.prototype.symbolicNames = [ null, null, null, "VAR", "INT", 
                                         "WS" ];

sandboxLexer.prototype.ruleNames = [ "T__0", "T__1", "NUMBER", "VAR", "INT", 
                                     "WS" ];

sandboxLexer.prototype.grammarFileName = "sandbox.g4";


exports.sandboxLexer = sandboxLexer;

