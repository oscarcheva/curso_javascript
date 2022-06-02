'use strict'

//Si se define una variable de una funcion es local la variable

function holaMundo(texto){
    console.log(texto);
    console.log(numero.toString());
    var hola = "Variable en funcion";
    console.log(hola)

}
var numero = 12;
var texto = "Variable global"
holaMundo(texto);
