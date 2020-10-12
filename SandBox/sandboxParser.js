// Generated from sandbox.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sandboxListener = require('./sandboxListener').sandboxListener;
var grammarFileName = "sandbox.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000e \u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0006\u0002\f\n\u0002\r\u0002",
    "\u000e\u0002\r\u0003\u0003\u0003\u0003\u0005\u0003\u0012\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002\u0004\u0003\u0002",
    "\n\u000b\u0003\u0002\t\u000b\u0002\u001d\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0004\u0011\u0003\u0002\u0002\u0002\u0006\u0013\u0003\u0002\u0002",
    "\u0002\b\u0019\u0003\u0002\u0002\u0002\n\f\u0005\u0004\u0003\u0002\u000b",
    "\n\u0003\u0002\u0002\u0002\f\r\u0003\u0002\u0002\u0002\r\u000b\u0003",
    "\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e\u0003\u0003",
    "\u0002\u0002\u0002\u000f\u0012\u0005\u0006\u0004\u0002\u0010\u0012\u0005",
    "\b\u0005\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011\u0010\u0003",
    "\u0002\u0002\u0002\u0012\u0005\u0003\u0002\u0002\u0002\u0013\u0014\u0007",
    "\u0003\u0002\u0002\u0014\u0015\u0007\t\u0002\u0002\u0015\u0016\u0007",
    "\u0004\u0002\u0002\u0016\u0017\t\u0002\u0002\u0002\u0017\u0018\u0007",
    "\u0005\u0002\u0002\u0018\u0007\u0003\u0002\u0002\u0002\u0019\u001a\u0007",
    "\u0006\u0002\u0002\u001a\u001b\u0007\u0007\u0002\u0002\u001b\u001c\t",
    "\u0003\u0002\u0002\u001c\u001d\u0007\b\u0002\u0002\u001d\u001e\u0007",
    "\u0005\u0002\u0002\u001e\t\u0003\u0002\u0002\u0002\u0004\r\u0011"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'let'", "'='", "';'", "'print'", "'('", "')'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "VAR", "INT", 
                      "STRING", "COMMENT", "LINE_COMMENT", "WS" ];

var ruleNames =  [ "program", "statement", "let", "print" ];

function sandboxParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

sandboxParser.prototype = Object.create(antlr4.Parser.prototype);
sandboxParser.prototype.constructor = sandboxParser;

Object.defineProperty(sandboxParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

sandboxParser.EOF = antlr4.Token.EOF;
sandboxParser.T__0 = 1;
sandboxParser.T__1 = 2;
sandboxParser.T__2 = 3;
sandboxParser.T__3 = 4;
sandboxParser.T__4 = 5;
sandboxParser.T__5 = 6;
sandboxParser.VAR = 7;
sandboxParser.INT = 8;
sandboxParser.STRING = 9;
sandboxParser.COMMENT = 10;
sandboxParser.LINE_COMMENT = 11;
sandboxParser.WS = 12;

sandboxParser.RULE_program = 0;
sandboxParser.RULE_statement = 1;
sandboxParser.RULE_let = 2;
sandboxParser.RULE_print = 3;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sandboxParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitProgram(this);
	}
};




sandboxParser.ProgramContext = ProgramContext;

sandboxParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, sandboxParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 8;
            this.statement();
            this.state = 11; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===sandboxParser.T__0 || _la===sandboxParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sandboxParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.let = function() {
    return this.getTypedRuleContext(LetContext,0);
};

StatementContext.prototype.print = function() {
    return this.getTypedRuleContext(PrintContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitStatement(this);
	}
};




sandboxParser.StatementContext = StatementContext;

sandboxParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, sandboxParser.RULE_statement);
    try {
        this.state = 15;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sandboxParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 13;
            this.let();
            break;
        case sandboxParser.T__3:
            this.enterOuterAlt(localctx, 2);
            this.state = 14;
            this.print();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sandboxParser.RULE_let;
    return this;
}

LetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LetContext.prototype.constructor = LetContext;

LetContext.prototype.VAR = function() {
    return this.getToken(sandboxParser.VAR, 0);
};

LetContext.prototype.INT = function() {
    return this.getToken(sandboxParser.INT, 0);
};

LetContext.prototype.STRING = function() {
    return this.getToken(sandboxParser.STRING, 0);
};

LetContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterLet(this);
	}
};

LetContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitLet(this);
	}
};




sandboxParser.LetContext = LetContext;

sandboxParser.prototype.let = function() {

    var localctx = new LetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, sandboxParser.RULE_let);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.match(sandboxParser.T__0);
        this.state = 18;
        this.match(sandboxParser.VAR);
        this.state = 19;
        this.match(sandboxParser.T__1);
        this.state = 20;
        _la = this._input.LA(1);
        if(!(_la===sandboxParser.INT || _la===sandboxParser.STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 21;
        this.match(sandboxParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sandboxParser.RULE_print;
    return this;
}

PrintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintContext.prototype.constructor = PrintContext;

PrintContext.prototype.INT = function() {
    return this.getToken(sandboxParser.INT, 0);
};

PrintContext.prototype.VAR = function() {
    return this.getToken(sandboxParser.VAR, 0);
};

PrintContext.prototype.STRING = function() {
    return this.getToken(sandboxParser.STRING, 0);
};

PrintContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterPrint(this);
	}
};

PrintContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitPrint(this);
	}
};




sandboxParser.PrintContext = PrintContext;

sandboxParser.prototype.print = function() {

    var localctx = new PrintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, sandboxParser.RULE_print);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.match(sandboxParser.T__3);
        this.state = 24;
        this.match(sandboxParser.T__4);
        this.state = 25;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sandboxParser.VAR) | (1 << sandboxParser.INT) | (1 << sandboxParser.STRING))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 26;
        this.match(sandboxParser.T__5);
        this.state = 27;
        this.match(sandboxParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.sandboxParser = sandboxParser;
