if (window.innerWidth < 768) {
  document.querySelector(".nav__menu").classList.add("nav__menu--ocultar");
  document.querySelector("#hamburguesa").addEventListener("click", function () {
    //console.log('menu...');

    document.querySelector(".nav__menu").classList.toggle("nav__menu--ocultar");

    if (
      document
        .querySelector(".nav__menu")
        .classList.contains("nav__menu--ocultar")
    ) {
      document
        .querySelector("#hamburguesa i")
        .classList.replace("bi-x-circle", "bi-list");
    } else {
      document
        .querySelector("#hamburguesa i")
        .classList.replace("bi-list", "bi-x-circle");
    }
  });
}
