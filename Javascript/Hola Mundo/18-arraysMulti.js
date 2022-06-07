'use strict'

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["Nemo", "Lightyear"]
peliculas.sort();

var cine = [categorias, peliculas];

console.log(cine[0][1]);console.log(cine[1][0]);


peliculas.pop();
peliculas.push = "Batman";
console.log(peliculas);

var indice = peliculas.indexOf("Nemo");
console.log(indice);

var joineado = peliculas.join();
console.log(joineado);

console.log(peliculas.reverse());

var cadena = "hola, hola1, hola2"
var cadenaArray = cadena.split(", ");
console.log(cadenaArray);

for(let cate in categorias){
    console.log(categorias[cate]);
}


