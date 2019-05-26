var juegoimg= document.querySelector('.juego');
var juegopreguntas= document.querySelector('.preguntas');

var batmanimg= document.querySelector('.batman')
var timer= document.querySelector('.timer');
var contador= 15;
function cambiarPantallaJuego(){
    var t= setTimeout("juegocambio()",15000);
}
cambiarPantallaJuego();

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

function apareceBatman(){
    var x= setInterval("batman()",900);
}
apareceBatman();

function batman(){
    var min= 50;
    var max= 200;
    if(contador%5==0){
        var random =Math.floor(Math.random() * (+max - +min)) + +min; 
        batmanimg.style.display="flex";
        batmanimg.style.left=random + "px";
        batmanimg.style.top=random + "px";
    }
    else{
        batmanimg.style.display="none";
    }
}