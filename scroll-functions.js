// Ensure the script runs only in a browser environment
if (typeof window !== "undefined") {
  // Wait until the DOM is fully loaded before executing the script
  window.addEventListener("DOMContentLoaded", function () {
    // Select all internal links that should trigger smooth scrolling
    var scrollLinks = document.querySelectorAll(".scroll-link");

    // Get the "Scroll to Top" button by its ID
    var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

    // Get the "Scroll to Bottom" button by its ID
    var scrollToBottomBtn = document.getElementById("scroll-to-bottom-btn");

    /**
     * Function to toggle visibility of scroll buttons
     */
    function toggleScrollButtons() {
      // Get the current vertical scroll position of the window
      var scrollPosition = window.scrollY;

      // Get the total height of the document (including content that is not visible)
      var pageHeight = document.documentElement.scrollHeight;

      // Get the height of the visible viewport
      var viewportHeight = window.innerHeight;

      // Show the "Scroll to Top" button only if the user has scrolled down
      if (scrollPosition > 0) {
        scrollToTopBtn.style.opacity = "1"; // Make the button fully visible
        scrollToTopBtn.style.visibility = "visible"; // Ensure the button is visible
      } else {
        scrollToTopBtn.style.opacity = "0"; // Hide the button (fade out)
        scrollToTopBtn.style.visibility = "hidden"; // Completely hide the button
      }

      // Hide the "Scroll to Bottom" button if the user is at the bottom of the page
      if (scrollPosition + viewportHeight >= pageHeight - 10) {
        scrollToBottomBtn.style.opacity = "0"; // Hide the button (fade out)
        scrollToBottomBtn.style.visibility = "hidden"; // Completely hide the button
      } else {
        scrollToBottomBtn.style.opacity = "1"; // Show the button (fade in)
        scrollToBottomBtn.style.visibility = "visible"; // Ensure the button is visible
      }
    }

    // Run the toggle function once when the page loads to set the initial state of the buttons
    toggleScrollButtons();

    // Listen for scroll events and update the button visibility accordingly
    window.addEventListener("scroll", toggleScrollButtons);

    /**
     * Smoothly scroll to the top of the page when the "Scroll to Top" button is clicked
     */
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: "smooth" // Enable smooth scrolling animation
      });
    });

    /**
     * Smoothly scroll to the bottom of the page when the "Scroll to Bottom" button is clicked
     */
    scrollToBottomBtn.addEventListener("click", function () {
      window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the very bottom of the page
        behavior: "smooth" // Enable smooth scrolling animation
      });
    });

    /**
     * Enable smooth scrolling for internal page links
     */
    Array.prototype.forEach.call(scrollLinks, function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default anchor jump behavior

        // Get the target section's ID from the link's href attribute
        var targetId = this.getAttribute("href").substring(1);

        // Get the corresponding target element by its ID
        var targetElement = document.getElementById(targetId);

        // If the target element exists, smoothly scroll to its position
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop, // Get the target element's position
            behavior: "smooth" // Enable smooth scrolling animation
          });
        }
      });
    });
  });
}
