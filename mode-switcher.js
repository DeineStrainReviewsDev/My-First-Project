if (typeof document !== "undefined") {
  // Guard access to document
  document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("mode-toggle-btn"); // Use var instead of const for block-scoped variables
    var body = document.body; // Use var instead of const for block-scoped variables

    // Check if dark mode is enabled in local storage
    if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem("darkMode") === "enabled"
    ) {
      // Guard access to localStorage
      body.classList.add("dark-mode"); // Applied dark mode class if preference is enabled
    }

    toggleButton.addEventListener("click", function () {
      body.classList.toggle("dark-mode"); // Toggled dark mode class on body element

      // Save the preference to local storage
      if (body.classList.contains("dark-mode")) {
        // Checked if dark mode is currently enabled
        if (typeof localStorage !== "undefined") {
          // Guard access to localStorage
          localStorage.setItem("darkMode", "enabled"); // Saved dark mode preference as enabled in local storage
        }
      } else {
        if (typeof localStorage !== "undefined") {
          // Guard access to localStorage
          localStorage.setItem("darkMode", "disabled"); // Saved dark mode preference as disabled in local storage
        }
      }
    });
  });
}
