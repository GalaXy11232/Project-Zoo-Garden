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
  { title: "FTC #10 (2025-2026)", description: "We are preparing to participate in the FIRST Tech Challenge in season 10 of 2025-2026. We will have an efficiently organized team, made up of specialized members in different fields and we aim to qualify for the national stage of the competition by winning a prize." },
  { title: "NOSC 2026", description: "In the 2025-2026 school year we will participate in the National Olympiad of Scientific Creativity with various projects that highlight the excellent applicability of robotics in different fields. This national competition gives us the opportunity to highlight the talent of our members and we aim to qualify for the national stage." },
  { title: "InfoEducație 2026", description: "For the next year, we plan to participate in several sections in the InfoEducation contest, where we can highlight the diverse digital and technological skills of our club members." },
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