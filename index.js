// alert("Hola Mundo")
 
let parrafoInicial = document.getElementById("parrafoInicial");


// console.log(parrafoInicial);
// parrafoInicial =6;

console.log(parrafoInicial);
parrafoInicial.onclick = function(){
    accion();
}

function accion () {
    parrafoInicial.style.color ="green"

}