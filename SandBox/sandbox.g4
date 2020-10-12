grammar sandbox;

program : statement+;

statement : let | show ;

let : VAR '=' INT ;
show : 'show' (INT | VAR) ;

fragment NUMBER     : '0'..'9' ;

VAR : [a-z]+ ;
INT : NUMBER+ ;
WS : [ \n\t]+ -> skip;
