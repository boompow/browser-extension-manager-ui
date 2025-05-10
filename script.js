// Theme Elements
var logo = document.querySelector(".logo_mode");
var mode_img = document.querySelector(".mode_img");
var mode_container = document.querySelector(".mode");
var html = document.documentElement;

// Theme related Logic
var current_theme = localStorage.getItem("theme");
var isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (!current_theme) {
  if (isDarkMode) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    mode_img.src = "/assets/images/icon-moon.svg";
    logo.src = "/assets/images/logo_dark.svg";
  } else {
    html.classList.add("light");
    localStorage.setItem("theme", "light");
    mode_img.src = "/assets/images/icon-sun.svg";
    logo.src = "/assets/images/logo.svg";
  }
} else {
  if (current_theme === "dark") {
    html.classList.add("dark");
    mode_img.src = "/assets/images/icon-moon.svg";
    logo.src = "/assets/images/logo_dark.svg";
  } else {
    html.classList.add("light");
    mode_img.src = "/assets/images/icon-sun.svg";
    logo.src = "/assets/images/logo.svg";
  }
}

// Theme Event Listner
mode_container.addEventListener("click", () => {
  var HTML_class = html.classList.contains("dark");
  if (HTML_class) {
    html.classList.remove("dark");
    html.classList.add("light");
    mode_img.src = "/assets/images/icon-sun.svg";
    logo.src = "/assets/images/logo.svg";
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    html.classList.remove("light");
    mode_img.src = "/assets/images/icon-moon.svg";
    logo.src = "/assets/images/logo_dark.svg";
    localStorage.setItem("theme", "dark");
  }
});

// filter buttons

// cards

var card_arr = [
  {
    title: "DevLens",
    img: "/assets/images/logo-devlens.svg",
    detail: "Quickly inspect page layouts and visualize element boundaries.",
    remove: false,
    active: false,
  },
  {
    title: "StyleSpy",
    img: "./assets/images/logo-style-spy.svg",
    detail: "Instantly analyze and copy CSS from any webpage element.",
    remove: false,
    active: false,
  },

  {
    title: "SpeedBoost",
    img: "./assets/images/logo-speed-boost.svg",
    detail: "Optimizes browser resource usage to accelerate page loading.",
    remove: false,
    active: false,
  },

  {
    title: "JSONWizard",
    img: "./assets/images/logo-json-wizard.svg",
    detail: "Formats, validates, and prettifies JSON responses in-browser.",
    remove: false,
    active: false,
  },
  {
    title: "TabMaster Pro",
    img: "./assets/images/logo-tab-master-pro.svg",
    detail: "Formats, validates, and prettifies JSON responses in-browser.",
    remove: false,
    active: false,
  },
  {
    title: "ViewportBuddy",
    img: "./assets/images/logo-viewport-buddy.svg",
    detail: "Simulates various screen resolutions directly within the browser.",
    remove: false,
    active: false,
  },
  {
    title: "Markup Notes",
    img: "./assets/images/logo-markup-notes.svg",
    detail:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    remove: false,
    active: false,
  },
  {
    title: "GridGuides",
    img: "./assets/images/logo-grid-guides.svg",
    detail: "Overlay customizable grids and alignment guides on any webpage.",
    remove: false,
    active: false,
  },
  {
    title: "Palette Picker",
    img: "./assets/images/logo-palette-picker.svg",
    detail: "Instantly extracts color palettes from any webpage.",
    remove: false,
    active: false,
  },
  {
    title: "LinkChecker",
    img: "./assets/images/logo-link-checker.svg",
    detail: "Scans and highlights broken links on any page.",
    remove: false,
    active: false,
  },
  {
    title: "DOM Snapshot",
    img: "./assets/images/logo-dom-snapshot.svg",
    detail: "Capture and export DOM structures quickly.",
    remove: false,
    active: false,
  },
  {
    title: "LinkChecker",
    img: "./assets/images/logo-console-plus.svg",
    detail: "Enhanced developer console with advanced filtering and logging.",
    remove: false,
    active: false,
  },
];

// filter buttons
var all_btn = document.querySelector(".all_btn");
var active_btn = document.querySelector(".active_btn");
var inactive_btn = document.querySelector(".inactive_btn");
var restore_btn = document.querySelector(".restore_btn");

// filter buttons eventlistners
active_btn.addEventListener("click", () => {
  localStorage.setItem("filter", "active");
  render_cards();
});
inactive_btn.addEventListener("click", () => {
  localStorage.setItem("filter", "inactive");
  render_cards();
});
all_btn.addEventListener("click", () => {
  localStorage.setItem("filter", "all");
  render_cards();
});
restore_btn.addEventListener("click", () => {
  localStorage.setItem("filter", "restore");
  render_cards();
});

// simulating the cards in the DOM
var render_cards = () => {
  var card_container = document.querySelector(".layout");
  card_container.innerHTML = "";
  var current_filter_btn = localStorage.getItem("filter");
  var card_parsed = localStorage.getItem("card")
    ? JSON.parse(localStorage.getItem("card"))
    : card_arr;

  // activated color indicator logic
  if (current_filter_btn === "active") {
    active_btn.classList.add("list_wrapper_btn_activated");
    inactive_btn.classList.remove("list_wrapper_btn_activated");
    all_btn.classList.remove("list_wrapper_btn_activated");
    restore_btn.classList.remove("list_wrapper_btn_activated");
  } else if (current_filter_btn === "inactive") {
    active_btn.classList.remove("list_wrapper_btn_activated");
    inactive_btn.classList.add("list_wrapper_btn_activated");
    all_btn.classList.remove("list_wrapper_btn_activated");
    restore_btn.classList.remove("list_wrapper_btn_activated");
  } else if (current_filter_btn === "all") {
    active_btn.classList.remove("list_wrapper_btn_activated");
    inactive_btn.classList.remove("list_wrapper_btn_activated");
    all_btn.classList.add("list_wrapper_btn_activated");
    restore_btn.classList.remove("list_wrapper_btn_activated");
  } else {
    active_btn.classList.remove("list_wrapper_btn_activated");
    inactive_btn.classList.remove("list_wrapper_btn_activated");
    all_btn.classList.remove("list_wrapper_btn_activated");
    restore_btn.classList.add("list_wrapper_btn_activated");
  }

  card_parsed.forEach((element) => {
    if (
      current_filter_btn === "active"
        ? element.active
        : current_filter_btn === "inactive"
        ? !element.active
        : true
    ) {
      if (element.remove && current_filter_btn !== "restore") return;

      // Card
      var card = document.createElement("div");
      card.classList.add("card");

      // img and text wrapper
      var card_sub_div_1 = document.createElement("div");
      var card_img = document.createElement("img");
      card_img.setAttribute("src", element.img);
      var card_span = document.createElement("span");
      card_span.classList.add("text_wrapper");

      var card_h = document.createElement("h2");
      card_h.innerHTML = element.title;
      var card_p = document.createElement("p");
      card_p.innerHTML = element.detail;

      card_span.appendChild(card_h);
      card_span.appendChild(card_p);
      card_sub_div_1.appendChild(card_img);
      card_sub_div_1.appendChild(card_span);

      // btn wrapper
      var card_sub_div_2 = document.createElement("div");
      card_sub_div_2.classList.add("btn_wrapper");

      var card_btn = document.createElement("button");
      if (element.remove) {
        card_btn.innerHTML = "Add";
      } else {
        card_btn.innerHTML = "Remove";
      }

      var card_toggle_wrapper = document.createElement("div");
      card_toggle_wrapper.classList.add("toggle");
      var card_toggle = document.createElement("div");

      // remove button event listner
      card_btn.addEventListener("click", () => {
        if (element.remove) {
          element.remove = false;
          localStorage.setItem("card", JSON.stringify(card_parsed));
          render_cards();
        } else {
          element.remove = true;
          localStorage.setItem("card", JSON.stringify(card_parsed));
          render_cards();
        }
      });

      // toggle button status
      // removed from the eventlistner because the style is not re-rendered
      if (element.active) {
        card_toggle_wrapper.style.backgroundColor = "hsl(3, 86%, 64%)";
        card_toggle_wrapper.style.borderColor = "hsl(3, 86%, 64%)";
        card_toggle.style.right = "0";
      } else if (!element.active && current_theme === "dark") {
        card_toggle_wrapper.style.backgroundColor = "hsl(224, 12%, 37%)";
        card_toggle_wrapper.style.borderColor = "hsl(224, 12%, 37%)";
        card_toggle.style.left = "0";
      } else if (!element.active && current_theme === "light") {
        card_toggle_wrapper.style.backgroundColor = "hsl(0, 0%, 78%)";
        card_toggle_wrapper.style.borderColor = "hsl(0, 0%, 78%)";
        card_toggle.style.left = "0";
      }

      // updating toggle status
      card_toggle_wrapper.addEventListener("click", () => {
        if (element.active) {
          element.active = false;
          localStorage.setItem("card", JSON.stringify(card_parsed));
          render_cards();
        } else if (!element.active && current_theme === "dark") {
          element.active = true;
          localStorage.setItem("card", JSON.stringify(card_parsed));
          render_cards();
        } else if (!element.active && current_theme === "light") {
          element.active = true;
          localStorage.setItem("card", JSON.stringify(card_parsed));
          render_cards();
        }
      });

      card_toggle_wrapper.appendChild(card_toggle);
      card_sub_div_2.appendChild(card_btn);
      card_sub_div_2.appendChild(card_toggle_wrapper);

      card.appendChild(card_sub_div_1);
      card.appendChild(card_sub_div_2);

      card_container.appendChild(card);
    }
  });
};

render_cards();

// future issue
// if a card is removed, its active status would naturally be removed
