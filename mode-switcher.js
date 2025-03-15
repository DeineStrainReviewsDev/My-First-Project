/* eslint-disable n/no-unsupported-features/node-builtins */

if (window && window.document) {
  document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("mode-toggle-btn");
    var body = document.body;

    if (window.localStorage) {
      if (window.localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
      }

      toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
          window.localStorage.setItem("darkMode", "enabled");
        } else {
          window.localStorage.setItem("darkMode", "disabled");
        }
      });
    }
  });
}
