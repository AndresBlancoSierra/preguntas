let preguntaActual = null;
let mostrandoRespuesta = false;

let puntosRojo = 0;
let puntosAzul = 0;

let modo = "python"; // python | java

// 🔀 función para mezclar
function mezclar(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// 📦 bancos base
const preguntasPythonBase = [
  ...preguntasOpLogicos,
  ...preguntasSalidaCodigo
];

const preguntasJavaBase = [
  ...preguntasOpLogicosJava,
  ...preguntasSalidaCodigoJava
];

// 🔀 bancos mezclados
let preguntasPython = mezclar(preguntasPythonBase);
let preguntasJava = mezclar(preguntasJavaBase);

// 📍 índices
let indicePython = 0;
let indiceJava = 0;

// 🚀 DOM READY
document.addEventListener("DOMContentLoaded", () => {

  const btnPython = document.getElementById("btnPython");
  const btnJava = document.getElementById("btnJava");

  const btnRojo = document.getElementById("btnRojo");
  const btnAzul = document.getElementById("btnAzul");

  // 🐍 BOTÓN PYTHON
  btnPython.addEventListener("click", () => {
    modo = "python";
    manejarBoton(btnPython);
  });

  // ☕ BOTÓN JAVA
  btnJava.addEventListener("click", () => {
    modo = "java";
    manejarBoton(btnJava);
  });

  // 🔴 SUMAR / RESTAR
  btnRojo.addEventListener("click", () => {
    puntosRojo++;
    btnRojo.textContent = puntosRojo;
    animar(btnRojo);
    resetPantalla();
  });

  btnRojo.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (puntosRojo > 0) puntosRojo--;
    btnRojo.textContent = puntosRojo;
    animar(btnRojo);
  });

  // 🔵 SUMAR / RESTAR
  btnAzul.addEventListener("click", () => {
    puntosAzul++;
    btnAzul.textContent = puntosAzul;
    animar(btnAzul);
    resetPantalla();
  });

  btnAzul.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (puntosAzul > 0) puntosAzul--;
    btnAzul.textContent = puntosAzul;
    animar(btnAzul);
  });

});

// 🎮 LÓGICA BOTÓN
function manejarBoton(btn) {
  if (!preguntaActual || mostrandoRespuesta) {
    nuevaPregunta();
    mostrandoRespuesta = false;
  } else {
    mostrarRespuesta();
    mostrandoRespuesta = true;
  }
}

// 🧠 NUEVA PREGUNTA (SIN REPETICIÓN)
function nuevaPregunta() {
  let lista, indice;

  if (modo === "python") {
    lista = preguntasPython;
    indice = indicePython;
  } else {
    lista = preguntasJava;
    indice = indiceJava;
  }

  // obtener pregunta
  preguntaActual = lista[indice];

  // avanzar índice
  if (modo === "python") {
    indicePython++;
    if (indicePython >= lista.length) {
      preguntasPython = mezclar(preguntasPythonBase);
      indicePython = 0;
    }
  } else {
    indiceJava++;
    if (indiceJava >= lista.length) {
      preguntasJava = mezclar(preguntasJavaBase);
      indiceJava = 0;
    }
  }

  const codeBlock = document.getElementById("codigo");

  limpiarHighlight(codeBlock);

  codeBlock.textContent = ">>> " + preguntaActual.pregunta;

  hljs.highlightElement(codeBlock);
}

// 📢 MOSTRAR RESPUESTA
function mostrarRespuesta() {
  if (!preguntaActual) return;

  const codeBlock = document.getElementById("codigo");

  limpiarHighlight(codeBlock);

  codeBlock.textContent += "\n" + preguntaActual.respuesta;

  hljs.highlightElement(codeBlock);
}

// 🔄 RESET PANTALLA
function resetPantalla() {
  const codeBlock = document.getElementById("codigo");

  codeBlock.textContent = "";

  limpiarHighlight(codeBlock);

  preguntaActual = null;
  mostrandoRespuesta = false;
}

// 🧹 LIMPIAR HIGHLIGHT
function limpiarHighlight(el) {
  el.classList.remove("hljs");
  el.removeAttribute("data-highlighted");
}

// ✨ ANIMACIÓN
function animar(el) {
  el.style.transform = "scale(1.2)";
  setTimeout(() => {
    el.style.transform = "scale(1)";
  }, 150);
}