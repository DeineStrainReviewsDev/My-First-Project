/* eslint-disable n/no-unsupported-features/node-builtins */

if (typeof window !== "undefined" && typeof document !== "undefined") {
  document?.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("mode-toggle-btn");
    var body = document.body;

    if (window.localStorage) {
      if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
      }

      toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
          localStorage.setItem("darkMode", "enabled");
        } else {
          localStorage.setItem("darkMode", "disabled");
        }
      });
    }
  });
}
