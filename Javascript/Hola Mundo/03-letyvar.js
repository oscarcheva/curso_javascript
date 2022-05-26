'use strict'

alert("Hola");
var numero = 40;
console.log(numero);
if(true){
    var numero = 50;
    console.log(numero);
}
console.log(numero)

// Let el alcance es de un bloque de codigo


var texto ="curso";
console.log(texto);

if(true){
    let texto="cursote"
    console.log(texto);
}
console.log(texto);