document.addEventListener('DOMContentLoaded', () => {
  // Limpiar cualquier progreso permanente guardado anteriormente
  try {
    localStorage.removeItem('englishWorldProgress');
  } catch (e) {}

  const unitFiles = [
    'hello.html',    // Unidad 0 (Nivel 1)
    'numbers.html',  // Unidad 1 (Nivel 2)
    'colors.html',   // Unidad 2 (Nivel 3)
    'animals.html',  // Unidad 3 (Nivel 4)
    'food.html'      // Unidad 4 (Nivel 5)
  ];

  const screenStart = document.getElementById('screen-start');
  const screenLearning = document.getElementById('screen-learning');
  const learningTitle = document.getElementById('learningTitle');
  const progressBar = document.getElementById('progressBar');
  const unitNodes = document.querySelectorAll('.unit-node');

  // 1. Leer progreso únicamente de la sesión actual (se borra al cerrar la pestaña)
  function getUnlockedLevel() {
    try {
      const saved = JSON.parse(sessionStorage.getItem('englishWorldProgress') || '{"unlocked":0}');
      return Math.min(Math.max(Number(saved.unlocked) || 0, 0), unitFiles.length);
    } catch (e) {
      return 0;
    }
  }

  // 2. Cambiar entre pantalla de bienvenida y mapa de aprendizaje
  function showLearningMap() {
    if (screenStart) screenStart.classList.remove('active');
    if (screenLearning) screenLearning.classList.add('active');
    renderUnits();
  }

  // 3. Actualizar visualmente cada nodo del mapa según el progreso de la sesión
  function renderUnits() {
    const unlocked = getUnlockedLevel();
    const currentDisplayLevel = Math.min(unlocked + 1, unitFiles.length);

    if (learningTitle) {
      learningTitle.textContent = unlocked >= unitFiles.length
        ? '¡Curso completado! (5 de 5)'
        : `Nivel ${currentDisplayLevel} de ${unitFiles.length}`;
    }

    if (progressBar) {
      const percent = Math.round((unlocked / unitFiles.length) * 100);
      progressBar.style.width = `${Math.max(percent, 15)}%`;
    }

    unitNodes.forEach((node) => {
      const index = Number(node.dataset.unit);
      const statusText = node.querySelector('small');
      const existingBtn = node.querySelector('.unit-open');
      const lockIcon = node.querySelector('.lock-icon');

      node.classList.remove('current', 'locked', 'completed');

      if (index < unlocked) {
        // UNIDAD COMPLETADA EN ESTA SESIÓN
        node.classList.add('completed');
        if (statusText) statusText.textContent = 'Completado ✅';
        if (lockIcon) lockIcon.remove();

        if (!existingBtn) {
          const btn = document.createElement('button');
          btn.className = 'unit-open';
          btn.textContent = 'Repasar';
          btn.addEventListener('click', () => {
            window.location.href = unitFiles[index];
          });
          node.appendChild(btn);
        } else {
          existingBtn.textContent = 'Repasar';
          existingBtn.onclick = () => {
            window.location.href = unitFiles[index];
          };
        }

      } else if (index === unlocked) {
        // UNIDAD ACTUAL DISPONIBLE
        node.classList.add('current');
        if (statusText) statusText.textContent = 'Disponible';
        if (lockIcon) lockIcon.remove();

        if (!existingBtn) {
          const btn = document.createElement('button');
          btn.className = 'unit-open';
          btn.textContent = 'Empezar';
          btn.addEventListener('click', () => {
            window.location.href = unitFiles[index];
          });
          node.appendChild(btn);
        } else {
          existingBtn.textContent = 'Empezar';
          existingBtn.onclick = () => {
            window.location.href = unitFiles[index];
          };
        }

      } else {
        // UNIDAD BLOQUEADA
        node.classList.add('locked');
        if (statusText) statusText.textContent = 'Bloqueado';
        if (existingBtn) existingBtn.remove();
        if (!lockIcon) {
          const span = document.createElement('span');
          span.className = 'lock-icon';
          span.textContent = '🔒';
          node.appendChild(span);
        }
      }
    });
  }

  document.querySelectorAll('[data-go="learning"]').forEach((btn) => {
    btn.addEventListener('click', showLearningMap);
  });

  if (window.location.hash === '#learning') {
    showLearningMap();
  } else {
    renderUnits();
  }
});