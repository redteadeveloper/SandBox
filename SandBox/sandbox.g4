grammar sandbox;

program : statement+;

statement : let | print ;

let : 'let' PROT? VAR '=' (BOOL | INT | DOUBLE | STRING) ';' ;
print : 'print' (BOOL | INT | DOUBLE | VAR | STRING) ';' ;

fragment NUMBER : '0'..'9' ;
fragment VARCHAR : ('A'..'Z') | ('a'..'z') | '_' ;
fragment STRING_CHAR : ~('"' | '\'');
fragment DOT : '.';

BOOL : 'true' | 'false' ;
PROT : 'protected' ;
VAR : VARCHAR+ ;
INT : NUMBER+ ;
DOUBLE : NUMBER+ DOT? NUMBER*;
STRING : ('\'' STRING_CHAR* '\'' | '"' STRING_CHAR* '"') ;

COMMENT : '/*' .*? '*/' -> skip ;
LINE_COMMENT : '//' ~[\r\n]* -> skip ;

WS : [ \n\t]+ -> skip ;