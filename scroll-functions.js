document.addEventListener("DOMContentLoaded", function () {
  var scrollLinks = document.querySelectorAll(".scroll-link");

  Array.prototype.forEach.call(scrollLinks, function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = globalThis?.document?.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
