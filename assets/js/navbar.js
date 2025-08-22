document.addEventListener("DOMContentLoaded", function () {
  const offcanvasElement = document.getElementById("offcanvasNavbar");
  const navLinks = offcanvasElement.querySelectorAll(".nav-link");
  const themeToggle = document.getElementById("theme-toggle");
  const langToggle = document.querySelector(".language-btn");

  // Allow body scrolling while offcanvas is open so scroll events fire
  offcanvasElement.setAttribute("data-bs-scroll", "true");

  const SCROLL_THRESHOLD = 50;
  let openScrollY = null;

  const getOffcanvas = () =>
    (bootstrap.Offcanvas.getInstance(offcanvasElement) ||
     new bootstrap.Offcanvas(offcanvasElement));

  // Reset scroll baseline whenever the menu opens; clear when it closes
  offcanvasElement.addEventListener("show.bs.offcanvas", () => {
    openScrollY = window.scrollY;
  });
  offcanvasElement.addEventListener("hidden.bs.offcanvas", () => {
    openScrollY = null;
  });

  // Close when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if(link !== langToggle) {
        const bsOffcanvas = getOffcanvas();
        if (bsOffcanvas) bsOffcanvas.hide();
      }
    });
  });

  // Prevent close when toggling theme
  if (themeToggle) {
    themeToggle.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  // Custom outside-click close
  document.addEventListener("click", function (e) {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (
      bsOffcanvas &&
      offcanvasElement.classList.contains("show") &&
      !offcanvasElement.contains(e.target) &&
      !e.target.closest("[data-bs-toggle='offcanvas']")
    ) {
      bsOffcanvas.hide();
    }
  });

  // Close on scroll after threshold from the point it opened
  window.addEventListener("scroll", function () {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (
      bsOffcanvas &&
      offcanvasElement.classList.contains("show") &&
      openScrollY !== null &&
      Math.abs(window.scrollY - openScrollY) >= SCROLL_THRESHOLD
    ) {
      bsOffcanvas.hide();
    }
  }, { passive: true });
});