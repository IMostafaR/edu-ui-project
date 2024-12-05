window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("box-shadow");
  } else {
    navbar.classList.remove("box-shadow");
  }
});
