const btn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

var icon_class;
var theme;
var r = document.querySelector(":root");

function get_style(var_name) {
  if (localStorage.getItem(var_name) === null) {
    var rs = getComputedStyle(r);
    localStorage.setItem(var_name, rs.getPropertyValue(var_name));
  }
  return localStorage.getItem(var_name);
}

function set_style(var_name, value) {
  r.style.setProperty(var_name, value);
  localStorage.setItem(var_name, value);
}

function switch_style(var_name, light_value, dark_value) {
  if (get_style(var_name) === light_value) {
    set_style(var_name, dark_value);
  } else {
    set_style(var_name, light_value);
  }
}

document.addEventListener("load", () => {
    if (localStorage.getItem("theme") !== null) {
      theme = localStorage.getItem("theme");
    } else {
      theme = get_style("--primary") === "#7b28ae" ? "light" : "dark";
      localStorage.setItem("theme", theme);
    }

    if (localStorage.getItem("icon_class") !== null) {
      icon_class = localStorage.getItem("icon_class");
    } else {
      icon_class = localStorage.getItem("theme") === "light" ? "bi bi-moon" : "bi bi-sun";
      localStorage.setItem("icon_class", icon_class);
    }
    icon.className = icon_class;
});

btn.addEventListener("click", function(event) {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);

  icon_class = icon_class === "bi bi-moon" ? "bi bi-sun" : "bi bi-moon";
  localStorage.setItem("icon_class", icon_class);
  icon.className = icon_class;

  switch_style("--primary", "#7b28ae", "#d1c3e6");
  switch_style("--bg-light", "#d1c3e6", "#5b1dc3");
  switch_style("--primary-gradient", "linear-gradient(to right, #7b28ae, #ba12aa)", "linear-gradient(to right, #ba12aa, #d1c3e6)");
  switch_style("--light-text-color", "#fff", "#000");
  switch_style("--dark-text-color", "#000", "#fff");
});