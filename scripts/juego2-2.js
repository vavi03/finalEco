var btnEmpezarJuego21= document.querySelector('.continuarJuego');
var juegoimg= document.querySelector('.juego');
var juegopreguntas= document.querySelector('.preguntas');

btnEmpezarJuego21.addEventListener('click', function(){

    juegoimg.style.display= "none";
    console.log("cambie");
    juegopreguntas.style.display= "flex";

}); 