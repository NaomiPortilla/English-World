'use strict';

// English World: interactividad, perfil, personaje y progreso.
const $ = (id) => document.getElementById(id);

const vocabulary = {
  animals: [
    { english: 'Dog', spanish: 'Perro', emoji: '🐶', example: 'I have a dog.' },
    { english: 'Cat', spanish: 'Gato', emoji: '🐱', example: 'The cat is sleeping.' },
    { english: 'Bird', spanish: 'Pájaro', emoji: '🐦', example: 'The bird can fly.' },
    { english: 'Fish', spanish: 'Pez', emoji: '🐟', example: 'The fish is small.' }
  ],
  food: [
    { english: 'Apple', spanish: 'Manzana', emoji: '🍎', example: 'I eat an apple every day.' },
    { english: 'Bread', spanish: 'Pan', emoji: '🍞', example: 'I like bread.' },
    { english: 'Milk', spanish: 'Leche', emoji: '🥛', example: 'I drink milk.' },
    { english: 'Water', spanish: 'Agua', emoji: '💧', example: 'I drink water.' }
  ],
  colors: [
    { english: 'Blue', spanish: 'Azul', emoji: '🔵', example: 'The sky is blue.' },
    { english: 'Red', spanish: 'Rojo', emoji: '🔴', example: 'The apple is red.' },
    { english: 'Green', spanish: 'Verde', emoji: '🟢', example: 'The grass is green.' },
    { english: 'Yellow', spanish: 'Amarillo', emoji: '🟡', example: 'The sun is yellow.' }
  ],
  family: [
    { english: 'Mother', spanish: 'Madre', emoji: '👩', example: 'My mother is kind.' },
    { english: 'Father', spanish: 'Padre', emoji: '👨', example: 'My father is at home.' },
    { english: 'Sister', spanish: 'Hermana', emoji: '👧', example: 'My sister is a student.' },
    { english: 'Brother', spanish: 'Hermano', emoji: '👦', example: 'My brother likes soccer.' }
  ],
  school: [
    { english: 'Book', spanish: 'Libro', emoji: '📖', example: 'This is my book.' },
    { english: 'Teacher', spanish: 'Profesor/a', emoji: '👩‍🏫', example: 'My teacher is nice.' },
    { english: 'Pencil', spanish: 'Lápiz', emoji: '✏️', example: 'I need a pencil.' },
    { english: 'School', spanish: 'Escuela', emoji: '🏫', example: 'I go to school.' }
  ]
};
const categories = [
  { id: 'animals', label: '🐾 Animales' }, { id: 'food', label: '🍎 Comida' },
  { id: 'colors', label: '🎨 Colores' }, { id: 'family', label: '👨‍👩‍👧 Familia' },
  { id: 'school', label: '🏫 Escuela' }
];
const phrases = [
  { english: 'Hello! How are you?', spanish: '¡Hola! ¿Cómo estás?' },
  { english: 'Good morning!', spanish: '¡Buenos días!' },
  { english: 'Nice to meet you.', spanish: 'Mucho gusto.' },
  { english: 'Thank you very much.', spanish: 'Muchas gracias.' },
  { english: 'Can you help me?', spanish: '¿Puedes ayudarme?' },
  { english: 'See you later!', spanish: '¡Hasta luego!' }
];
const pronunciationWords = [
  { english: 'Beautiful', spanish: 'Bonito/a', guide: 'biu-ti-ful' },
  { english: 'Teacher', spanish: 'Profesor/a', guide: 'tii-cher' },
  { english: 'Friend', spanish: 'Amigo/a', guide: 'frend' },
  { english: 'School', spanish: 'Escuela', guide: 'skuul' },
  { english: 'Thank you', spanish: 'Gracias', guide: 'zank iu' }
];
const writingWords = [
  { english: 'Dog', spanish: 'Perro', emoji: '🐶' }, { english: 'Apple', spanish: 'Manzana', emoji: '🍎' },
  { english: 'House', spanish: 'Casa', emoji: '🏠' }, { english: 'Book', spanish: 'Libro', emoji: '📖' },
  { english: 'Water', spanish: 'Agua', emoji: '💧' }, { english: 'School', spanish: 'Escuela', emoji: '🏫' },
  { english: 'Friend', spanish: 'Amigo/a', emoji: '🧑‍🤝‍🧑' }, { english: 'Mother', spanish: 'Madre', emoji: '👩' }
];
const quizByLevel = {
  beginner: [
    { question: '¿Qué significa “book”?', answers: ['Casa', 'Libro', 'Agua', 'Perro'], correct: 'Libro' },
    { question: '¿Cómo se dice “gato” en inglés?', answers: ['Dog', 'Fish', 'Cat', 'Bird'], correct: 'Cat' },
    { question: '¿Qué significa “blue”?', answers: ['Rojo', 'Verde', 'Azul', 'Amarillo'], correct: 'Azul' },
    { question: '¿Cómo se dice “madre” en inglés?', answers: ['Sister', 'Mother', 'Brother', 'Father'], correct: 'Mother' },
    { question: '¿Qué significa “water”?', answers: ['Pan', 'Leche', 'Agua', 'Manzana'], correct: 'Agua' },
    { question: '¿Cómo se dice “escuela” en inglés?', answers: ['School', 'Teacher', 'Pencil', 'Book'], correct: 'School' },
    { question: '¿Qué significa “friend”?', answers: ['Amigo/a', 'Familia', 'Profesor/a', 'Hermano'], correct: 'Amigo/a' },
    { question: '¿Cómo se dice “rojo” en inglés?', answers: ['Blue', 'Yellow', 'Green', 'Red'], correct: 'Red' }
  ],
  basic: [
    { question: 'Completa: “I ___ a student.”', answers: ['am', 'is', 'are', 'be'], correct: 'am' },
    { question: '¿Qué significa “usually”?', answers: ['Nunca', 'Usualmente', 'Ayer', 'Mañana'], correct: 'Usualmente' },
    { question: 'El plural de “child” es…', answers: ['childs', 'childes', 'children', 'childrens'], correct: 'children' },
    { question: 'Completa: “She ___ soccer.”', answers: ['play', 'plays', 'playing', 'are play'], correct: 'plays' },
    { question: '¿Qué significa “hungry”?', answers: ['Cansado', 'Feliz', 'Hambriento', 'Enojado'], correct: 'Hambriento' },
    { question: '¿Cuál es el pasado de “go”?', answers: ['Goed', 'Went', 'Goes', 'Going'], correct: 'Went' },
    { question: 'Completa: “There ___ two books.”', answers: ['is', 'am', 'are', 'be'], correct: 'are' },
    { question: '¿Qué significa “between”?', answers: ['Detrás', 'Entre', 'Encima', 'Debajo'], correct: 'Entre' }
  ],
  intermediate: [
    { question: 'Completa: “If I had time, I ___ travel more.”', answers: ['will', 'would', 'did', 'have'], correct: 'would' },
    { question: 'Elige la frase correcta.', answers: ['I have seen it yesterday.', 'I saw it yesterday.', 'I seen it yesterday.', 'I was see it yesterday.'], correct: 'I saw it yesterday.' },
    { question: '¿Qué significa “although”?', answers: ['Por eso', 'Aunque', 'Por lo tanto', 'Mientras tanto'], correct: 'Aunque' },
    { question: 'Completa: “She has lived here ___ 2020.”', answers: ['for', 'since', 'during', 'from'], correct: 'since' },
    { question: 'La forma pasiva de “They built the bridge” es…', answers: ['The bridge built them.', 'The bridge was built.', 'The bridge is build.', 'The bridge has building.'], correct: 'The bridge was built.' },
    { question: '¿Qué significa “reliable”?', answers: ['Confiable', 'Ruidoso', 'Peligroso', 'Aburrido'], correct: 'Confiable' },
    { question: 'Completa: “I look forward to ___ you.”', answers: ['see', 'seeing', 'saw', 'seen'], correct: 'seeing' },
    { question: '¿Qué conector expresa contraste?', answers: ['Furthermore', 'Therefore', 'However', 'Because of'], correct: 'However' }
  ],
  advanced: [
    { question: 'Choose the best option: “Had I known, I ___ earlier.”', answers: ['would come', 'would have come', 'will come', 'came'], correct: 'would have come' },
    { question: 'What does “meticulous” mean?', answers: ['Careless', 'Very careful and precise', 'Extremely fast', 'Uncertain'], correct: 'Very careful and precise' },
    { question: 'Choose the correct sentence.', answers: ['Despite of the rain, we went out.', 'Despite the rain, we went out.', 'Although the rain, we went out.', 'In spite the rain, we went out.'], correct: 'Despite the rain, we went out.' },
    { question: 'Complete: “The proposal, ___ was revised twice, was approved.”', answers: ['that', 'who', 'which', 'where'], correct: 'which' },
    { question: 'What is the closest meaning of “ambiguous”?', answers: ['Unclear or open to more than one meaning', 'Completely accurate', 'Easy to predict', 'Very generous'], correct: 'Unclear or open to more than one meaning' },
    { question: 'Choose the correct inversion.', answers: ['Rarely I have seen this.', 'Rarely have I seen this.', 'Rarely seen I have this.', 'Rarely I seen have this.'], correct: 'Rarely have I seen this.' },
    { question: 'Complete: “No sooner ___ than the phone rang.”', answers: ['had I arrived', 'I had arrived', 'I arrived', 'did I arrived'], correct: 'had I arrived' },
    { question: 'Which word means “to lessen the severity” of something?', answers: ['Exacerbate', 'Mitigate', 'Provoke', 'Neglect'], correct: 'Mitigate' }
  ]
};
const mascots = {
  sonic: { name: 'Sonic', image: 'assets/mascots/sonic.png', expressions: { correct: 'assets/mascots/sonic-happy.png', wrong: 'assets/mascots/sonic-encourage.png', finish: 'assets/mascots/sonic-celebrate.png', think: 'assets/mascots/sonic-think.png', hello: 'assets/mascots/sonic-happy.png', guide: 'assets/mascots/sonic-happy.png' }, hello: '¡Hola! ¡Vamos a aprender juntos!', correct: '¡Excellent! ¡Lo hiciste genial!', wrong: '¡No pasa nada! Vamos a intentarlo otra vez.', finish: '¡Lo lograste! ¡Una aventura más!', think: '¡Vamos a pensarlo! Tú puedes.', guide: '¡Sigue las indicaciones y avanzaremos paso a paso!' },
  pikachu: { name: 'Pikachu', image: 'assets/mascots/pikachu.png', expressions: { correct: 'assets/mascots/pikachu-happy.png', wrong: 'assets/mascots/pikachu-encourage.png', finish: 'assets/mascots/pikachu-celebrate.png', think: 'assets/mascots/pikachu-think.png', hello: 'assets/mascots/pikachu-happy.png', guide: 'assets/mascots/pikachu-happy.png' }, hello: '¡Pika-pika! ¿Listo para aprender?', correct: '¡Pika-genial! ¡Respuesta correcta!', wrong: '¡No pasa nada! Sigue practicando.', finish: '¡Un gran salto de aprendizaje!', think: '¡Piensa un poquito más! ¡Tú puedes!', guide: '¡Sigue las indicaciones y avanzaremos paso a paso!' },
  snoopy: { name: 'Snoopy', image: 'assets/mascots/snoopy.png', expressions: { correct: 'assets/mascots/snoopy-happy.png', wrong: 'assets/mascots/snoopy-encourage.png', finish: 'assets/mascots/snoopy-celebrate.png', think: 'assets/mascots/snoopy-think.png', hello: 'assets/mascots/snoopy-happy.png', guide: 'assets/mascots/snoopy-happy.png' }, hello: '¡Hola! Hagamos del inglés una aventura.', correct: '¡Muy bien! ¡Estoy orgulloso de tu esfuerzo!', wrong: 'Un pequeño error también enseña.', finish: '¡Misión cumplida! ¡Buen trabajo!', think: 'Miremos la pista y pensemos juntos.', guide: '¡Sigue las indicaciones y avanzaremos paso a paso!' },
  molang: { name: 'Molang', image: 'assets/mascots/molang.png', expressions: { correct: 'assets/mascots/molang-happy.png', wrong: 'assets/mascots/molang-encourage.png', finish: 'assets/mascots/molang-celebrate.png', think: 'assets/mascots/molang-think.png', hello: 'assets/mascots/molang-happy.png', guide: 'assets/mascots/molang-happy.png' }, hello: '¡Holiii! Aprendamos paso a paso 💗', correct: '¡Yupi! ¡Lo hiciste súper bien!', wrong: 'No pasa nada. ¡Tú puedes, vamos otra vez!', finish: '¡Lo conseguiste! ¡A celebrar!', think: 'Respira y piensa con calma. ¡Tú puedes!', guide: '¡Sigue las indicaciones y avanzaremos paso a paso!' }
};

const safeRead = (key, fallback) => {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
  catch (error) { console.warn(`No se pudo leer ${key} del almacenamiento.`, error); return fallback; }
};
const safeWrite = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (error) { console.warn(`No se pudo guardar ${key}.`, error); }
};
let profile = safeRead('englishWorldProfile', null);
let progress = safeRead('englishWorldProgress', { writingCorrect: 0, pronunciationPractice: 0, bestQuiz: 0 });
progress = {
  writingCorrect: Math.max(0, Number(progress.writingCorrect) || 0),
  pronunciationPractice: Math.max(0, Number(progress.pronunciationPractice) || 0),
  bestQuiz: Math.max(0, Math.min(8, Number(progress.bestQuiz) || 0))
};
let currentCategory = 'food', currentVocabIndex = 0, currentWritingIndex = 0;
let currentPronunciationIndex = 0, currentQuizIndex = 0, quizScore = 0, quizAnswered = false;
let quizQuestions = quizByLevel.beginner;
const stageOrder = ['vocabulary', 'writing', 'pronunciation', 'phrases', 'quiz', 'progress'];
let currentStage = (() => { try { return localStorage.getItem('englishWorldStage') || 'vocabulary'; } catch { return 'vocabulary'; } })();
if (!stageOrder.includes(currentStage)) currentStage = 'vocabulary';
const stageSectionIds = { vocabulary: 'aprende', writing: 'escritura', pronunciation: 'pronunciacion', phrases: 'frases', quiz: 'quiz', progress: 'progreso' };
const stageNames = { vocabulary: 'vocabulario', writing: 'escritura', pronunciation: 'pronunciación', phrases: 'frases útiles', quiz: 'evaluación', progress: 'progreso' };
function setStage(stage, announce = true) {
  if (!stageOrder.includes(stage)) return;
  currentStage = stage;
  try { localStorage.setItem('englishWorldStage', stage); } catch (error) { console.warn('No se pudo guardar la etapa.', error); }
  stageOrder.forEach((key, index) => {
    const section = $(stageSectionIds[key]);
    if (!section) return;
    const visible = index <= stageOrder.indexOf(currentStage);
    section.classList.toggle('stage-locked', !visible);
    section.classList.toggle('stage-current', key === currentStage);
    section.hidden = !visible;
  });
  const next = $('continueLearningBtn');
  if (next) { next.textContent = currentStage === 'progress' ? 'Ver mi progreso ✓' : `Continuar: ${stageNames[currentStage]} →`; next.dataset.target = stageSectionIds[currentStage]; }
  if ($('afterQuiz')) $('afterQuiz').classList.toggle('hidden', stageOrder.indexOf(currentStage) < stageOrder.indexOf('progress'));
  if (announce) mascotReact('guide');
}
function advanceStage(stage) {
  setStage(stage);
  const target = $(stageSectionIds[stage]);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const prompts = { writing: '¡Ahora vamos a practicar cómo escribir las palabras! Lee la pista y escribe tu respuesta.', pronunciation: '¡Toca escuchar! Pulsa el botón de audio y repite la palabra en voz alta.', phrases: '¡Muy bien! Ahora aprenderás frases que puedes usar en la vida diaria.', quiz: '¡Llegó el momento de demostrar lo que aprendiste! Elige una respuesta para cada pregunta.', progress: '¡Mira cuánto has avanzado! Puedes volver a practicar cualquier etapa desbloqueada.' };
  if (prompts[stage]) showMessage(prompts[stage]);
}


function saveProgress() { safeWrite('englishWorldProgress', progress); }
function saveProfile() { safeWrite('englishWorldProfile', profile); }
function speak(text) {
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    showMessage('Tu navegador no admite la reproducción de voz. Puedes seguir aprendiendo con el texto.'); return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US'; utterance.rate = 0.84; utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}
function showMessage(message) {
  const feedback = $('mascotMessage');
  if (feedback) feedback.textContent = message;
}
function mascotReact(type) {
  if (!profile || !mascots[profile.mascot]) return;
  const mascot = mascots[profile.mascot];
  const card = $('mascotCard');
  showMessage(mascot[type] || mascot.hello);
  const avatar = $('mascotAvatar');
  const expressionImage = mascot.expressions && mascot.expressions[type];
  if (avatar && expressionImage) { avatar.src = expressionImage; avatar.alt = `${mascot.name}: ${type === 'finish' ? 'celebrando' : type === 'think' ? 'pensando' : type === 'wrong' ? 'animando' : 'feliz'}`; avatar.classList.remove('image-missing'); }
  card.classList.remove('celebrate', 'think');
  // Force a new animation without relying on animation for meaning.
  void card.offsetWidth;
  if (type === 'correct' || type === 'finish') card.classList.add('celebrate');
  if (type === 'wrong' || type === 'think') card.classList.add('think');
  const answerAvatar = $('answerMascotAvatar');
  const answerName = $('answerMascotName');
  const answerMessage = $('answerMascotMessage');
  if (answerAvatar) {
    answerAvatar.src = (mascot.expressions && mascot.expressions[type]) || mascot.image;
    answerAvatar.alt = `${mascot.name}: ${type === 'finish' ? 'celebrando' : type === 'think' ? 'pensando' : type === 'wrong' ? 'animando' : 'feliz'}`;
    answerAvatar.classList.remove('mascot-pop'); void answerAvatar.offsetWidth; answerAvatar.classList.add('mascot-pop');
  }
  if (answerName) answerName.textContent = mascot.name;
  if (answerMessage) answerMessage.textContent = mascot[type] || mascot.hello;
}
function showOnboarding() {
  $('startScreen').classList.add('hidden');
  $('onboarding').classList.remove('hidden'); document.body.classList.add('modal-open');
  if (profile) {
    $('studentAge').value = profile.age || '';
    $('studentLevel').value = profile.level || '';
    const radio = document.querySelector(`input[name="mascot"][value="${profile.mascot}"]`);
    if (radio) radio.checked = true;
  }
}
function hideOnboarding() { $('onboarding').classList.add('hidden'); document.body.classList.remove('modal-open'); $('startScreen').classList.add('hidden'); }
$('profileForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const age = $('studentAge').value, level = $('studentLevel').value;
  const selected = document.querySelector('input[name="mascot"]:checked');
  if (!age || !level || !selected) return;
  profile = { age, level, mascot: selected.value };
  saveProfile(); applyProfile(); hideOnboarding(); startQuiz(); setStage(currentStage, false);
  mascotReact('hello');
});
$('changeProfileBtn').addEventListener('click', showOnboarding);
$('startAdventureBtn').addEventListener('click', () => {
  if (profile && profile.level && mascots[profile.mascot]) {
    $('startScreen').classList.add('hidden');
    document.body.classList.remove('modal-open');
    applyProfile(); startQuiz(); setStage(currentStage, false);
    const target = $(stageSectionIds[currentStage]); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else showOnboarding();
});
function applyProfile() {
  if (!profile) return;
  const mascot = mascots[profile.mascot] || mascots.sonic;
  $('mascotAvatar').src = (mascot.expressions && mascot.expressions.hello) || mascot.image; $('mascotAvatar').alt = `Personaje guía: ${mascot.name}`; $('mascotAvatar').classList.remove('image-missing');
  $('mascotName').textContent = mascot.name;
  showMessage(mascot.hello);
  if ($('answerMascotAvatar')) $('answerMascotAvatar').src = (mascot.expressions && mascot.expressions.hello) || mascot.image;
  if ($('answerMascotName')) $('answerMascotName').textContent = mascot.name;
  if ($('answerMascotMessage')) $('answerMascotMessage').textContent = mascot.hello;
  const levelNames = { beginner: 'principiante', basic: 'básico', intermediate: 'intermedio', advanced: 'avanzado' };
  const ageNames = { '6-9': '¡Vamos a aprender jugando!', '10-12': '¡Prepárate para nuevos retos!', '13-17': 'Practica a tu ritmo y supera nuevos retos.', '18+': 'Refuerza tus conocimientos paso a paso.' };
  $('personalWelcome').textContent = `${ageNames[profile.age] || '¡Vamos a aprender!'} Tu ruta está preparada para el nivel ${levelNames[profile.level] || 'principiante'}.`;
  quizQuestions = quizByLevel[profile.level] || quizByLevel.beginner;
}

function renderCategories() {
  const container = $('categoryList'); container.replaceChildren();
  categories.forEach(category => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'category-btn'; button.textContent = category.label;
    button.setAttribute('aria-pressed', String(category.id === currentCategory));
    if (category.id === currentCategory) button.classList.add('active');
    button.addEventListener('click', () => { currentCategory = category.id; currentVocabIndex = 0; renderCategories(); renderVocabulary(); });
    container.appendChild(button);
  });
}
function renderVocabulary() {
  const words = vocabulary[currentCategory]; const word = words[currentVocabIndex];
  $('wordEmoji').textContent = word.emoji; $('wordEnglish').textContent = word.english;
  $('wordSpanish').textContent = word.spanish; $('wordExample').textContent = `“${word.example}”`;
}
$('nextWordBtn').addEventListener('click', () => { const words = vocabulary[currentCategory]; currentVocabIndex = (currentVocabIndex + 1) % words.length; renderVocabulary(); });
$('listenWordBtn').addEventListener('click', () => speak($('wordEnglish').textContent));

function renderWriting() {
  const word = writingWords[currentWritingIndex]; $('writingEmoji').textContent = word.emoji;
  $('writingPrompt').textContent = word.spanish; $('writingInput').value = '';
  $('writingFeedback').textContent = ''; $('writingFeedback').className = 'feedback';
}
$('writingForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const answer = $('writingInput').value.trim().toLocaleLowerCase('en-US');
  const correct = writingWords[currentWritingIndex].english.toLocaleLowerCase('en-US');
  const feedback = $('writingFeedback');
  if (!answer) { feedback.textContent = 'Escribe una respuesta primero.'; feedback.className = 'feedback error'; return; }
  if (answer === correct) {
    feedback.textContent = '✅ ¡Correcto! ¡Excelente trabajo!'; feedback.className = 'feedback success';
    progress.writingCorrect += 1; saveProgress(); updateProgress(); mascotReact('correct');
  } else {
    feedback.textContent = `¡Casi! La palabra correcta es “${writingWords[currentWritingIndex].english}”. Inténtalo de nuevo.`;
    feedback.className = 'feedback error'; mascotReact('wrong');
  }
});
$('nextWritingBtn').addEventListener('click', () => { currentWritingIndex = (currentWritingIndex + 1) % writingWords.length; renderWriting(); });

function renderPronunciation() {
  const word = pronunciationWords[currentPronunciationIndex];
  $('pronunciationWord').textContent = word.english; $('pronunciationMeaning').textContent = word.spanish;
  $('pronunciationGuide').textContent = `Aproximación: “${word.guide}”`;
  $('pronunciationFeedback').textContent = ''; $('pronunciationFeedback').className = 'small-feedback';
}
$('listenPronunciationBtn').addEventListener('click', () => speak($('pronunciationWord').textContent));
$('repeatPronunciationBtn').addEventListener('click', () => {
  progress.pronunciationPractice += 1; saveProgress(); updateProgress();
  $('pronunciationFeedback').textContent = '👏 ¡Excelente! Sigue practicando.';
  $('pronunciationFeedback').className = 'small-feedback success'; mascotReact('correct');
  currentPronunciationIndex = (currentPronunciationIndex + 1) % pronunciationWords.length;
  window.setTimeout(renderPronunciation, 900);
});

function renderPhrases() {
  const container = $('phraseGrid'); container.replaceChildren();
  phrases.forEach(phrase => {
    const card = document.createElement('article'); card.className = 'phrase-card';
    const heading = document.createElement('h3'); heading.textContent = phrase.english;
    const translation = document.createElement('p'); translation.textContent = phrase.spanish;
    const button = document.createElement('button'); button.type = 'button'; button.className = 'btn secondary small'; button.textContent = '🔊 Escuchar';
    button.addEventListener('click', () => speak(phrase.english));
    card.append(heading, translation, button); container.appendChild(card);
  });
}
function renderQuiz() {
  const question = quizQuestions[currentQuizIndex]; if (!question) return;
  $('quizCounter').textContent = `Pregunta ${currentQuizIndex + 1} de ${quizQuestions.length}`;
  $('quizScore').textContent = `Puntos: ${quizScore}`;
  $('quizProgress').style.width = `${(currentQuizIndex / quizQuestions.length) * 100}%`;
  $('quizQuestion').textContent = question.question; $('quizAnswers').replaceChildren();
  $('quizFeedback').textContent = ''; $('quizFeedback').className = 'feedback';
  $('nextQuizBtn').classList.add('hidden'); $('quizResult').classList.add('hidden'); quizAnswered = false;
  question.answers.forEach(answer => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'answer-btn'; button.textContent = answer;
    button.addEventListener('click', () => selectAnswer(button, answer)); $('quizAnswers').appendChild(button);
  });
}
function selectAnswer(button, answer) {
  if (quizAnswered) return; quizAnswered = true;
  const correct = quizQuestions[currentQuizIndex].correct;
  document.querySelectorAll('.answer-btn').forEach(btn => { btn.disabled = true; if (btn.textContent === correct) btn.classList.add('correct'); });
  if (answer === correct) {
    quizScore += 1; button.classList.add('correct'); $('quizFeedback').textContent = '✅ ¡Respuesta correcta!'; $('quizFeedback').className = 'feedback success'; mascotReact('correct');
  } else {
    button.classList.add('wrong'); $('quizFeedback').textContent = `La respuesta correcta es: ${correct}`; $('quizFeedback').className = 'feedback error'; mascotReact('wrong');
  }
  $('quizScore').textContent = `Puntos: ${quizScore}`; $('nextQuizBtn').classList.remove('hidden');
}
$('nextQuizBtn').addEventListener('click', () => {
  currentQuizIndex += 1;
  if (currentQuizIndex >= quizQuestions.length) finishQuiz(); else renderQuiz();
});
function getQuizMessage(score, total) {
  const percentage = (score / total) * 100;
  if (percentage === 100) return '🏆 ¡Perfecto! Has respondido todas correctamente.';
  if (percentage >= 75) return '🌟 ¡Muy buen trabajo! Sigue practicando.';
  if (percentage >= 50) return '👍 Vas por buen camino. Repasa y vuelve a intentarlo.';
  return '💪 Cada intento te ayuda a aprender. ¡Sigue adelante!';
}
function finishQuiz() {
  const total = quizQuestions.length;
  if (quizScore > progress.bestQuiz) { progress.bestQuiz = quizScore; saveProgress(); }
  $('quizProgress').style.width = '100%'; $('quizAnswers').replaceChildren(); $('quizQuestion').textContent = '🎉 ¡Quiz terminado!';
  $('quizFeedback').textContent = ''; $('quizResult').classList.remove('hidden');
  const result = $('quizResult'); result.replaceChildren();
  const title = document.createElement('h3'); title.textContent = `Tu resultado: ${quizScore}/${total}`;
  const message = document.createElement('p'); message.textContent = getQuizMessage(quizScore, total);
  const restart = document.createElement('button'); restart.type = 'button'; restart.className = 'btn primary small'; restart.textContent = 'Repetir quiz'; restart.addEventListener('click', startQuiz);
  result.append(title, message, restart); $('nextQuizBtn').classList.add('hidden'); updateProgress(); setStage('progress', false); $('afterQuiz').classList.remove('hidden'); mascotReact('finish');
}
function startQuiz() { currentQuizIndex = 0; quizScore = 0; renderQuiz(); }
function calculateProgress() {
  const writing = Math.min(progress.writingCorrect, 5) / 5;
  const pronunciation = Math.min(progress.pronunciationPractice, 5) / 5;
  const quiz = Math.min(progress.bestQuiz, 8) / 8;
  return Math.round(((writing + pronunciation + quiz) / 3) * 100);
}
function updateProgress() {
  const percentage = calculateProgress();
  $('writingPoints').textContent = String(progress.writingCorrect);
  $('pronunciationPoints').textContent = String(progress.pronunciationPractice);
  $('bestQuiz').textContent = `${progress.bestQuiz}/8`;
  $('homeProgress').style.width = `${percentage}%`; $('homeProgressText').textContent = `${percentage}% de progreso`;
  $('circleProgress').textContent = `${percentage}%`;
  $('circleProgress').style.background = `conic-gradient(var(--primary) ${percentage * 3.6}deg, #e8e7f2 0deg)`;
  $('circleProgress').setAttribute('aria-label', `${percentage}% de progreso`);
  if (percentage === 0) $('progressMessage').textContent = 'Completa actividades para aumentar tu progreso.';
  else if (percentage < 50) $('progressMessage').textContent = '¡Buen comienzo! Sigue practicando.';
  else if (percentage < 100) $('progressMessage').textContent = '¡Vas muy bien! Ya estás avanzando bastante.';
  else $('progressMessage').textContent = '🏆 ¡Completaste todas las metas principales!';
}
$('resetProgressBtn').addEventListener('click', () => {
  if (!window.confirm('¿Quieres restablecer todo tu progreso?')) return;
  progress = { writingCorrect: 0, pronunciationPractice: 0, bestQuiz: 0 }; saveProgress(); updateProgress(); showMessage('¡Empezamos una nueva aventura!');
});

const savedTheme = (() => { try { return localStorage.getItem('englishWorldTheme'); } catch { return null; } })();
if (savedTheme === 'dark') { document.body.classList.add('dark'); $('themeBtn').textContent = '☀️'; }
$('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark'); const isDark = document.body.classList.contains('dark');
  $('themeBtn').textContent = isDark ? '☀️' : '🌙';
  try { localStorage.setItem('englishWorldTheme', isDark ? 'dark' : 'light'); } catch (error) { console.warn('No se pudo guardar el tema.', error); }
});
$('menuToggle').addEventListener('click', () => {
  const nav = $('mainNav'); const isOpen = nav.classList.toggle('open'); $('menuToggle').setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('#mainNav a').forEach(link => link.addEventListener('click', () => { $('mainNav').classList.remove('open'); $('menuToggle').setAttribute('aria-expanded', 'false'); }));


// Ruta de aprendizaje secuencial: el estudiante no salta a lecciones futuras desde un menú.
document.querySelectorAll('[data-next-stage]').forEach(button => {
  button.addEventListener('click', () => advanceStage(button.dataset.nextStage));
});
$('continueLearningBtn').addEventListener('click', () => {
  const targetId = $('continueLearningBtn').dataset.target || stageSectionIds[currentStage];
  const target = $(targetId);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const messages = {
    vocabulary: '¡Empecemos con vocabulario! Elige una categoría y escucha cada palabra.',
    writing: '¡Ahora vamos a escribir! Mira la palabra en español y escribe su traducción.',
    pronunciation: '¡Escucha y repite! Puedes reproducir el audio todas las veces que quieras.',
    phrases: '¡Aprendamos frases útiles para conversar!',
    quiz: '¡Es hora del reto! Lee cada pregunta y elige la mejor respuesta.',
    progress: '¡Aquí está tu progreso! Sigue practicando para aprender aún más.'
  };
  showMessage(messages[currentStage] || '¡Vamos paso a paso!');
});

// Initial render and restore saved preferences.
renderCategories(); renderVocabulary(); renderWriting(); renderPronunciation(); renderPhrases(); updateProgress();
if (profile && profile.level && mascots[profile.mascot]) { applyProfile(); startQuiz(); $('onboarding').classList.add('hidden'); $('startScreen').classList.remove('hidden'); setStage(currentStage, false); }
else { $('startScreen').classList.remove('hidden'); $('onboarding').classList.add('hidden'); setStage('vocabulary', false); }
