'use strict'

var numero = parseInt(prompt("Numero de la tabla: ", 1))
document.write("Tabla del: " + numero);

for (var i = 0; i <= 10; i++) {
    document.write(i + " X " + numero + " = " + (numero * i) + "<br>")

}