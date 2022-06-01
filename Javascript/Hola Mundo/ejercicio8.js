'use strict'

var numero1 = parseInt(prompt("Numero 1: ",0))
var numero2 = parseInt(prompt("Numero 2: ",0))

while(numero1 == 0 || numero2 ==0 || isNaN(numero1)|| isNaN(numero2)){
     numero1 = parseInt(prompt("Numero 1: ",0))
     numero2 = parseInt(prompt("Numero 2: ",0))
}

alert("Suma:" +(numero1+numero2));
alert("Resta:" +(numero1-numero2));
alert("Multiplicacion:" +(numero1*numero2));
alert("Division:" +(numero1/numero2));
    
    
    
    