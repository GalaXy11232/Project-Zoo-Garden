//Animatie hero section
window.addEventListener('load', () => {
  document.querySelector('.animate-text-on-load').classList.add('animatie-text');
  document.querySelector('.animate-robot-on-load').classList.add('animatie-robot');
});

//Targets
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: Math.floor(document.querySelectorAll('.swiper-slide').length / 2),
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 0.9,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//Dynamic content
const plansData = [
    { title: "FTC #10 (2025-2026)", description: "Ne pregătim pentru a participa la FIRST Tech Challenge în sezonul 10 din 2025-2026. Vom avea o echipă organizată eficient, alcătuită din membri specializați în diferite domenii și ne propunem să ne calificăm la etapa națională a competiției prin câștigarea unui premiu." },
    { title: "ONCS 2026", description: "În anul școlar 2025-2026 vom participa la Olimpiada Națională de Creativitate Ştiinţifică cu diferite proiecte care pun în valoare aplicabilitatea excelentă a roboticii în diferite domenii. Acest concurs național ne oferă oportunitatea de a evidenția talentul membrilor noștri și ne propunem să ne calificăm la etapa națională." },
    { title: "InfoEducație 2026", description: "Pentru următorul an, avem în plan participarea pe mai multe secțiuni în cadrul concursului InfoEducație, unde putem pune în valoare abilitățile digitale și tehnologice diverse ale membrilor clubului nostru." },
];

function generateDynamicContent() {
    const container = document.getElementById("dynamic-content");
  
    plansData.forEach(plan => {
      const dynamicHTML = `
        <div class="box">
          <h3>${plan.title}</h3>
          <p>${plan.description}</p>
        </div>
      `;
  
      container.insertAdjacentHTML("beforeend", dynamicHTML);
    });
  }

  generateDynamicContent();

//Modal navbar
const modal = document.getElementById("modal");

modal.addEventListener("shown.bs.modal", () => {
  for (let sheet of document.styleSheets) {
    for (let rule of sheet.cssRules) {
      if (rule.selectorText === ".offcanvas-backdrop.show") {
        rule.style.opacity = "1";
      }
    }
  }
});

modal.addEventListener("hidden.bs.modal", () => {
  for (let sheet of document.styleSheets) {
    for (let rule of sheet.cssRules) {
      if (rule.selectorText === ".offcanvas-backdrop.show") {
        rule.style.opacity = "0";
      }
    }
  }
});

//Dark mode
const btn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const root = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-bs-theme", savedTheme);
  icon.className = savedTheme === "dark" ? "bi bi-sun" : "bi bi-moon";
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
  icon.className = prefersDark ? "bi bi-sun" : "bi bi-moon";
}

btn.addEventListener("click", () => {
  console.log("nigger");
  const currentTheme = root.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  root.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  icon.className = newTheme === "dark" ? "bi bi-sun" : "bi bi-moon";
});