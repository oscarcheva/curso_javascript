'use strict'

var numero = 22;
var texto1 = "Hola";
var texto2 = "Hola de nuevo de";

var dato = numero.toString();
console.log(dato);
dato = texto1.toUpperCase();
console.log(dato);
dato = texto1.toLowerCase();
console.log(dato);

//Calcular longitud texto

console.log(dato.length);

// Concatenar

var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

var busqueda = texto2.indexOf("de");
console.log(busqueda);
busqueda = texto2.lastIndexOf("de");
console.log(busqueda);
busqueda = texto2.match("de");
console.log(busqueda);
busqueda = texto2.substring(9,3);
console.log(busqueda);
busqueda = texto2.charAt(6);
console.log(busqueda);
busqueda = texto2.startsWith("Ho");
console.log(busqueda);
busqueda = texto2.includes("de");
console.log(busqueda);



