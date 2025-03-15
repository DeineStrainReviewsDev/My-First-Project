/* eslint-disable n/no-unsupported-features/node-builtins */

if (
  typeof window !== "undefined" &&
  typeof globalThis.document !== "undefined"
) {
  globalThis.document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = globalThis.document.getElementById("mode-toggle-btn");
    var body = globalThis.document.body;

    if (typeof window.localStorage !== "undefined") {
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
