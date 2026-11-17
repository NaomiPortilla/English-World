:root {
  --ink: #27264a;
  --muted: #6f708b;
  --purple: #6558e8;
  --purple-dark: #4f42d4;
  --blue: #3187ed;
  --success: #2ec4b6;
  --danger: #e71d36;
  --line: #e7e7f4;
  --card: #ffffff;
  --mint: #dff8f0;
  --pink: #ffe4ee;
  --yellow: #fff1c9;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  font-family: ui-rounded, "Segoe UI", system-ui, -apple-system, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(circle at 12% 14%, #c9f5ed 0, transparent 25%),
    radial-gradient(circle at 90% 18%, #ffe8b8 0, transparent 24%),
    radial-gradient(circle at 85% 90%, #ffdeeb 0, transparent 26%),
    linear-gradient(135deg, #f5f2ff, #eefaff 55%, #fff9eb);
}

.progress-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: #e7e4fb;
  z-index: 10;
}

.progress-top span {
  display: block;
  width: 20%;
  height: 100%;
  background: linear-gradient(90deg, var(--purple), var(--blue));
  transition: width 0.35s ease;
}

.app-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 32px 18px;
}

.screen {
  display: none;
  width: min(900px, 100%);
  animation: enter 0.35s ease;
}

.screen.active {
  display: block;
}

.welcome-card,
.step-card {
  width: 100%;
  margin: auto;
  background: #ffffffed;
  border: 2px solid #fff;
  border-radius: 32px;
  box-shadow: 0 25px 75px #39307819;
  padding: clamp(25px, 5vw, 50px);
  text-align: center;
}

.kicker {
  color: var(--purple);
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.screen h1 {
  font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 6px auto 14px;
}

.subtitle {
  max-width: 600px;
  margin: 0 auto 24px;
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.6;
}

.btn {
  border: 0;
  border-radius: 16px;
  min-height: 49px;
  padding: 13px 22px;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.18s, box-shadow 0.18s, background 0.18s;
}

.btn:hover {
  transform: translateY(-2px);
}

.primary {
  background: linear-gradient(135deg, var(--purple), var(--blue));
  color: #fff;
  box-shadow: 0 5px 0 #4136b0, 0 10px 20px #6558e82b;
}

.ghost {
  background: #f0effb;
  color: #565078;
}

.ghost:hover {
  background: #e4e2f8;
}

/* PANTALLA 1: BIENVENIDA */
#screen-start.welcome {
  width: min(960px, 100%);
}

#screen-start .welcome-new {
  max-width: 880px;
  padding: clamp(22px, 4vw, 40px);
  border: 1px solid #e8d9ff;
  border-radius: 34px;
  background: linear-gradient(160deg, #fbf7ff 0%, #f0e3ff 100%);
  box-shadow: 0 20px 55px #6840a51c;
}

#screen-start .welcome-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
  color: #4c218a;
}

#screen-start .welcome-earth {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 5px 0 #ded0ff;
  font-size: 1.9rem;
}

#screen-start .welcome-brand-name {
  font-size: clamp(1.35rem, 3vw, 1.9rem);
  font-weight: 900;
  letter-spacing: 0.04em;
}

#screen-start .welcome-tagline {
  color: #7651b7;
  font-size: 0.92rem;
  font-weight: 700;
}

#screen-start .welcome-illustration {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(8px, 2.5vw, 22px);
  width: min(100%, 580px);
  height: clamp(140px, 22vw, 195px);
  margin: 12px auto 16px;
  border-radius: 25px;
  background: radial-gradient(circle at 50% 45%, #fff 0, #f8efff 62%, #efe1ff 100%);
  overflow: hidden;
}

#screen-start .decor {
  position: relative;
  z-index: 1;
  line-height: 1;
}

#screen-start .decor-earth {
  font-size: clamp(3rem, 7vw, 4.8rem);
  animation: bob 2.2s ease-in-out infinite alternate;
}

#screen-start .decor-boy,
#screen-start .decor-girl {
  font-size: clamp(2.6rem, 6vw, 4rem);
  align-self: flex-end;
  margin-bottom: 12px;
}

#screen-start .decor-book {
  font-size: clamp(2.1rem, 4.5vw, 3.2rem);
  align-self: flex-end;
  margin-bottom: 14px;
}

#screen-start .decor-star {
  position: absolute;
  left: 10%;
  top: 15%;
  font-size: 1.6rem;
}

#screen-start .decor-speech {
  position: absolute;
  right: 10%;
  top: 14%;
  padding: 8px 13px;
  border-radius: 15px;
  background: #fff;
  color: #6333bd;
  font-size: 0.95rem;
  font-weight: 900;
  box-shadow: 0 4px 0 #e3d3ff;
}

#screen-start .decor-pencil {
  position: absolute;
  right: 14%;
  bottom: 12%;
  font-size: 1.7rem;
}

#screen-start.welcome h1 {
  color: #5421a2;
}

#screen-start .welcome .primary {
  width: min(360px, 100%);
  min-height: 58px;
  border-radius: 19px;
  background: linear-gradient(135deg, #8537e8, #6225c5);
  box-shadow: 0 5px 0 #481b9d, 0 10px 22px #6c2cc52b;
  font-size: 1.12rem;
}

#screen-start .welcome-footer {
  margin-top: 18px;
  color: #765b98;
  font-size: 0.84rem;
  font-weight: 700;
}

/* PANTALLA 2: PERSONALIZACIÓN */
.name-input {
  display: block;
  width: min(460px, 100%);
  margin: 10px auto 6px;
  padding: 15px 18px;
  border: 2px solid var(--line);
  border-radius: 16px;
  background: #fff;
  color: var(--ink);
  font: inherit;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.18s, box-shadow 0.18s;
}

.name-input:focus {
  border-color: var(--purple);
  box-shadow: 0 0 0 3px #6558e81a;
}

.section-label {
  font-weight: 800;
  color: var(--ink);
  margin: 18px 0 12px;
}

.error {
  min-height: 20px;
  color: #c33f62;
  font-size: 0.88rem;
  font-weight: 700;
}

.option-grid.characters {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  max-width: 560px;
  margin: 0 auto;
}

.option.character {
  font: inherit;
  color: var(--ink);
  background: #fff;
  border: 2px solid var(--line);
  border-radius: 20px;
  padding: 18px 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  transition: transform 0.18s, border-color 0.18s, background 0.18s;
}

.option.character:hover {
  transform: translateY(-2px);
  border-color: #c7c1ff;
}

.option.character.selected {
  border-color: var(--purple);
  background: #f5f3ff;
  box-shadow: 0 0 0 3px #6558e81a;
}

.selection-mark {
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  place-items: center;
  background: var(--purple);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 900;
}

.character.selected .selection-mark {
  display: grid;
}

.no-character-icon {
  font-size: 3.1rem;
  line-height: 1.1;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  max-width: 560px;
  margin: 26px auto 0;
}

/* PANTALLA 3: MAPA DE APRENDIZAJE */
.learning-card {
  max-width: 780px;
}

.learning-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  text-align: left;
}

.learning-level-pill {
  padding: 10px 16px;
  border-radius: 999px;
  background: #e7f8ef;
  color: #24774f;
  font-size: 0.88rem;
  font-weight: 800;
  white-space: nowrap;
}

.learning-subtitle {
  text-align: left;
  max-width: none;
  margin: 8px 0 22px;
}

.learning-map {
  background: #f8f8ff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 20px;
  text-align: left;
}

.unit-node {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border: 2px solid #dedcf5;
  border-radius: 18px;
  background: #fff;
  transition: transform 0.18s, border-color 0.18s;
}

.unit-node.current {
  border-color: var(--purple);
  background: #f3f1ff;
}

.unit-node.completed {
  border-color: var(--success);
  background: #f0fdfb;
}

.unit-node.locked {
  opacity: 0.68;
  background: #f5f5fa;
}

.node-number {
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: #e8e5ff;
  color: #5549ca;
  font-weight: 900;
  font-size: 1.1rem;
}

.unit-node.completed .node-number {
  background: #d8f8f4;
  color: #0b6e64;
}

.unit-node.locked .node-number {
  background: #e8e8f0;
  color: #8a8aa0;
}

.unit-info {
  flex: 1;
  min-width: 0;
}

.unit-info strong {
  display: block;
  font-size: 1.02rem;
  margin-bottom: 2px;
}

.unit-info small {
  display: block;
  font-size: 0.84rem;
  color: var(--muted);
}

.unit-open {
  border: 0;
  border-radius: 12px;
  padding: 10px 16px;
  background: var(--purple);
  color: #fff;
  font: inherit;
  font-size: 0.85rem;
  font-weight: 800;
  cursor: pointer;
  white-space: nowrap;
}

.unit-open:hover {
  background: var(--purple-dark);
}

.unit-node.completed .unit-open {
  background: #149689;
}

.path-line {
  height: 16px;
  width: 3px;
  background: #d9d6f5;
  margin: 0 0 0 36px;
}

.final-node {
  margin-top: 4px;
  border-style: dashed;
}

.final-node .node-number {
  background: #fff0c9;
  color: #9b7100;
}

.learning-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.learning-footer span {
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 700;
}

.footer-btns {
  display: flex;
  gap: 8px;
}

.footer-btns .btn {
  min-height: 40px;
  padding: 8px 14px;
  font-size: 0.84rem;
}

/* PANTALLA 4: LECCIÓN Y PRÁCTICA */
.lesson-shell {
  width: 100%;
  max-width: 820px;
  margin: auto;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 18px;
}

.btn-back {
  background: #fff;
  border: 2px solid #e0defa;
  color: var(--purple);
  padding: 9px 16px;
  border-radius: 14px;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
  transition: 0.2s;
}

.btn-back:hover {
  background: #eceaff;
}

.progress-wrap {
  flex: 1;
  height: 12px;
  background: #e0defa;
  border-radius: 999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 50%;
  background: linear-gradient(90deg, var(--purple), #8b80f9);
  transition: width 0.4s ease;
}

.lesson-card {
  background: var(--card);
  border-radius: 26px;
  padding: 28px;
  box-shadow: 0 12px 30px rgba(101, 88, 232, 0.12);
  text-align: left;
}

.lesson-card h1 {
  font-size: 1.85rem;
  margin: 4px 0 8px;
}

.lesson-card .subtitle {
  max-width: none;
  margin: 0 0 22px;
}

.mascot-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #f0eeff;
  border: 2px dashed #bdb5ff;
  border-radius: 20px;
  padding: 14px 18px;
  margin-bottom: 24px;
}

.mascot-avatar {
  font-size: 2.6rem;
  line-height: 1;
  flex-shrink: 0;
}

.mascot-speech {
  font-size: 0.98rem;
  line-height: 1.45;
}

.vocab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  gap: 16px;
  margin-bottom: 28px;
}

.vocab-card {
  background: #faf9ff;
  border: 2px solid #e6e3fc;
  border-radius: 20px;
  padding: 18px 14px;
  text-align: center;
  transition: transform 0.2s, border-color 0.2s;
}

.vocab-card:hover {
  transform: translateY(-4px);
  border-color: var(--purple);
}

.vocab-emoji {
  font-size: 3rem;
  display: block;
  margin-bottom: 8px;
}

.color-swatch {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
  border: 3px solid #ffffff;
}

.num-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  background: var(--purple);
  color: #fff;
  font-size: 1.4rem;
  font-weight: 900;
  border-radius: 15px;
  margin-bottom: 8px;
}

.vocab-en {
  font-size: 1.28rem;
  font-weight: 800;
  color: var(--purple);
}

.vocab-es {
  font-weight: 700;
  color: var(--ink);
  margin: 3px 0 5px;
}

.vocab-tip {
  font-size: 0.83rem;
  color: var(--muted);
  margin-bottom: 12px;
  line-height: 1.4;
}

.btn-audio {
  background: #eceaff;
  color: var(--purple);
  border: 1.5px solid #c9c3fa;
  border-radius: 10px;
  padding: 7px 13px;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.84rem;
  transition: 0.2s;
}

.btn-audio:hover {
  background: var(--purple);
  color: #fff;
}

.btn-primary-lesson {
  width: 100%;
  background: var(--purple);
  color: #fff;
  border: none;
  padding: 15px 22px;
  border-radius: 16px;
  font: inherit;
  font-size: 1.06rem;
  font-weight: 800;
  cursor: pointer;
  transition: 0.2s;
}

.btn-primary-lesson:hover {
  background: var(--purple-dark);
}

.btn-primary-lesson:disabled {
  background: #c5c1f5;
  cursor: not-allowed;
}

.hidden {
  display: none !important;
}

.question-box {
  background: #faf9ff;
  border: 2px solid #e6e3fc;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 18px;
}

.question-title {
  font-weight: 800;
  font-size: 1.08rem;
  margin-bottom: 12px;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}

.option-btn {
  background: #fff;
  border: 2px solid #dcd8fa;
  border-radius: 14px;
  padding: 12px;
  font: inherit;
  font-weight: 700;
  font-size: 0.96rem;
  cursor: pointer;
  transition: 0.2s;
}

.option-btn:hover {
  border-color: var(--purple);
  background: #f3f1ff;
}

.option-btn.correct {
  background: #d8f8f4;
  border-color: var(--success);
  color: #0b6e64;
}

.option-btn.wrong {
  background: #ffe3e7;
  border-color: var(--danger);
  color: #9e0b1c;
}

.feedback-msg {
  margin-top: 10px;
  font-weight: 700;
  font-size: 0.92rem;
}

.celebrate-box {
  text-align: center;
  padding: 20px 10px;
}

.celebrate-emoji {
  font-size: 4.2rem;
  margin-bottom: 12px;
}

.celebrate-box .subtitle {
  margin: 0 auto 24px;
}

.trophy-badge {
  display: inline-block;
  background: #fff3cd;
  color: #996c00;
  border: 2px solid #ffe082;
  padding: 8px 18px;
  border-radius: 999px;
  font-weight: 800;
  margin-bottom: 16px;
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bob {
  to {
    transform: translateY(-8px) rotate(2deg);
  }
}

@media (max-width: 650px) {
  .app-shell {
    padding: 20px 12px;
  }
  .option-grid.characters {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }
  .actions {
    flex-direction: column-reverse;
  }
  .learning-heading {
    flex-direction: column;
    align-items: flex-start;
  }
  .lesson-card {
    padding: 20px 16px;
  }
}
