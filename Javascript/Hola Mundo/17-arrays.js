'use strict'

var nombres = ["Oscar", "Lus", "Victoria", 10, true];
console.log(nombres);
var lenguajes = new Array("Ingles", "Espanol", "Francais");
console.log(lenguajes);

var nombre2 = nombres[2];
console.log(nombre2);
console.log(lenguajes.length);

var elemento = parseInt(prompt("Elemento"));

if (elemento > lenguajes.length) {
    alert("Esta mal")
} else {
    alert(lenguajes[elemento]);
}

document.write("<ul>")
for (let i = 0; i < nombres.length; i++) {
    document.write("<li> " + nombres[i] + "</li>")
}
document.write("</ul>")

lenguajes.forEach((elemento, index, array) => {
    console.log(array);
    document.write("<li>" + index + " - " + elemento + "</li>")
});



