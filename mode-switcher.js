document.addEventListener("DOMContentLoaded", function () {
  // Added event listener to ensure DOM is fully loaded before executing script
  const toggleButton = document.getElementById("mode-toggle-btn"); // Selected the mode toggle button element
  const body = document.body; // Selected the body element for class manipulation

  // Check if dark mode is enabled in local storage
  if (typeof window !== "undefined" && window.localStorage) {
    if (localStorage.getItem("darkMode") === "enabled") {
      // Checked local storage for dark mode preference
      body.classList.add("dark-mode"); // Applied dark mode class if preference is enabled
    }

    toggleButton.addEventListener("click", function () {
      // Added click event listener to the toggle button
      body.classList.toggle("dark-mode"); // Toggled dark mode class on body element

      // Save the preference to local storage
      if (body.classList.contains("dark-mode")) {
        // Checked if dark mode is currently enabled
        localStorage.setItem("darkMode", "enabled"); // Saved dark mode preference as enabled in local storage
      } else {
        localStorage.setItem("darkMode", "disabled"); // Saved dark mode preference as disabled in local storage
      }
    });
  }
});
