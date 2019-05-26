var juegoimg = document.querySelector('.juego');



var timer = document.querySelector('.timer');
var contador = 60;
/*
function cambiarPantallaJuego(){
    var t= setTimeout("juegocambio()",60000);
}
cambiarPantallaJuego();
*/
function cambioTiempo() {
    var x = setInterval("reducirTiempo()", 1000);
}

cambioTiempo();

function reducirTiempo() {
    contador--;
    timer.innerHTML = "00:" + contador;
    if (contador == 60) {
        timer.innerHTML = "01:00" + contador;
    }
    if (contador < 10) {
        timer.innerHTML = "00:0" + contador;
    }
}

function juegocambio() {
    juegoimg.style.display = "none";
    console.log("cambie");
    juegopreguntas.style.display = "flex";
}