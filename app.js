let preguntaActual = null;
let mostrandoRespuesta = false;

let puntosRojo = 0;
let puntosAzul = 0;

let modo = "python";

// mezclar array
function mezclar(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// bancos base
const preguntasPythonBase = [
  ...preguntasOpLogicos,
  ...preguntasSalidaCodigo
];

const preguntasJavaBase = [
  ...preguntasOpLogicosJava,
  ...preguntasSalidaCodigoJava
];

// bancos mezclados
let preguntasPython = mezclar(preguntasPythonBase);
let preguntasJava = mezclar(preguntasJavaBase);

// indices
let indicePython = 0;
let indiceJava = 0;

// DOM ready
document.addEventListener("DOMContentLoaded", () => {

  const btnPython = document.getElementById("btnPython");
  const btnJava = document.getElementById("btnJava");

  const btnRojo = document.getElementById("btnRojo");
  const btnAzul = document.getElementById("btnAzul");

  // boton python
  btnPython.addEventListener("click", () => {
    modo = "python";
    manejarBoton();
  });

  // boton java
  btnJava.addEventListener("click", () => {
    modo = "java";
    manejarBoton();
  });

  // puntos rojo
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

  // puntos azul
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

// logica del boton
function manejarBoton() {
  if (!preguntaActual || mostrandoRespuesta) {
    nuevaPregunta();
    mostrandoRespuesta = false;
  } else {
    mostrarRespuesta();
    mostrandoRespuesta = true;
  }
}

// nueva pregunta sin repeticion
function nuevaPregunta() {
  let lista, indice;

  if (modo === "python") {
    lista = preguntasPython;
    indice = indicePython;
  } else {
    lista = preguntasJava;
    indice = indiceJava;
  }

  preguntaActual = lista[indice];

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

  codeBlock.textContent =
    `[${preguntaActual.tipo.toUpperCase()}]\n>>> ${preguntaActual.pregunta}`;

  hljs.highlightElement(codeBlock);
}

// mostrar respuesta + explicacion
function mostrarRespuesta() {
  if (!preguntaActual) return;

  const codeBlock = document.getElementById("codigo");

  limpiarHighlight(codeBlock);

  // respuesta
  codeBlock.textContent += "\n" + preguntaActual.respuesta;

  // explicacion (solo si existe)
  if (preguntaActual.explicacion) {
    codeBlock.textContent += "\n\n" + "→ " + preguntaActual.explicacion;
  }

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

// limpiar highlight
function limpiarHighlight(el) {
  el.classList.remove("hljs");
  el.removeAttribute("data-highlighted");
}

// animacion puntos
function animar(el) {
  el.style.transform = "scale(1.2)";
  setTimeout(() => {
    el.style.transform = "scale(1)";
  }, 150);
}