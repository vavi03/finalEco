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


var btnEmpezarJuego21= document.querySelector('.continuarJuego4');
var juegoimg= document.querySelector('.juego');
var juegopreguntas= document.querySelector('.preguntas');

btnEmpezarJuego21.addEventListener('click', function(){

    juegoimg.style.display= "none";
    console.log("cambie");
    juegopreguntas.style.display= "flex";

}); 

//firebase

function escribirRespuestas() {

    var respuestas = [];

    respuestas[0] = document.querySelectorAll(".pregunta__resp")[0].value;
    respuestas[1] = document.querySelectorAll(".pregunta__resp")[1].value;
    respuestas[2] = document.querySelectorAll(".pregunta__resp")[2].value;

    //firebase
    database.ref('usuarios/'+ userId).set({
        "resp5": respuestas
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