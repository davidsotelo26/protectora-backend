const firebase = require("firebase");

function iniciarSesion(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function registrarse(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

function cerrarSesion() {
  return firebase.auth().signOut();
}

module.exports = {
    iniciarSesion,
    registrarse,
    cerrarSesion
};

