// ===============================
// ENGLISH WORLD - script.js
// ===============================

// ---------- VOCABULARIO ----------

const vocabulario = {
  animales: [
    { ingles: "Dog", espanol: "Perro", emoji: "🐶", ejemplo: "I have a dog." },
    { ingles: "Cat", espanol: "Gato", emoji: "🐱", ejemplo: "The cat is sleeping." },
    { ingles: "Bird", espanol: "Pájaro", emoji: "🐦", ejemplo: "The bird can fly." },
    { ingles: "Fish", espanol: "Pez", emoji: "🐟", ejemplo: "The fish is small." }
  ],

  comida: [
    { ingles: "Apple", espanol: "Manzana", emoji: "🍎", ejemplo: "I eat an apple." },
    { ingles: "Bread", espanol: "Pan", emoji: "🍞", ejemplo: "I like bread." },
    { ingles: "Milk", espanol: "Leche", emoji: "🥛", ejemplo: "I drink milk." },
    { ingles: "Water", espanol: "Agua", emoji: "💧", ejemplo: "I drink water." }
  ],

  colores: [
    { ingles: "Blue", espanol: "Azul", emoji: "🔵", ejemplo: "The sky is blue." },
    { ingles: "Red", espanol: "Rojo", emoji: "🔴", ejemplo: "The apple is red." },
    { ingles: "Green", espanol: "Verde", emoji: "🟢", ejemplo: "The grass is green." },
    { ingles: "Yellow", espanol: "Amarillo", emoji: "🟡", ejemplo: "The sun is yellow." }
  ],

  familia: [
    { ingles: "Mother", espanol: "Madre", emoji: "👩", ejemplo: "My mother is kind." },
    { ingles: "Father", espanol: "Padre", emoji: "👨", ejemplo: "My father is at home." },
    { ingles: "Sister", espanol: "Hermana", emoji: "👧", ejemplo: "My sister is a student." },
    { ingles: "Brother", espanol: "Hermano", emoji: "👦", ejemplo: "My brother likes soccer." }
  ],

  escuela: [
    { ingles: "Book", espanol: "Libro", emoji: "📖", ejemplo: "This is my book." },
    { ingles: "Teacher", espanol: "Profesor/a", emoji: "👩‍🏫", ejemplo: "My teacher is nice." },
    { ingles: "Pencil", espanol: "Lápiz", emoji: "✏️", ejemplo: "I need a pencil." },
    { ingles: "School", espanol: "Escuela", emoji: "🏫", ejemplo: "I go to school." }
  ]
};

let categoriaActual = "animales";
let indicePalabra = 0;


// ---------- ESCRITURA ----------

const palabrasEscritura = [
  { espanol: "Perro", ingles: "Dog", emoji: "🐶" },
  { espanol: "Manzana", ingles: "Apple", emoji: "🍎" },
  { espanol: "Casa", ingles: "House", emoji: "🏠" },
  { espanol: "Libro", ingles: "Book", emoji: "📖" },
  { espanol: "Agua", ingles: "Water", emoji: "💧" },
  { espanol: "Escuela", ingles: "School", emoji: "🏫" },
  { espanol: "Amigo", ingles: "Friend", emoji: "🧑‍🤝‍🧑" },
  { espanol: "Madre", ingles: "Mother", emoji: "👩" }
];

let indiceEscritura = 0;


// ---------- PRONUNCIACIÓN ----------

const palabrasPronunciacion = [
  { ingles: "Beautiful", espanol: "Bonito/a", guia: "biu-ti-ful" },
  { ingles: "Teacher", espanol: "Profesor/a", guia: "ti-cher" },
  { ingles: "Friend", espanol: "Amigo/a", guia: "frend" },
  { ingles: "School", espanol: "Escuela", guia: "skul" },
  { ingles: "Thank you", espanol: "Gracias", guia: "zank iu" }
];

let indicePronunciacion = 0;


// ---------- PROGRESO ----------

let progreso = JSON.parse(
  localStorage.getItem("englishWorldProgress")
) || {
  escrituras: 0,
  pronunciaciones: 0,
  mejorQuiz: 0
};


// ---------- AUDIO ----------

function hablar(texto) {

  if (!("speechSynthesis" in window)) {
    alert("Tu navegador no permite reproducir audio.");
    return;
  }

  speechSynthesis.cancel();

  const voz = new SpeechSynthesisUtterance(texto);

  voz.lang = "en-US";
  voz.rate = 0.8;
  voz.pitch = 1;

  speechSynthesis.speak(voz);
}


// ---------- VOCABULARIO ----------

function mostrarPalabra() {

  const palabras = vocabulario[categoriaActual];
  const palabra = palabras[indicePalabra];

  document.getElementById("imagenPalabra").textContent = palabra.emoji;
  document.getElementById("palabraIngles").textContent = palabra.ingles;
  document.getElementById("palabraEspanol").textContent = palabra.espanol;
  document.getElementById("ejemplo").textContent = palabra.ejemplo;
}


function cambiarCategoria(categoria) {

  categoriaActual = categoria;
  indicePalabra = 0;

  mostrarPalabra();
}


function siguientePalabra() {

  const palabras = vocabulario[categoriaActual];

  indicePalabra++;

  if (indicePalabra >= palabras.length) {
    indicePalabra = 0;
  }

  mostrarPalabra();
}


function escucharPalabra() {

  const palabra = document.getElementById("palabraIngles").textContent;

  hablar(palabra);
}


// ---------- ESCRITURA ----------

function mostrarEscritura() {

  const palabra = palabrasEscritura[indiceEscritura];

  document.getElementById("emojiEscritura").textContent = palabra.emoji;
  document.getElementById("palabraPregunta").textContent = palabra.espanol;
  document.getElementById("respuesta").value = "";
  document.getElementById("resultado").textContent = "";
}


function comprobarRespuesta() {

  const respuesta = document
    .getElementById("respuesta")
    .value
    .trim()
    .toLowerCase();

  const correcta = palabrasEscritura[indiceEscritura]
    .ingles
    .toLowerCase();

  const resultado = document.getElementById("resultado");

  if (respuesta === "") {

    resultado.textContent = "Escribe una respuesta primero.";
    resultado.className = "incorrecto";

    return;
  }

  if (respuesta === correcta) {

    resultado.textContent = "✅ ¡Correcto! Muy bien.";
    resultado.className = "correcto";

    progreso.escrituras++;

    guardarProgreso();
    actualizarProgreso();

  } else {

    resultado.textContent =
      "❌ No es correcto. Inténtalo nuevamente.";

    resultado.className = "incorrecto";
  }
}


function siguienteEscritura() {

  indiceEscritura++;

  if (indiceEscritura >= palabrasEscritura.length) {
    indiceEscritura = 0;
  }

  mostrarEscritura();
}


// ---------- PRONUNCIACIÓN ----------

function mostrarPronunciacion() {

  const palabra = palabrasPronunciacion[indicePronunciacion];

  document.getElementById("palabraPronunciacion").textContent =
    palabra.ingles;

  document.getElementById("significadoPronunciacion").textContent =
    palabra.espanol;

  document.getElementById("guiaPronunciacion").textContent =
    "Aproximación: " + palabra.guia;

  document.getElementById("mensajePronunciacion").textContent = "";
}


function escucharPronunciacion() {

  const palabra =
    document.getElementById("palabraPronunciacion").textContent;

  hablar(palabra);
}


function practicarPronunciacion() {

  progreso.pronunciaciones++;

  guardarProgreso();
  actualizarProgreso();

  document.getElementById("mensajePronunciacion").textContent =
    "👏 ¡Excelente! Sigue practicando.";

  indicePronunciacion++;

  if (indicePronunciacion >= palabrasPronunciacion.length) {
    indicePronunciacion = 0;
  }

  setTimeout(mostrarPronunciacion, 700);
}


// ---------- QUIZ ----------

const preguntasQuiz = [

  {
    pregunta: '¿Qué significa "book"?',
    respuestas: ["Casa", "Libro", "Agua", "Perro"],
    correcta: 1
  },

  {
    pregunta: '¿Cómo se dice "gato" en inglés?',
    respuestas: ["Dog", "Fish", "Cat", "Bird"],
    correcta: 2
  },

  {
    pregunta: '¿Qué significa "blue"?',
    respuestas: ["Rojo", "Verde", "Azul", "Amarillo"],
    correcta: 2
  },

  {
    pregunta: '¿Cómo se dice "madre" en inglés?',
    respuestas: ["Sister", "Mother", "Brother", "Father"],
    correcta: 1
  },

  {
    pregunta: '¿Qué significa "water"?',
    respuestas: ["Pan", "Leche", "Agua", "Manzana"],
    correcta: 2
  },

  {
    pregunta: '¿Cómo se dice "escuela" en inglés?',
    respuestas: ["School", "Teacher", "Pencil", "Book"],
    correcta: 0
  },

  {
    pregunta: '¿Qué significa "friend"?',
    respuestas: ["Amigo/a", "Familia", "Profesor/a", "Hermano"],
    correcta: 0
  },

  {
    pregunta: '¿Cómo se dice "rojo" en inglés?',
    respuestas: ["Blue", "Yellow", "Green", "Red"],
    correcta: 3
  }

];

let preguntaActual = 0;
let puntos = 0;
let respondida = false;


function mostrarPregunta() {

  const pregunta = preguntasQuiz[preguntaActual];

  document.getElementById("contador").textContent =
    "Pregunta " + (preguntaActual + 1) +
    " de " + preguntasQuiz.length;

  document.getElementById("puntos").textContent =
    "Puntos: " + puntos;

  document.getElementById("pregunta").textContent =
    pregunta.pregunta;

  document.getElementById("mensajeQuiz").textContent = "";

  document.getElementById("siguienteQuiz").classList.add("oculto");

  respondida = false;

  const contenedor =
    document.getElementById("respuestas");

  contenedor.innerHTML = "";

  pregunta.respuestas.forEach((respuesta, indice) => {

    const boton = document.createElement("button");

    boton.textContent = respuesta;

    boton.onclick = function() {
      responder(indice);
    };

    contenedor.appendChild(boton);
  });

  document.getElementById("barraQuiz").style.width =
    (preguntaActual / preguntasQuiz.length * 100) + "%";
}


function responder(indice) {

  if (respondida) return;

  respondida = true;

  const pregunta = preguntasQuiz[preguntaActual];

  const botones =
    document.querySelectorAll("#respuestas button");

  botones.forEach((boton, i) => {

    boton.disabled = true;

    if (i === pregunta.correcta) {
      boton.classList.add("respuesta-correcta");
    }

  });


  if (indice === pregunta.correcta) {

    puntos++;

    botones[indice].classList.add("respuesta-correcta");

    document.getElementById("mensajeQuiz").textContent =
      "✅ ¡Respuesta correcta!";

  } else {

    botones[indice].classList.add("respuesta-incorrecta");

    document.getElementById("mensajeQuiz").textContent =
      "❌ Respuesta incorrecta.";
  }


  document.getElementById("puntos").textContent =
    "Puntos: " + puntos;

  document
    .getElementById("siguienteQuiz")
    .classList.remove("oculto");
}


function siguientePregunta() {

  preguntaActual++;

  if (preguntaActual >= preguntasQuiz.length) {

    terminarQuiz();

  } else {

    mostrarPregunta();
  }
}


function terminarQuiz() {

  if (puntos > progreso.mejorQuiz) {

    progreso.mejorQuiz = puntos;

    guardarProgreso();
  }

  document.getElementById("barraQuiz").style.width = "100%";

  document.getElementById("pregunta").textContent =
    "🎉 ¡Quiz terminado!";

  document.getElementById("respuestas").innerHTML = "";

  document.getElementById("siguienteQuiz").classList.add("oculto");

  const resultado =
    document.getElementById("resultadoQuiz");

  resultado.classList.remove("oculto");

  resultado.innerHTML = `
    <h3>Tu resultado: ${puntos}/${preguntasQuiz.length}</h3>
    <p>${mensajeResultado()}</p>
    <button class="btn principal" onclick="reiniciarQuiz()">
      Repetir quiz
    </button>
  `;

  actualizarProgreso();
}


function mensajeResultado() {

  const porcentaje =
    (puntos / preguntasQuiz.length) * 100;

  if (porcentaje === 100) {
    return "🏆 ¡Perfecto! Excelente trabajo.";
  }

  if (porcentaje >= 75) {
    return "🌟 ¡Muy bien! Sigue practicando.";
  }

  if (porcentaje >= 50) {
    return "👍 Vas por buen camino.";
  }

  return "💪 Sigue practicando y vuelve a intentarlo.";
}


function reiniciarQuiz() {

  preguntaActual = 0;
  puntos = 0;

  document
    .getElementById("resultadoQuiz")
    .classList.add("oculto");

  mostrarPregunta();
}


// ---------- PROGRESO ----------

function guardarProgreso() {

  localStorage.setItem(
    "englishWorldProgress",
    JSON.stringify(progreso)
  );
}


function calcularProgreso() {

  const escritura =
    Math.min(progreso.escrituras, 5) / 5;

  const pronunciacion =
    Math.min(progreso.pronunciaciones, 5) / 5;

  const quiz =
    Math.min(progreso.mejorQuiz, 8) / 8;

  return Math.round(
    ((escritura + pronunciacion + quiz) / 3) * 100
  );
}


function actualizarProgreso() {

  const porcentaje = calcularProgreso();

  document.getElementById("escrituras").textContent =
    progreso.escrituras;

  document.getElementById("pronunciaciones").textContent =
    progreso.pronunciaciones;

  document.getElementById("mejorQuiz").textContent =
    progreso.mejorQuiz + "/8";

  document.getElementById("barraProgreso").style.width =
    porcentaje + "%";

  document.getElementById("textoProgreso").textContent =
    porcentaje + "% de progreso";

  document.getElementById("circulo").textContent =
    porcentaje + "%";


  if (porcentaje === 0) {

    document.getElementById("mensajeProgreso").textContent =
      "Completa actividades para aumentar tu progreso.";

  } else if (porcentaje < 50) {

    document.getElementById("mensajeProgreso").textContent =
      "¡Buen comienzo! Sigue practicando.";

  } else if (porcentaje < 100) {

    document.getElementById("mensajeProgreso").textContent =
      "¡Vas muy bien! Sigue aprendiendo.";

  } else {

    document.getElementById("mensajeProgreso").textContent =
      "🏆 ¡Completaste todas las metas!";
  }
}


// ---------- MODO OSCURO ----------

const modoGuardado =
  localStorage.getItem("englishWorldTheme");

if (modoGuardado === "oscuro") {

  document.body.classList.add("oscuro");

  document.getElementById("modoBtn").textContent = "☀️";
}


document.getElementById("modoBtn").onclick = function() {

  document.body.classList.toggle("oscuro");

  const oscuro =
    document.body.classList.contains("oscuro");

  document.getElementById("modoBtn").textContent =
    oscuro ? "☀️" : "🌙";

  localStorage.setItem(
    "englishWorldTheme",
    oscuro ? "oscuro" : "claro"
  );
};


// ---------- INICIO ----------

mostrarPalabra();
mostrarEscritura();
mostrarPronunciacion();
mostrarPregunta();
actualizarProgreso();
