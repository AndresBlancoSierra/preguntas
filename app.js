let preguntaActual = null;
let mostrandoRespuesta = false;
let puntosRojo = 0;
let puntosAzul = 0;

// unir todos los bancos
const todasPreguntas = [
  ...preguntasOpLogicos,
  ...preguntasSalidaCodigo,
  ...preguntasErrores
];

// esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btnAccion");
  const btnRojo = document.getElementById("btnRojo");
  const btnAzul = document.getElementById("btnAzul");

  // 👉 BOTÓN PRINCIPAL (TE FALTABA ESTO)
  btn.addEventListener("click", manejarBoton);

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

// lógica del botón único
function manejarBoton() {
  const btn = document.getElementById("btnAccion");

  if (!preguntaActual || mostrandoRespuesta) {
    nuevaPregunta();
    mostrandoRespuesta = false;
    btn.textContent = "Respuesta";
  } else {
    mostrarRespuesta();
    mostrandoRespuesta = true;
    btn.textContent = "Pregunta";
  }
}

// generar nueva pregunta
function nuevaPregunta() {
  const i = Math.floor(Math.random() * todasPreguntas.length);
  preguntaActual = todasPreguntas[i];

  const codeBlock = document.getElementById("codigo");

  limpiarHighlight(codeBlock);

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

// limpiar pantalla al sumar punto
function resetPantalla() {
  const codeBlock = document.getElementById("codigo");
  const btn = document.getElementById("btnAccion");

  codeBlock.textContent = "";

  limpiarHighlight(codeBlock);

  preguntaActual = null;
  mostrandoRespuesta = false;

  btn.textContent = "Nueva pregunta";
}

// limpiar highlight.js correctamente
function limpiarHighlight(el) {
  el.classList.remove("hljs");
  el.removeAttribute("data-highlighted");
}

// pequeña animación al sumar punto
function animar(el) {
  el.style.transform = "scale(1.2)";
  setTimeout(() => {
    el.style.transform = "scale(1)";
  }, 150);
}