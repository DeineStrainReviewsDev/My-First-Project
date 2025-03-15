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
  });
}
