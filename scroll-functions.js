if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", function () {
    var scrollLinks =
      typeof document !== "undefined"
        ? document.querySelectorAll(".scroll-link")
        : [];

    Array.prototype.forEach.call(scrollLinks, function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        var targetId = this.getAttribute("href").substring(1);
        var targetElement =
          typeof document !== "undefined"
            ? document.getElementById(targetId)
            : null;

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });

    // Scroll to Top Button
    var scrollToTopBtn =
      typeof document !== "undefined"
        ? document.getElementById("scroll-to-top-btn")
        : null;

    if (scrollToTopBtn) {
      // Button anzeigen/verstecken, wenn gescrollt wird
      window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
          scrollToTopBtn.style.opacity = "1";
          scrollToTopBtn.style.visibility = "visible";
        } else {
          scrollToTopBtn.style.opacity = "0";
          scrollToTopBtn.style.visibility = "hidden";
        }
      });

      // Beim Klicken auf den Button nach oben scrollen
      scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  });
}
