'use strict'

var numero = parseInt(prompt("El numero", 1));

for (var i = 1; i <= numero; i++) {
    if (numero % i == 0)
        console.log("Divisor: " + i);
}