const btn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

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