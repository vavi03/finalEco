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

//cuando userId es != de null, tiene el uid del usuario

/*
if (userId) {
    document.querySelectorAll('.pregunta__txt')[0].innerHTML = userId;
}*/

var juego1img = document.querySelector('.juego');
var juego1preguntas = document.querySelector('.preguntas');

function cambiarPantallaJuego() {
    var t = setTimeout("juegocambio()", 3000);
}
cambiarPantallaJuego();

function juegocambio() {
    juego1img.style.display = "none";
    console.log("cambie");
    juego1preguntas.style.display = "flex";
}

//firebase

function escribirRespuestas() {

    var respuestas = [];

    respuestas[0] = document.querySelectorAll(".pregunta__resp")[0].value|"";
    respuestas[1] = document.querySelectorAll(".pregunta__resp")[1].value|"";
    respuestas[2] = document.querySelectorAll(".pregunta__resp")[2].value|"";



    //firebase
    database.ref('usuarios/'+ "ztX3Y7cs89de9fmoF1UgF6eZgci2" +'/resp/1').set({
        soluciones: respuestas
    }, function (error) {
        if (error) {
            // The write failed...
        } else {
            // Data saved successfully!
            console.log("Hecho");
        }
    });
    //
}

let inputEnviar = document.querySelector("#enviarA");

inputEnviar.addEventListener('click',escribirRespuestas);