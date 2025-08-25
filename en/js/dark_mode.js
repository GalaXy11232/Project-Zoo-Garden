const btn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const anim_img = document.querySelector("#zen img");
const sovazen_img = document.querySelector('.soy');
const storageThemeEntry = 'system-mode';

var icon_class;
var theme;
var r = document.querySelector(":root");

function set_style(property, value) { r.style.setProperty(property, value); }

function switch_theme(mode = null) {
    // just switch to opposite value
    if (mode === null)
      mode = localStorage.getItem(storageThemeEntry) == 'light' ? 'dark' : 'light';
    

    if (mode == 'light') {
      theme = mode;
      localStorage.setItem(storageThemeEntry, theme);
      icon_class = "bi bi-moon";
      icon.className = icon_class;
      
      set_style("--primary", "#7b28ae");
      set_style("--bg-light", "#d1c3e6");
      set_style("--primary-gradient", "linear-gradient(to right, #7b28ae, #ba12aa)");
      set_style("--light-text-color", "#fff");
      set_style("--dark-text-color", "#000");
      set_style("--card-background", "#eee");
      set_style("--navbar-bg", "linear-gradient(to right, #d1c3e6, #d1c3e680)");
      set_style("--results-icons", "brightness(100%)");
      set_style('--shadow-color', 'var(--rvr_shadow-color)');
      anim_img.setAttribute("src", "../assets/images/Branding Zenith/Sigla_mov.png");
      sovazen_img.setAttribute('src', '../assets/images/Branding Zenith/Sigla_mov.png');
    }

    else if (mode == 'dark') {
      theme = mode;
      localStorage.setItem(storageThemeEntry, theme);
      icon_class = "bi bi-sun";
      icon.className = icon_class;

      set_style("--primary", "#d1c3e6");
      set_style("--bg-light", "#5b1dc3");
      set_style("--primary-gradient", "linear-gradient(to right, #ba12aa, #d1c3e6)");
      set_style("--light-text-color", "#000");
      set_style("--dark-text-color", "#fff");
      set_style("--card-background", "#7b28ae");
      set_style("--navbar-bg", "linear-gradient(to right, #5b1dc380, #5b1dc340)");
      set_style("--results-icons", "brightness(0) invert(1)");
      set_style('--shadow-color', '#000');
      anim_img.setAttribute("src", "../assets/images/Branding Zenith/Sigla_alb.png");
      sovazen_img.setAttribute('src', '../assets/images/Branding Zenith/Sigla_alb.png');
    }
}

window.addEventListener("load", () => {
    // create new storage
    if (localStorage.getItem(storageThemeEntry) === null) {
      localStorage.setItem(storageThemeEntry, 'light');
      
      theme = 'light';
      switch_theme('light');

      console.log("Created new localstorage for system theme.");
    }

    // load from existing data
    else {
      theme = localStorage.getItem(storageThemeEntry);
      switch_theme(theme);
    }
});

btn.addEventListener("click", function(event) {
  switch_theme();
});