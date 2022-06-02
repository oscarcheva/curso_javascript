'use strict'

// Parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("Fruta 1: " + fruta1)
    console.log("Fruta 2: " + fruta2)   
    console.log(restoDeFrutas);
}

// Tres puntos es tipo Rest
listadoFrutas("Manzana", "Naranja", "Pera","Mandarina");

var frutas = ["Cambur", "Fresa"];
listadoFrutas(frutas, "Tomate", "Coco", "Ciruela")


