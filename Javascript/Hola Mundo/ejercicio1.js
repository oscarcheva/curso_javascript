'use strict'

var numero1;
var numero2;

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {

    numero1 = parseInt(prompt("Numero 1", 0));
    numero2 = parseInt(prompt("Numero 2", 0));

    if (numero1 == numero2) {
        console.log("Son iguales")

    } else if (numero1 > numero2) {
        console.log("Numero1 es mayor");
    }
    else (
        console.log("Numero2 es mayor")
    )
}

