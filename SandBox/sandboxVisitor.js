// Generated from sandbox.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by sandboxParser.

function sandboxVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

sandboxVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
sandboxVisitor.prototype.constructor = sandboxVisitor;

// Visit a parse tree produced by sandboxParser#program.
sandboxVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#block.
sandboxVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#statement.
sandboxVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#let.
sandboxVisitor.prototype.visitLet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#print.
sandboxVisitor.prototype.visitPrint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#ifstat.
sandboxVisitor.prototype.visitIfstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#whilestat.
sandboxVisitor.prototype.visitWhilestat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#condition_block.
sandboxVisitor.prototype.visitCondition_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#stat_block.
sandboxVisitor.prototype.visitStat_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#notExpr.
sandboxVisitor.prototype.visitNotExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#unaryMinusExpr.
sandboxVisitor.prototype.visitUnaryMinusExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#multiplicationExpr.
sandboxVisitor.prototype.visitMultiplicationExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#atomExpr.
sandboxVisitor.prototype.visitAtomExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#orExpr.
sandboxVisitor.prototype.visitOrExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#additiveExpr.
sandboxVisitor.prototype.visitAdditiveExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#powExpr.
sandboxVisitor.prototype.visitPowExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#relationalExpr.
sandboxVisitor.prototype.visitRelationalExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#equalityExpr.
sandboxVisitor.prototype.visitEqualityExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#andExpr.
sandboxVisitor.prototype.visitAndExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#parExpr.
sandboxVisitor.prototype.visitParExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#numberAtom.
sandboxVisitor.prototype.visitNumberAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#booleanAtom.
sandboxVisitor.prototype.visitBooleanAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#varAtom.
sandboxVisitor.prototype.visitVarAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#stringAtom.
sandboxVisitor.prototype.visitStringAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sandboxParser#nilAtom.
sandboxVisitor.prototype.visitNilAtom = function(ctx) {
  return this.visitChildren(ctx);
};



exports.sandboxVisitor = sandboxVisitor;