if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", function () {
    var scrollLinks = document.querySelectorAll(".scroll-link");
    var scrollToTopBtn = document.getElementById("scroll-to-top-btn");
    var scrollToBottomBtn = document.getElementById("scroll-to-bottom-btn");

    function toggleScrollButtons() {
      var scrollPosition = window.scrollY;
      var pageHeight = document.documentElement.scrollHeight;
      var viewportHeight = window.innerHeight;

      // Scroll-to-Top Button: Erst zeigen, wenn der User einmal gescrollt hat
      if (scrollPosition > 0) {
        scrollToTopBtn.style.opacity = "1";
        scrollToTopBtn.style.visibility = "visible";
      } else {
        scrollToTopBtn.style.opacity = "0";
        scrollToTopBtn.style.visibility = "hidden";
      }

      // Scroll-to-Bottom Button: Nur verstecken, wenn der User ganz unten ist
      if (scrollPosition + viewportHeight >= pageHeight - 10) {
        scrollToBottomBtn.style.opacity = "0";
        scrollToBottomBtn.style.visibility = "hidden";
      } else {
        scrollToBottomBtn.style.opacity = "1";
        scrollToBottomBtn.style.visibility = "visible";
      }
    }

    // Direkt beim Laden prüfen
    toggleScrollButtons();

    // Scroll-Buttons umschalten, wenn gescrollt wird
    window.addEventListener("scroll", toggleScrollButtons);

    // Beim Klicken auf den Top-Button nach oben scrollen
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    // Beim Klicken auf den Bottom-Button nach unten scrollen
    scrollToBottomBtn.addEventListener("click", function () {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    });

    // Smooth-Scrolling für interne Links
    Array.prototype.forEach.call(scrollLinks, function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
}
