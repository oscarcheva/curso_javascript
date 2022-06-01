'use strict'
var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Mete numeros hasta que sea negativo", 0));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma += numero;
        contador++;
    }
} while (numero > 0)

alert("La suma de todos es: " + suma);
alert("Las iteraciones fueron: " + contador);
alert("El promedio fue : " + (suma / contador));