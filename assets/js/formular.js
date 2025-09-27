const container = document.scrollingElement || document.documentElement;

function toggle_contact_info() {
  const hidden = document.querySelector(".contact-info-content");
  const arrow = document.querySelector(".dropdown-arrow");
  if (!hidden || !arrow) { return; }

  const wasHidden = window.getComputedStyle(hidden).display === "none";
  hidden.style.display = wasHidden ? "flex" : "none";

  requestAnimationFrame(() => {
    container.scrollTop = 0;
  });

  arrow.classList.toggle("open", wasHidden);
}