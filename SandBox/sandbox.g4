grammar sandbox;

program : block EOF ;

block : statement* ;

statement : let | print | ifstat | whilestat | jseval ;

let : LET PROT? VAR ASSIGN expr SCOL ;
print : PRINT OPAR expr CPAR SCOL ;
ifstat : IF condition_block (ELSE IF condition_block)* (ELSE stat_block)? ;
whilestat : WHILE expr stat_block ;
jseval : JSEV OPAR STRING CPAR SCOL ;

condition_block : expr stat_block ;
stat_block : OBRACE block CBRACE | statement ;

expr
    : expr POW<assoc=right> expr           #powExpr
    | MINUS expr                           #unaryMinusExpr
    | NOT expr                             #notExpr
    | expr op=(MULT | DIV | MOD) expr      #multiplicationExpr
    | expr op=(PLUS | MINUS) expr          #additiveExpr
    | expr op=(LTEQ | GTEQ | LT | GT) expr #relationalExpr
    | expr op=(EQ | NEQ) expr              #equalityExpr
    | expr AND expr                        #andExpr
    | expr OR expr                         #orExpr
    | atom                                 #atomExpr
    ;

atom
    : OPAR expr CPAR #parExpr
    | (INT | FLOAT)  #numberAtom
    | BOOL           #booleanAtom
    | VAR            #varAtom
    | STRING         #stringAtom
    | NIL            #nilAtom
    ;

fragment NUMBER : '0'..'9' ;
fragment VARCHAR : ('A'..'Z') | ('a'..'z') | '_' ;
fragment STRING_CHAR : ~('"');
fragment DOT : '.';
fragment ESCAPED_QUOTE : '\\"';

OR : '||';
AND : '&&';
EQ : '==';
NEQ : '!=';
GT : '>';
LT : '<';
GTEQ : '>=';
LTEQ : '<=';
PLUS : '+';
MINUS : '-';
MULT : '*';
DIV : '/';
MOD : '%';
POW : '^';
NOT : '!';

LET : 'let' ;
PRINT : 'print' ;
JSEV : 'jsEval' ;
IF : 'if';
ELSE : 'else';
WHILE : 'while' ;
NIL : 'nil';

SCOL : ';';
ASSIGN : '=';
OPAR : '(';
CPAR : ')';
OBRACE : '{';
CBRACE : '}';
COMMA : ',';

TYPE_STR : 'String' ;
TYPE_INT : 'Int' ;
TYPE_BOOL : 'Boolean' ;
TYPE_FLOAT : 'Float' ;

PROT : 'protected' ;
BOOL : 'true' | 'false' ;
VAR : VARCHAR+ ;
INT : NUMBER+ ;
FLOAT : NUMBER+ DOT? NUMBER*;
STRING : '"' (STRING_CHAR | ESCAPED_QUOTE)* '"' ;

COMMENT : '/*' .*? '*/' -> skip ;
LINE_COMMENT : '//' ~[\r\n]* -> skip ;

WS : [ \n\t]+ -> skip ;