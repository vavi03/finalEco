//juego 1

var juego1img= document.querySelector('.juego');
var juego1preguntas= document.querySelector('.preguntas');

function cambiarPantallaJuego1(){
    var t= setTimeout("juego1cambio()",3000);
}
cambiarPantallaJuego1();

function juego1cambio(){
    juego1img.style.display= "none";
   console.log("cambie");
   juego1preguntas.style.display= "flex";
}


