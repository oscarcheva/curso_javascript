'use strict'

function cambiaColor(color) {
    caja.style.background = color;
}

var caja = document.getElementById("micaja");
caja.innerHTML = "Hola";
caja.style.background = "blue";
caja.style.padding = "20px";
caja.style.color = "yellow";
console.log(caja)

var divuno = document.querySelector("#divuno");
console.log(divuno);

var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);
console.log(todosLosDivs[1].textContent);

var seccion = document.querySelector("#miseccion");
var valor;
for ( valor in todosLosDivs) {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo)
}
