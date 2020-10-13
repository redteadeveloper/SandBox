grammar sandbox;

program : statement+;

statement : let | print ;

let : 'let' PROT? VAR '=' (INT | STRING) ';' ;
print : 'print' (INT | VAR | STRING) ';' ;

fragment NUMBER : '0'..'9' ;
fragment VARCHAR : ('A'..'Z') | ('a'..'z') | '_' ;
fragment STRING_CHAR : ~('"' | '\'');

BOOL : 'true' | 'false' ;
PROT : 'protected' ;
VAR : VARCHAR+ ;
INT : NUMBER+ ;
STRING : ('\'' STRING_CHAR* '\'' | '"' STRING_CHAR* '"') ;

COMMENT : '/*' .*? '*/' -> skip ;
LINE_COMMENT : '//' ~[\r\n]* -> skip ;

WS : [ \n\t]+ -> skip ;