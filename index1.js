
 
const parrafoInicial = document.getElementById("parrafoInicial");



console.log(parrafoInicial);
parrafoInicial.onclick = function(){
    cambiaColorAleatorio();
}

function cambiaColorAleatorio () {
    const colores = [ 
        "red",
        "green",
        "black",
        "cyan"
    ];
    parrafoInicial.style.color =(colores[Math.floor(Math.random()* colores.length)])
}