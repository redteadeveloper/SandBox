// Generated from sandbox.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4');

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


// Enter a parse tree produced by sandboxParser#show.
sandboxListener.prototype.enterShow = function(ctx) {
};

// Exit a parse tree produced by sandboxParser#show.
sandboxListener.prototype.exitShow = function(ctx) {
};



exports.sandboxListener = sandboxListener;
