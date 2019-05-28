var juegoimg= document.querySelector('.juego');

var botonCambio= document.querySelector('.btn_find');

var timer= document.querySelector('.timer');
var contador= 30;
function cambiarPantallaJuego(){
    var t= setTimeout("juegocambio()",30000);
}
//cambiarPantallaJuego();

function cambioTiempo(){
    var x= setInterval("reducirTiempo()",1000);
}

cambioTiempo();
function reducirTiempo(){
contador--;
timer.innerHTML= "00:"+ contador;
if(contador<10){
    timer.innerHTML= "00:0"+ contador;
}
}
function juegocambio(){
    juegoimg.style.display= "none";
   console.log("cambie");
   juegopreguntas.style.display= "flex";
}


botonCambio.addEventListener('click', function(){
    console.log("encontre");
});