grammar sandbox;

program : block EOF ;

block : statement* ;

statement : let | print | ifstat ;

let : 'let' PROT? VAR ASSIGN expr SCOL ;
print : 'print' expr SCOL ;
ifstat : 'if' condition_block ('elsif' condition_block)* ('else' stat_block)? ;

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
fragment STRING_CHAR : ~('"' | '\'');
fragment DOT : '.';

PROT : 'protected' ;
BOOL : 'true' | 'false' ;
VAR : VARCHAR+ ;
INT : NUMBER+ ;
FLOAT : NUMBER+ DOT? NUMBER*;
STRING : ('\'' STRING_CHAR* '\'' | '"' STRING_CHAR* '"') ;

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

NIL : 'nil';
IF : 'if';
ELSE : 'else';

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

COMMENT : '/*' .*? '*/' -> skip ;
LINE_COMMENT : '//' ~[\r\n]* -> skip ;

WS : [ \n\t]+ -> skip ;