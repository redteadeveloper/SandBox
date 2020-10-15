// Generated from sandbox.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by sandboxParser.
function sandboxListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

sandboxListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
sandboxListener.prototype.constructor = sandboxListener;

// Enter a parse tree produced by sandboxParser#program.
sandboxListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#program.
sandboxListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#block.
sandboxListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#block.
sandboxListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#statement.
sandboxListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#statement.
sandboxListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#let.
sandboxListener.prototype.enterLet = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#let.
sandboxListener.prototype.exitLet = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#print.
sandboxListener.prototype.enterPrint = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#print.
sandboxListener.prototype.exitPrint = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#ifstat.
sandboxListener.prototype.enterIfstat = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#ifstat.
sandboxListener.prototype.exitIfstat = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#condition_block.
sandboxListener.prototype.enterCondition_block = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#condition_block.
sandboxListener.prototype.exitCondition_block = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#stat_block.
sandboxListener.prototype.enterStat_block = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#stat_block.
sandboxListener.prototype.exitStat_block = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#notExpr.
sandboxListener.prototype.enterNotExpr = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#notExpr.
sandboxListener.prototype.exitNotExpr = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#unaryMinusExpr.
sandboxListener.prototype.enterUnaryMinusExpr = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#unaryMinusExpr.
sandboxListener.prototype.exitUnaryMinusExpr = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#multiplicationExpr.
sandboxListener.prototype.enterMultiplicationExpr = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#multiplicationExpr.
sandboxListener.prototype.exitMultiplicationExpr = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#atomExpr.
sandboxListener.prototype.enterAtomExpr = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#atomExpr.
sandboxListener.prototype.exitAtomExpr = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#orExpr.
sandboxListener.prototype.enterOrExpr = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#orExpr.
sandboxListener.prototype.exitOrExpr = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#additiveExpr.
sandboxListener.prototype.enterAdditiveExpr = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#additiveExpr.
sandboxListener.prototype.exitAdditiveExpr = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#powExpr.
sandboxListener.prototype.enterPowExpr = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#powExpr.
sandboxListener.prototype.exitPowExpr = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#relationalExpr.
sandboxListener.prototype.enterRelationalExpr = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#relationalExpr.
sandboxListener.prototype.exitRelationalExpr = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#equalityExpr.
sandboxListener.prototype.enterEqualityExpr = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#equalityExpr.
sandboxListener.prototype.exitEqualityExpr = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#andExpr.
sandboxListener.prototype.enterAndExpr = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#andExpr.
sandboxListener.prototype.exitAndExpr = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#parExpr.
sandboxListener.prototype.enterParExpr = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#parExpr.
sandboxListener.prototype.exitParExpr = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#numberAtom.
sandboxListener.prototype.enterNumberAtom = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#numberAtom.
sandboxListener.prototype.exitNumberAtom = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#booleanAtom.
sandboxListener.prototype.enterBooleanAtom = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#booleanAtom.
sandboxListener.prototype.exitBooleanAtom = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#varAtom.
sandboxListener.prototype.enterVarAtom = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#varAtom.
sandboxListener.prototype.exitVarAtom = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#stringAtom.
sandboxListener.prototype.enterStringAtom = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#stringAtom.
sandboxListener.prototype.exitStringAtom = function(ctx) {
};


// Enter a parse tree produced by sandboxParser#nilAtom.
sandboxListener.prototype.enterNilAtom = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#nilAtom.
sandboxListener.prototype.exitNilAtom = function(ctx) {
};



exports.sandboxListener = sandboxListener;