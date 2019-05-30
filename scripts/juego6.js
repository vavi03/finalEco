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

    if(contador==0 && resp6==false){
        window.location.reload(true);
    }
}

function juegocambio() {
    juegoimg.style.display = "none";
    console.log("cambie");
    juegopreguntas.style.display = "flex";
}

botonCambio.addEventListener('click', function(){
    resp6=true;
    console.log("encontre");
});

//firebase
var resp6 = false;
function escribirRespuestas() {

    //firebase
    database.ref('usuarios').child(userId).child('resp6').set({
        "0":resp6
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