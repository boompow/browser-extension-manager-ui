// HTML Elements
var logo = document.querySelector(".logo_mode");
var mode_img = document.querySelector(".mode_img");
var mode_container = document.querySelector(".mode");

var isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkMode) {
  localStorage.setItem("mode", "dark");
  //   mode_img.src = "/assets/images/icon-moon.svg";
  //   logo.src = "/assets/images/logo_dark.svg";
} else {
  localStorage.setItem("mode", "light");
  //   mode_img.src = "/assets/images/icon-sun.svg";
  //   logo.src = "/assets/images/logo.svg";
}

mode_container.addEventListener("click", () => {
  if (localStorage.getItem("mode") === "dark") {
    localStorage.setItem("mode", "light");
    mode_img.src = "/assets/images/icon-sun.svg";
    logo.src = "/assets/images/logo.svg";

    // style variables
    document.documentElement.style.setProperty(
      "--clr-gradient",
      "linear-gradient(180deg, #050A1D 0%, #09153F 100%)"
    );
    document.documentElement.style.setProperty(
      "--clr-card",
      "hsl(224, 26%, 16%)"
    );
    document.documentElement.style.setProperty(
      "--clr-card-border",
      "hsl(228, 23%, 24%)"
    );
    document.documentElement.style.setProperty(
      "--clr-mode",
      "hsl(228, 23%, 24%)"
    );
    document.documentElement.style.setProperty(
      "--clr-btn",
      "hsl(228, 23%, 24%)"
    );
    document.documentElement.style.setProperty(
      "--clr-h1",
      "hsl(200, 60%, 99%)"
    );
    document.documentElement.style.setProperty(
      "--clr-btn_border",
      "hsl(226, 11%, 37%)"
    );
    document.documentElement.style.setProperty(
      "--clr-bg-toggle",
      "hsl(224, 12%, 37%)"
    );
    document.documentElement.style.setProperty(
      "--clr-btn-text-inverse",
      "hsl(227, 85%, 13%)"
    );
  } else {
    localStorage.setItem("mode", "dark");
    mode_img.src = "/assets/images/icon-moon.svg";
    logo.src = "/assets/images/logo_dark.svg";

    // style variables
    document.documentElement.style.setProperty(
      "--clr-gradient",
      "linear-gradient(180deg, #ECF3FD 0%, #EFFBFB 100%)"
    );
    document.documentElement.style.setProperty(
      "--clr-card",
      "hsl(220, 100%, 99%)"
    );
    document.documentElement.style.setProperty(
      "--clr-card-border",
      "hsl(0, 0%, 78%)"
    );
    document.documentElement.style.setProperty(
      "--clr-mode",
      "hsl(330, 6%, 93%)"
    );
    document.documentElement.style.setProperty(
      "--clr-btn",
      "hsl(220, 100%, 99%)"
    );
    document.documentElement.style.setProperty(
      "--clr-h1",
      "hsl(227, 85%, 13%)"
    );
    document.documentElement.style.setProperty(
      "--clr-btn_border",
      "hsl(226, 11%, 37%)"
    );
    document.documentElement.style.setProperty(
      "--clr-bg-toggle",
      "hsl(0, 0%, 78%)"
    );
    document.documentElement.style.setProperty(
      "--clr-btn-text-inverse",
      "hsl(200, 60%, 99%)"
    );
  }
});
