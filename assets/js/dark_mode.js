const btn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

var icon_class;
var theme;
var r = document.querySelector(":root");

function get_style(var_name) {
    var rs = getComputedStyle(r);
    return rs.getPropertyValue(var_name);
}

function switch_style(var_name, light_value, dark_value) {
  if (localStorage.getItem("theme") === "light") {
    r.style.setProperty(var_name, light_value);
  } else {
    r.style.setProperty(var_name, dark_value);
  }
}

document.addEventListener("load", () => {
    if (localStorage.getItem("theme") !== null) {
      theme = localStorage.getItem("theme");
    } else {
      theme = "light";
      localStorage.setItem("theme", theme);
    }

    if (theme === "light") {
      icon_class = "bi bi-moon";
    } else {
      icon_class = "bi bi-sun";
    }
    icon.className = icon_class;
});

btn.addEventListener("click", function(event) {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);

  if (theme === "light") {
    icon_class = "bi bi-moon";
  } else {
    icon_class = "bi bi-sun";
  }
  icon.className = icon_class;

  switch_style("--primary", "#7b28ae", "#d1c3e6");
  switch_style("--bg-light", "#d1c3e6", "#5b1dc3");
  switch_style("--light-text-color", "#fff", "#000");
  switch_style("--dark-text-color", "#000", "#fff");
  switch_style("--primary-gradient", "linear-gradient(to right, #7b28ae, #ba12aa)", "linear-gradient(to right, #ba12aa, #d1c3e6)");
});