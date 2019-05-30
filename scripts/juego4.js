// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDoagsbTet_nqy9JDBdyV_4MNK9qlMQ6Gg",
    authDomain: "neuron-9174e.firebaseapp.com",
    databaseURL: "https://neuron-9174e.firebaseio.com",
    projectId: "neuron-9174e",
    storageBucket: "neuron-9174e.appspot.com",
    messagingSenderId: "522583042847",
    appId: "1:522583042847:web:15534444bdf06428"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
var database = firebase.database();


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

//firebase

function escribirRespuestas() {

    var resp4 =  document.querySelector(".pregunta__resp").value;
 
    //firebase
    database.ref('usuarios/'+ userId+ "/").set({
        resp4
    }, function (error) {
        if (error) {
            // The write failed...
        } else {
            // Data saved successfully!
            console.log("Hecho");

            window.location.reload(true);
        }
    });
    //
}

let inputEnviar = document.querySelector("#enviarA");

inputEnviar.addEventListener('click',escribirRespuestas);