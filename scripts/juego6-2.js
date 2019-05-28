var juegoimg = document.querySelector('.juego');
var botonCambio= document.querySelector('.btn_find2');


var timer = document.querySelector('.timer');
var contador = 60;

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

botonCambio.addEventListener('click', function(){
    console.log("encontre");
});