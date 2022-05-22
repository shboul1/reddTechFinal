function navLinks() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    if (nav.classList.contains("nav-active")) {
      burger.classList.add("opened");
    } else {
      burger.classList.remove("opened");
    }
  });
}
navLinks();
