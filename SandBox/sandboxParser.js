// Generated from sandbox.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sandboxListener = require('./sandboxListener').sandboxListener;
var sandboxVisitor = require('./sandboxVisitor').sandboxVisitor;

var grammarFileName = "sandbox.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003+~\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003\u001d\n\u0003\f\u0003",
    "\u000e\u0003 \u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004&\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005*\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007:\n\u0007\f\u0007\u000e\u0007=\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007A\n\u0007\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\nO\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000bW\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0007\u000bn\n\u000b\f\u000b\u000e\u000bq\u000b\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\f|\n\f\u0003\f\u0002\u0003\u0014\r\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0002\u0007\u0003\u0002\r\u000f\u0003\u0002\u000b",
    "\f\u0003\u0002\u0007\n\u0003\u0002\u0005\u0006\u0003\u0002&\'\u0002",
    "\u0088\u0002\u0018\u0003\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002",
    "\u0002\u0006%\u0003\u0002\u0002\u0002\b\'\u0003\u0002\u0002\u0002\n",
    "0\u0003\u0002\u0002\u0002\f4\u0003\u0002\u0002\u0002\u000eB\u0003\u0002",
    "\u0002\u0002\u0010F\u0003\u0002\u0002\u0002\u0012N\u0003\u0002\u0002",
    "\u0002\u0014V\u0003\u0002\u0002\u0002\u0016{\u0003\u0002\u0002\u0002",
    "\u0018\u0019\u0005\u0004\u0003\u0002\u0019\u001a\u0007\u0002\u0002\u0003",
    "\u001a\u0003\u0003\u0002\u0002\u0002\u001b\u001d\u0005\u0006\u0004\u0002",
    "\u001c\u001b\u0003\u0002\u0002\u0002\u001d \u0003\u0002\u0002\u0002",
    "\u001e\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002",
    "\u001f\u0005\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002",
    "!&\u0005\b\u0005\u0002\"&\u0005\n\u0006\u0002#&\u0005\f\u0007\u0002",
    "$&\u0005\u000e\b\u0002%!\u0003\u0002\u0002\u0002%\"\u0003\u0002\u0002",
    "\u0002%#\u0003\u0002\u0002\u0002%$\u0003\u0002\u0002\u0002&\u0007\u0003",
    "\u0002\u0002\u0002\')\u0007\u0012\u0002\u0002(*\u0007#\u0002\u0002)",
    "(\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002",
    "\u0002+,\u0007%\u0002\u0002,-\u0007\u0019\u0002\u0002-.\u0005\u0014",
    "\u000b\u0002./\u0007\u0018\u0002\u0002/\t\u0003\u0002\u0002\u000201",
    "\u0007\u0013\u0002\u000212\u0005\u0014\u000b\u000223\u0007\u0018\u0002",
    "\u00023\u000b\u0003\u0002\u0002\u000245\u0007\u0014\u0002\u00025;\u0005",
    "\u0010\t\u000267\u0007\u0015\u0002\u000278\u0007\u0014\u0002\u00028",
    ":\u0005\u0010\t\u000296\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002",
    "\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<@\u0003\u0002",
    "\u0002\u0002=;\u0003\u0002\u0002\u0002>?\u0007\u0015\u0002\u0002?A\u0005",
    "\u0012\n\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002A",
    "\r\u0003\u0002\u0002\u0002BC\u0007\u0016\u0002\u0002CD\u0005\u0014\u000b",
    "\u0002DE\u0005\u0012\n\u0002E\u000f\u0003\u0002\u0002\u0002FG\u0005",
    "\u0014\u000b\u0002GH\u0005\u0012\n\u0002H\u0011\u0003\u0002\u0002\u0002",
    "IJ\u0007\u001c\u0002\u0002JK\u0005\u0004\u0003\u0002KL\u0007\u001d\u0002",
    "\u0002LO\u0003\u0002\u0002\u0002MO\u0005\u0006\u0004\u0002NI\u0003\u0002",
    "\u0002\u0002NM\u0003\u0002\u0002\u0002O\u0013\u0003\u0002\u0002\u0002",
    "PQ\b\u000b\u0001\u0002QR\u0007\f\u0002\u0002RW\u0005\u0014\u000b\u000b",
    "ST\u0007\u0011\u0002\u0002TW\u0005\u0014\u000b\nUW\u0005\u0016\f\u0002",
    "VP\u0003\u0002\u0002\u0002VS\u0003\u0002\u0002\u0002VU\u0003\u0002\u0002",
    "\u0002Wo\u0003\u0002\u0002\u0002XY\f\f\u0002\u0002YZ\u0007\u0010\u0002",
    "\u0002Zn\u0005\u0014\u000b\r[\\\f\t\u0002\u0002\\]\t\u0002\u0002\u0002",
    "]n\u0005\u0014\u000b\n^_\f\b\u0002\u0002_`\t\u0003\u0002\u0002`n\u0005",
    "\u0014\u000b\tab\f\u0007\u0002\u0002bc\t\u0004\u0002\u0002cn\u0005\u0014",
    "\u000b\bde\f\u0006\u0002\u0002ef\t\u0005\u0002\u0002fn\u0005\u0014\u000b",
    "\u0007gh\f\u0005\u0002\u0002hi\u0007\u0004\u0002\u0002in\u0005\u0014",
    "\u000b\u0006jk\f\u0004\u0002\u0002kl\u0007\u0003\u0002\u0002ln\u0005",
    "\u0014\u000b\u0005mX\u0003\u0002\u0002\u0002m[\u0003\u0002\u0002\u0002",
    "m^\u0003\u0002\u0002\u0002ma\u0003\u0002\u0002\u0002md\u0003\u0002\u0002",
    "\u0002mg\u0003\u0002\u0002\u0002mj\u0003\u0002\u0002\u0002nq\u0003\u0002",
    "\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002p\u0015",
    "\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rs\u0007\u001a\u0002",
    "\u0002st\u0005\u0014\u000b\u0002tu\u0007\u001b\u0002\u0002u|\u0003\u0002",
    "\u0002\u0002v|\t\u0006\u0002\u0002w|\u0007$\u0002\u0002x|\u0007%\u0002",
    "\u0002y|\u0007(\u0002\u0002z|\u0007\u0017\u0002\u0002{r\u0003\u0002",
    "\u0002\u0002{v\u0003\u0002\u0002\u0002{w\u0003\u0002\u0002\u0002{x\u0003",
    "\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{z\u0003\u0002\u0002\u0002",
    "|\u0017\u0003\u0002\u0002\u0002\f\u001e%);@NVmo{"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'||'", "'&&'", "'=='", "'!='", "'>'", "'<'", 
                     "'>='", "'<='", "'+'", "'-'", "'*'", "'/'", "'%'", 
                     "'^'", "'!'", "'let'", "'print'", "'if'", "'else'", 
                     "'while'", "'nil'", "';'", "'='", "'('", "')'", "'{'", 
                     "'}'", "','", "'String'", "'Int'", "'Boolean'", "'Float'", 
                     "'protected'" ];

var symbolicNames = [ null, "OR", "AND", "EQ", "NEQ", "GT", "LT", "GTEQ", 
                      "LTEQ", "PLUS", "MINUS", "MULT", "DIV", "MOD", "POW", 
                      "NOT", "LET", "PRINT", "IF", "ELSE", "WHILE", "NIL", 
                      "SCOL", "ASSIGN", "OPAR", "CPAR", "OBRACE", "CBRACE", 
                      "COMMA", "TYPE_STR", "TYPE_INT", "TYPE_BOOL", "TYPE_FLOAT", 
                      "PROT", "BOOL", "VAR", "INT", "FLOAT", "STRING", "COMMENT", 
                      "LINE_COMMENT", "WS" ];

var ruleNames =  [ "program", "block", "statement", "let", "print", "ifstat", 
                   "whilestat", "condition_block", "stat_block", "expr", 
                   "atom" ];

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
sandboxParser.OR = 1;
sandboxParser.AND = 2;
sandboxParser.EQ = 3;
sandboxParser.NEQ = 4;
sandboxParser.GT = 5;
sandboxParser.LT = 6;
sandboxParser.GTEQ = 7;
sandboxParser.LTEQ = 8;
sandboxParser.PLUS = 9;
sandboxParser.MINUS = 10;
sandboxParser.MULT = 11;
sandboxParser.DIV = 12;
sandboxParser.MOD = 13;
sandboxParser.POW = 14;
sandboxParser.NOT = 15;
sandboxParser.LET = 16;
sandboxParser.PRINT = 17;
sandboxParser.IF = 18;
sandboxParser.ELSE = 19;
sandboxParser.WHILE = 20;
sandboxParser.NIL = 21;
sandboxParser.SCOL = 22;
sandboxParser.ASSIGN = 23;
sandboxParser.OPAR = 24;
sandboxParser.CPAR = 25;
sandboxParser.OBRACE = 26;
sandboxParser.CBRACE = 27;
sandboxParser.COMMA = 28;
sandboxParser.TYPE_STR = 29;
sandboxParser.TYPE_INT = 30;
sandboxParser.TYPE_BOOL = 31;
sandboxParser.TYPE_FLOAT = 32;
sandboxParser.PROT = 33;
sandboxParser.BOOL = 34;
sandboxParser.VAR = 35;
sandboxParser.INT = 36;
sandboxParser.FLOAT = 37;
sandboxParser.STRING = 38;
sandboxParser.COMMENT = 39;
sandboxParser.LINE_COMMENT = 40;
sandboxParser.WS = 41;

sandboxParser.RULE_program = 0;
sandboxParser.RULE_block = 1;
sandboxParser.RULE_statement = 2;
sandboxParser.RULE_let = 3;
sandboxParser.RULE_print = 4;
sandboxParser.RULE_ifstat = 5;
sandboxParser.RULE_whilestat = 6;
sandboxParser.RULE_condition_block = 7;
sandboxParser.RULE_stat_block = 8;
sandboxParser.RULE_expr = 9;
sandboxParser.RULE_atom = 10;


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

ProgramContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(sandboxParser.EOF, 0);
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

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sandboxParser.ProgramContext = ProgramContext;

sandboxParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, sandboxParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.block();
        this.state = 23;
        this.match(sandboxParser.EOF);
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


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sandboxParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sandboxParser.BlockContext = BlockContext;

sandboxParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, sandboxParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sandboxParser.LET) | (1 << sandboxParser.PRINT) | (1 << sandboxParser.IF) | (1 << sandboxParser.WHILE))) !== 0)) {
            this.state = 25;
            this.statement();
            this.state = 30;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

StatementContext.prototype.ifstat = function() {
    return this.getTypedRuleContext(IfstatContext,0);
};

StatementContext.prototype.whilestat = function() {
    return this.getTypedRuleContext(WhilestatContext,0);
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

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sandboxParser.StatementContext = StatementContext;

sandboxParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, sandboxParser.RULE_statement);
    try {
        this.state = 35;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sandboxParser.LET:
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            this.let();
            break;
        case sandboxParser.PRINT:
            this.enterOuterAlt(localctx, 2);
            this.state = 32;
            this.print();
            break;
        case sandboxParser.IF:
            this.enterOuterAlt(localctx, 3);
            this.state = 33;
            this.ifstat();
            break;
        case sandboxParser.WHILE:
            this.enterOuterAlt(localctx, 4);
            this.state = 34;
            this.whilestat();
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

LetContext.prototype.LET = function() {
    return this.getToken(sandboxParser.LET, 0);
};

LetContext.prototype.VAR = function() {
    return this.getToken(sandboxParser.VAR, 0);
};

LetContext.prototype.ASSIGN = function() {
    return this.getToken(sandboxParser.ASSIGN, 0);
};

LetContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

LetContext.prototype.SCOL = function() {
    return this.getToken(sandboxParser.SCOL, 0);
};

LetContext.prototype.PROT = function() {
    return this.getToken(sandboxParser.PROT, 0);
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

LetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitLet(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sandboxParser.LetContext = LetContext;

sandboxParser.prototype.let = function() {

    var localctx = new LetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, sandboxParser.RULE_let);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.match(sandboxParser.LET);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===sandboxParser.PROT) {
            this.state = 38;
            this.match(sandboxParser.PROT);
        }

        this.state = 41;
        this.match(sandboxParser.VAR);
        this.state = 42;
        this.match(sandboxParser.ASSIGN);
        this.state = 43;
        this.expr(0);
        this.state = 44;
        this.match(sandboxParser.SCOL);
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

PrintContext.prototype.PRINT = function() {
    return this.getToken(sandboxParser.PRINT, 0);
};

PrintContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

PrintContext.prototype.SCOL = function() {
    return this.getToken(sandboxParser.SCOL, 0);
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

PrintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitPrint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sandboxParser.PrintContext = PrintContext;

sandboxParser.prototype.print = function() {

    var localctx = new PrintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, sandboxParser.RULE_print);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.match(sandboxParser.PRINT);
        this.state = 47;
        this.expr(0);
        this.state = 48;
        this.match(sandboxParser.SCOL);
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


function IfstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sandboxParser.RULE_ifstat;
    return this;
}

IfstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfstatContext.prototype.constructor = IfstatContext;

IfstatContext.prototype.IF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sandboxParser.IF);
    } else {
        return this.getToken(sandboxParser.IF, i);
    }
};


IfstatContext.prototype.condition_block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Condition_blockContext);
    } else {
        return this.getTypedRuleContext(Condition_blockContext,i);
    }
};

IfstatContext.prototype.ELSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sandboxParser.ELSE);
    } else {
        return this.getToken(sandboxParser.ELSE, i);
    }
};


IfstatContext.prototype.stat_block = function() {
    return this.getTypedRuleContext(Stat_blockContext,0);
};

IfstatContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterIfstat(this);
	}
};

IfstatContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitIfstat(this);
	}
};

IfstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitIfstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sandboxParser.IfstatContext = IfstatContext;

sandboxParser.prototype.ifstat = function() {

    var localctx = new IfstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, sandboxParser.RULE_ifstat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(sandboxParser.IF);
        this.state = 51;
        this.condition_block();
        this.state = 57;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 52;
                this.match(sandboxParser.ELSE);
                this.state = 53;
                this.match(sandboxParser.IF);
                this.state = 54;
                this.condition_block(); 
            }
            this.state = 59;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

        this.state = 62;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        if(la_===1) {
            this.state = 60;
            this.match(sandboxParser.ELSE);
            this.state = 61;
            this.stat_block();

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


function WhilestatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sandboxParser.RULE_whilestat;
    return this;
}

WhilestatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhilestatContext.prototype.constructor = WhilestatContext;

WhilestatContext.prototype.WHILE = function() {
    return this.getToken(sandboxParser.WHILE, 0);
};

WhilestatContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

WhilestatContext.prototype.stat_block = function() {
    return this.getTypedRuleContext(Stat_blockContext,0);
};

WhilestatContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterWhilestat(this);
	}
};

WhilestatContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitWhilestat(this);
	}
};

WhilestatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitWhilestat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sandboxParser.WhilestatContext = WhilestatContext;

sandboxParser.prototype.whilestat = function() {

    var localctx = new WhilestatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, sandboxParser.RULE_whilestat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(sandboxParser.WHILE);
        this.state = 65;
        this.expr(0);
        this.state = 66;
        this.stat_block();
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


function Condition_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sandboxParser.RULE_condition_block;
    return this;
}

Condition_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Condition_blockContext.prototype.constructor = Condition_blockContext;

Condition_blockContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Condition_blockContext.prototype.stat_block = function() {
    return this.getTypedRuleContext(Stat_blockContext,0);
};

Condition_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterCondition_block(this);
	}
};

Condition_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitCondition_block(this);
	}
};

Condition_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitCondition_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sandboxParser.Condition_blockContext = Condition_blockContext;

sandboxParser.prototype.condition_block = function() {

    var localctx = new Condition_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, sandboxParser.RULE_condition_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.expr(0);
        this.state = 69;
        this.stat_block();
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


function Stat_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sandboxParser.RULE_stat_block;
    return this;
}

Stat_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stat_blockContext.prototype.constructor = Stat_blockContext;

Stat_blockContext.prototype.OBRACE = function() {
    return this.getToken(sandboxParser.OBRACE, 0);
};

Stat_blockContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

Stat_blockContext.prototype.CBRACE = function() {
    return this.getToken(sandboxParser.CBRACE, 0);
};

Stat_blockContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

Stat_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterStat_block(this);
	}
};

Stat_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitStat_block(this);
	}
};

Stat_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitStat_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




sandboxParser.Stat_blockContext = Stat_blockContext;

sandboxParser.prototype.stat_block = function() {

    var localctx = new Stat_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, sandboxParser.RULE_stat_block);
    try {
        this.state = 76;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sandboxParser.OBRACE:
            this.enterOuterAlt(localctx, 1);
            this.state = 71;
            this.match(sandboxParser.OBRACE);
            this.state = 72;
            this.block();
            this.state = 73;
            this.match(sandboxParser.CBRACE);
            break;
        case sandboxParser.LET:
        case sandboxParser.PRINT:
        case sandboxParser.IF:
        case sandboxParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 75;
            this.statement();
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


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sandboxParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function NotExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExprContext.prototype = Object.create(ExprContext.prototype);
NotExprContext.prototype.constructor = NotExprContext;

sandboxParser.NotExprContext = NotExprContext;

NotExprContext.prototype.NOT = function() {
    return this.getToken(sandboxParser.NOT, 0);
};

NotExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NotExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterNotExpr(this);
	}
};

NotExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitNotExpr(this);
	}
};

NotExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitNotExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryMinusExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExprContext.prototype = Object.create(ExprContext.prototype);
UnaryMinusExprContext.prototype.constructor = UnaryMinusExprContext;

sandboxParser.UnaryMinusExprContext = UnaryMinusExprContext;

UnaryMinusExprContext.prototype.MINUS = function() {
    return this.getToken(sandboxParser.MINUS, 0);
};

UnaryMinusExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
UnaryMinusExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterUnaryMinusExpr(this);
	}
};

UnaryMinusExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitUnaryMinusExpr(this);
	}
};

UnaryMinusExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitUnaryMinusExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplicationExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicationExprContext.prototype = Object.create(ExprContext.prototype);
MultiplicationExprContext.prototype.constructor = MultiplicationExprContext;

sandboxParser.MultiplicationExprContext = MultiplicationExprContext;

MultiplicationExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

MultiplicationExprContext.prototype.MULT = function() {
    return this.getToken(sandboxParser.MULT, 0);
};

MultiplicationExprContext.prototype.DIV = function() {
    return this.getToken(sandboxParser.DIV, 0);
};

MultiplicationExprContext.prototype.MOD = function() {
    return this.getToken(sandboxParser.MOD, 0);
};
MultiplicationExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterMultiplicationExpr(this);
	}
};

MultiplicationExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitMultiplicationExpr(this);
	}
};

MultiplicationExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitMultiplicationExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AtomExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomExprContext.prototype = Object.create(ExprContext.prototype);
AtomExprContext.prototype.constructor = AtomExprContext;

sandboxParser.AtomExprContext = AtomExprContext;

AtomExprContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};
AtomExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterAtomExpr(this);
	}
};

AtomExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitAtomExpr(this);
	}
};

AtomExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitAtomExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExprContext.prototype = Object.create(ExprContext.prototype);
OrExprContext.prototype.constructor = OrExprContext;

sandboxParser.OrExprContext = OrExprContext;

OrExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

OrExprContext.prototype.OR = function() {
    return this.getToken(sandboxParser.OR, 0);
};
OrExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterOrExpr(this);
	}
};

OrExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitOrExpr(this);
	}
};

OrExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitOrExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AdditiveExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveExprContext.prototype = Object.create(ExprContext.prototype);
AdditiveExprContext.prototype.constructor = AdditiveExprContext;

sandboxParser.AdditiveExprContext = AdditiveExprContext;

AdditiveExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AdditiveExprContext.prototype.PLUS = function() {
    return this.getToken(sandboxParser.PLUS, 0);
};

AdditiveExprContext.prototype.MINUS = function() {
    return this.getToken(sandboxParser.MINUS, 0);
};
AdditiveExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterAdditiveExpr(this);
	}
};

AdditiveExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitAdditiveExpr(this);
	}
};

AdditiveExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitAdditiveExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowExprContext.prototype = Object.create(ExprContext.prototype);
PowExprContext.prototype.constructor = PowExprContext;

sandboxParser.PowExprContext = PowExprContext;

PowExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

PowExprContext.prototype.POW = function() {
    return this.getToken(sandboxParser.POW, 0);
};
PowExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterPowExpr(this);
	}
};

PowExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitPowExpr(this);
	}
};

PowExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitPowExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelationalExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationalExprContext.prototype = Object.create(ExprContext.prototype);
RelationalExprContext.prototype.constructor = RelationalExprContext;

sandboxParser.RelationalExprContext = RelationalExprContext;

RelationalExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

RelationalExprContext.prototype.LTEQ = function() {
    return this.getToken(sandboxParser.LTEQ, 0);
};

RelationalExprContext.prototype.GTEQ = function() {
    return this.getToken(sandboxParser.GTEQ, 0);
};

RelationalExprContext.prototype.LT = function() {
    return this.getToken(sandboxParser.LT, 0);
};

RelationalExprContext.prototype.GT = function() {
    return this.getToken(sandboxParser.GT, 0);
};
RelationalExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterRelationalExpr(this);
	}
};

RelationalExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitRelationalExpr(this);
	}
};

RelationalExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitRelationalExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqualityExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExprContext.prototype = Object.create(ExprContext.prototype);
EqualityExprContext.prototype.constructor = EqualityExprContext;

sandboxParser.EqualityExprContext = EqualityExprContext;

EqualityExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

EqualityExprContext.prototype.EQ = function() {
    return this.getToken(sandboxParser.EQ, 0);
};

EqualityExprContext.prototype.NEQ = function() {
    return this.getToken(sandboxParser.NEQ, 0);
};
EqualityExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterEqualityExpr(this);
	}
};

EqualityExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitEqualityExpr(this);
	}
};

EqualityExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitEqualityExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AndExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExprContext.prototype = Object.create(ExprContext.prototype);
AndExprContext.prototype.constructor = AndExprContext;

sandboxParser.AndExprContext = AndExprContext;

AndExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AndExprContext.prototype.AND = function() {
    return this.getToken(sandboxParser.AND, 0);
};
AndExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterAndExpr(this);
	}
};

AndExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitAndExpr(this);
	}
};

AndExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitAndExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



sandboxParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, sandboxParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sandboxParser.MINUS:
            localctx = new UnaryMinusExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 79;
            this.match(sandboxParser.MINUS);
            this.state = 80;
            this.expr(9);
            break;
        case sandboxParser.NOT:
            localctx = new NotExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 81;
            this.match(sandboxParser.NOT);
            this.state = 82;
            this.expr(8);
            break;
        case sandboxParser.NIL:
        case sandboxParser.OPAR:
        case sandboxParser.BOOL:
        case sandboxParser.VAR:
        case sandboxParser.INT:
        case sandboxParser.FLOAT:
        case sandboxParser.STRING:
            localctx = new AtomExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 83;
            this.atom();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 109;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 107;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sandboxParser.RULE_expr);
                    this.state = 86;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 87;
                    this.match(sandboxParser.POW);
                    this.state = 88;
                    this.expr(11);
                    break;

                case 2:
                    localctx = new MultiplicationExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sandboxParser.RULE_expr);
                    this.state = 89;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 90;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sandboxParser.MULT) | (1 << sandboxParser.DIV) | (1 << sandboxParser.MOD))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 91;
                    this.expr(8);
                    break;

                case 3:
                    localctx = new AdditiveExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sandboxParser.RULE_expr);
                    this.state = 92;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 93;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===sandboxParser.PLUS || _la===sandboxParser.MINUS)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 94;
                    this.expr(7);
                    break;

                case 4:
                    localctx = new RelationalExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sandboxParser.RULE_expr);
                    this.state = 95;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 96;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sandboxParser.GT) | (1 << sandboxParser.LT) | (1 << sandboxParser.GTEQ) | (1 << sandboxParser.LTEQ))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 97;
                    this.expr(6);
                    break;

                case 5:
                    localctx = new EqualityExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sandboxParser.RULE_expr);
                    this.state = 98;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 99;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===sandboxParser.EQ || _la===sandboxParser.NEQ)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 100;
                    this.expr(5);
                    break;

                case 6:
                    localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sandboxParser.RULE_expr);
                    this.state = 101;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 102;
                    this.match(sandboxParser.AND);
                    this.state = 103;
                    this.expr(4);
                    break;

                case 7:
                    localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, sandboxParser.RULE_expr);
                    this.state = 104;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 105;
                    this.match(sandboxParser.OR);
                    this.state = 106;
                    this.expr(3);
                    break;

                } 
            }
            this.state = 111;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sandboxParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;


 
AtomContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ParExprContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParExprContext.prototype = Object.create(AtomContext.prototype);
ParExprContext.prototype.constructor = ParExprContext;

sandboxParser.ParExprContext = ParExprContext;

ParExprContext.prototype.OPAR = function() {
    return this.getToken(sandboxParser.OPAR, 0);
};

ParExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParExprContext.prototype.CPAR = function() {
    return this.getToken(sandboxParser.CPAR, 0);
};
ParExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterParExpr(this);
	}
};

ParExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitParExpr(this);
	}
};

ParExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitParExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BooleanAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanAtomContext.prototype = Object.create(AtomContext.prototype);
BooleanAtomContext.prototype.constructor = BooleanAtomContext;

sandboxParser.BooleanAtomContext = BooleanAtomContext;

BooleanAtomContext.prototype.BOOL = function() {
    return this.getToken(sandboxParser.BOOL, 0);
};
BooleanAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterBooleanAtom(this);
	}
};

BooleanAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitBooleanAtom(this);
	}
};

BooleanAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitBooleanAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VarAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VarAtomContext.prototype = Object.create(AtomContext.prototype);
VarAtomContext.prototype.constructor = VarAtomContext;

sandboxParser.VarAtomContext = VarAtomContext;

VarAtomContext.prototype.VAR = function() {
    return this.getToken(sandboxParser.VAR, 0);
};
VarAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterVarAtom(this);
	}
};

VarAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitVarAtom(this);
	}
};

VarAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitVarAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringAtomContext.prototype = Object.create(AtomContext.prototype);
StringAtomContext.prototype.constructor = StringAtomContext;

sandboxParser.StringAtomContext = StringAtomContext;

StringAtomContext.prototype.STRING = function() {
    return this.getToken(sandboxParser.STRING, 0);
};
StringAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterStringAtom(this);
	}
};

StringAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitStringAtom(this);
	}
};

StringAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitStringAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NilAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NilAtomContext.prototype = Object.create(AtomContext.prototype);
NilAtomContext.prototype.constructor = NilAtomContext;

sandboxParser.NilAtomContext = NilAtomContext;

NilAtomContext.prototype.NIL = function() {
    return this.getToken(sandboxParser.NIL, 0);
};
NilAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterNilAtom(this);
	}
};

NilAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitNilAtom(this);
	}
};

NilAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitNilAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberAtomContext(parser, ctx) {
	AtomContext.call(this, parser);
    AtomContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberAtomContext.prototype = Object.create(AtomContext.prototype);
NumberAtomContext.prototype.constructor = NumberAtomContext;

sandboxParser.NumberAtomContext = NumberAtomContext;

NumberAtomContext.prototype.INT = function() {
    return this.getToken(sandboxParser.INT, 0);
};

NumberAtomContext.prototype.FLOAT = function() {
    return this.getToken(sandboxParser.FLOAT, 0);
};
NumberAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.enterNumberAtom(this);
	}
};

NumberAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sandboxListener ) {
        listener.exitNumberAtom(this);
	}
};

NumberAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof sandboxVisitor ) {
        return visitor.visitNumberAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};



sandboxParser.AtomContext = AtomContext;

sandboxParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, sandboxParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 121;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case sandboxParser.OPAR:
            localctx = new ParExprContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 112;
            this.match(sandboxParser.OPAR);
            this.state = 113;
            this.expr(0);
            this.state = 114;
            this.match(sandboxParser.CPAR);
            break;
        case sandboxParser.INT:
        case sandboxParser.FLOAT:
            localctx = new NumberAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 116;
            _la = this._input.LA(1);
            if(!(_la===sandboxParser.INT || _la===sandboxParser.FLOAT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case sandboxParser.BOOL:
            localctx = new BooleanAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 117;
            this.match(sandboxParser.BOOL);
            break;
        case sandboxParser.VAR:
            localctx = new VarAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 118;
            this.match(sandboxParser.VAR);
            break;
        case sandboxParser.STRING:
            localctx = new StringAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 119;
            this.match(sandboxParser.STRING);
            break;
        case sandboxParser.NIL:
            localctx = new NilAtomContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 120;
            this.match(sandboxParser.NIL);
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


sandboxParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 9:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

sandboxParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.sandboxParser = sandboxParser;
