'use strict'

// Funcion anonima, funcion sin nombre

var pelicula = function (nombre) {
    return "La pelicula es " + nombre;
}

function sumame(num1, num2, sumaYMuestra, sumaPorDos) {
    var sumar = num1 + num2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

//CallBack y Arrow

sumame(5, 3, function (dato) {
    console.log("La suma es ", dato)
},
    dato => {
        console.log("La suma por dos es ", (dato * 2));
    });

    



