let preguntaActual = null;
let mostrandoRespuesta = false;
let lenguajeActual = null;

let puntosRojo = 0;
let puntosAzul = 0;

// unir bancos
const preguntasPython = [
  ...preguntasOpLogicos,
  ...preguntasSalidaCodigo,
  ...preguntasErrores
];

const preguntasJava = [
  ...preguntasOpLogicosJava,
  ...preguntasSalidaCodigoJava,
  ...preguntasErroresJava
];

// DOM listo
document.addEventListener("DOMContentLoaded", () => {

  const btnPython = document.getElementById("btnPython");
  const btnJava = document.getElementById("btnJava");

  const btnRojo = document.getElementById("btnRojo");
  const btnAzul = document.getElementById("btnAzul");

  // 🔘 BOTONES LENGUAJE

  btnPython.addEventListener("click", () => manejarBoton("python"));
  btnJava.addEventListener("click", () => manejarBoton("java"));

  // 🔴 ROJO
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

  // 🔵 AZUL
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

// lógica principal
function manejarBoton(lenguaje) {

  // si cambia de lenguaje → reinicia estado
  if (lenguajeActual !== lenguaje) {
    lenguajeActual = lenguaje;
    preguntaActual = null;
    mostrandoRespuesta = false;
  }

  if (!preguntaActual || mostrandoRespuesta) {
    nuevaPregunta(lenguaje);
    mostrandoRespuesta = false;
  } else {
    mostrarRespuesta();
    mostrandoRespuesta = true;
  }
}

// generar pregunta
function nuevaPregunta(lenguaje) {
  const banco = lenguaje === "python" ? preguntasPython : preguntasJava;

  const i = Math.floor(Math.random() * banco.length);
  preguntaActual = banco[i];

  const codeBlock = document.getElementById("codigo");

  limpiarHighlight(codeBlock);

  codeBlock.className = lenguaje === "python" ? "language-python" : "language-java";
  codeBlock.textContent = ">>> " + preguntaActual.pregunta;

  hljs.highlightElement(codeBlock);
}

// mostrar respuesta
function mostrarRespuesta() {
  if (!preguntaActual) return;

  const codeBlock = document.getElementById("codigo");

  limpiarHighlight(codeBlock);

  codeBlock.textContent += "\n" + preguntaActual.respuesta;

  hljs.highlightElement(codeBlock);
}

// reset pantalla
function resetPantalla() {
  const codeBlock = document.getElementById("codigo");

  codeBlock.textContent = "";

  limpiarHighlight(codeBlock);

  preguntaActual = null;
  mostrandoRespuesta = false;
}

// limpiar highlight correctamente
function limpiarHighlight(el) {
  el.classList.remove("hljs");
  el.removeAttribute("data-highlighted");
}

// animación puntos
function animar(el) {
  el.style.transform = "scale(1.2)";
  setTimeout(() => {
    el.style.transform = "scale(1)";
  }, 150);
}