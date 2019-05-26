

var juego1img= document.querySelector('.juego');
var juego1preguntas= document.querySelector('.preguntas');

function cambiarPantallaJuego(){
    var t= setTimeout("juegocambio()",3000);
}
cambiarPantallaJuego();

function juegocambio(){
    juego1img.style.display= "none";
   console.log("cambie");
   juego1preguntas.style.display= "flex";
}


