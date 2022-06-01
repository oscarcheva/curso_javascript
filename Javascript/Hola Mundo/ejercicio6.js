'use strict'

var numero = parseInt(prompt("Ingrese el numero", 0));

while (isNaN(numero) == true) {
    numero = parseInt(prompt("Ingrese el numero", 0));
}

if (numero % 2 == 0)
    alert("Numero par");
else
    alert("Numero impar")