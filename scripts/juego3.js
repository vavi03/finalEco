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

    var resp3 = [];

    resp3[0] = document.querySelectorAll(".nombrePsj")[0].value;
    resp3[1] = document.querySelectorAll(".nombrePsj")[1].value;
    resp3[2] = document.querySelectorAll(".nombrePsj")[2].value;
    resp3[3] = document.querySelectorAll(".nombrePsj")[3].value;
    //firebase
    database.ref('usuarios').child(userId).child('resp3').set({
        "0":resp3[0], 
        "1":resp3[1],
        "2":resp3[2],
        "3":resp3[3],
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