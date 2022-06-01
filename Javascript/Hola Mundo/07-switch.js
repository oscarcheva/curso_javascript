'use strict'

// Switch

var edad = 25;
var imprime = "";

switch (edad){
    case 18:
        imprime = "Mayor de edad"
        break;
    case 25:
        imprime = "Adulto"
        break;
    case 40:
        imprime = "Criseado"
        break;
    case 75:
        imprime = "Pure"
        break;
    default:
        imprime = "Edad neutra"
        break
}

console.log(imprime)