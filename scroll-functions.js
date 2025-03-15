if (typeof window !== "undefined" && typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    var scrollLinks = document.querySelectorAll(".scroll-link");

    Array.prototype.forEach.call(scrollLinks, function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document ? document.getElementById(targetId) : null;

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
