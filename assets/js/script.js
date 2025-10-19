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
var plansData;
var path = window.location.pathname;

if (path.includes('/en')) {
  plansData = [
    { title: "FTC #10 (2025-2026)", description: "We are preparing to participate in the FIRST Tech Challenge in season 10 of 2025-2026. We will have an efficiently organized team, made up of specialized members in different fields and we aim to qualify for the national stage of the competition by winning a prize." },
    { title: "NOSC 2026", description: "In the 2025-2026 school year we will participate in the National Olympiad of Scientific Creativity with various projects that highlight the excellent applicability of robotics in different fields. This national competition gives us the opportunity to highlight the talent of our members and we aim to qualify for the national stage." },
    { title: "InfoEducație 2026", description: "For the next year, we plan to participate in several sections in the InfoEducation contest, where we can highlight the diverse digital and technological skills of our club members." },
  ];
} else {
  plansData = [
    { title: "FTC #10 (2025-2026)", description: "Ne pregătim pentru a participa la FIRST Tech Challenge în sezonul 10 din 2025-2026. Vom avea o echipă organizată eficient, alcătuită din membri specializați în diferite domenii și ne propunem să ne calificăm la etapa națională a competiției prin câștigarea unui premiu." },
    { title: "ONCS 2026", description: "În anul școlar 2025-2026 vom participa la Olimpiada Națională de Creativitate Ştiinţifică cu diferite proiecte care pun în valoare aplicabilitatea excelentă a roboticii în diferite domenii. Acest concurs național ne oferă oportunitatea de a evidenția talentul membrilor noștri și ne propunem să ne calificăm la etapa națională." },
    { title: "InfoEducație 2026", description: "Pentru următorul an, avem în plan participarea pe mai multe secțiuni în cadrul concursului InfoEducație, unde putem pune în valoare abilitățile digitale și tehnologice diverse ale membrilor clubului nostru." },
  ];
}

//Generate dynamic content
document.addEventListener('DOMContentLoaded', () => {
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
});