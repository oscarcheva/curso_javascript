'use strict'

var numero1 = parseInt(prompt("Numero 1:"));
var numero2 = parseInt(prompt("Numero 2:"))

if (numero1 < numero2){
    console.log("Orden ascendente respecto al numero 1");
    for(let i = numero1+1; i<= numero2; i++)
    console.log(i);
}
else if (numero1 > numero2){
    console.log("Orden descendente respecto al numero 1");
    for(let i = numero2+1; i<= numero1; i++)
    console.log(i);
}
else{
    console.log("Los numeros son iguales");
}