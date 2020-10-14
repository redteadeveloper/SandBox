grammar sandbox;

program : statement+;

statement : let | print | convtype ;

let : 'let' PROT? VAR '=' (BOOL | INT | FLOAT | STRING) ';' ;
print : 'print' (BOOL | INT | VAR | STRING | FLOAT) ';' ;
convtype : 'convType' '(' VAR ',' (TYPE_BOOL | TYPE_FLOAT | TYPE_INT | TYPE_STR) ')' ';' ;

fragment NUMBER : '0'..'9' ;
fragment VARCHAR : ('A'..'Z') | ('a'..'z') | '_' ;
fragment STRING_CHAR : ~('"' | '\'');
fragment DOT : '.';

TYPE_STR : 'String' ;
TYPE_INT : 'Int' ;
TYPE_BOOL : 'Boolean' ;
TYPE_FLOAT : 'Float' ;

BOOL : 'true' | 'false' ;
PROT : 'protected' ;
VAR : VARCHAR+ ;
INT : NUMBER+ ;
FLOAT : NUMBER+ DOT? NUMBER*;
STRING : ('\'' STRING_CHAR* '\'' | '"' STRING_CHAR* '"') ;

COMMENT : '/*' .*? '*/' -> skip ;
LINE_COMMENT : '//' ~[\r\n]* -> skip ;

WS : [ \n\t]+ -> skip ;