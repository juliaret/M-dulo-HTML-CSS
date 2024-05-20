//MENÚ HAMBURGUESA MÓVIL

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

//SUBMENÚ

document
  .querySelector(".nav__subnavbar")
  .classList.add("nav__subnavbar--ocultar");
document.querySelector("#desplegable").addEventListener("click", function () {
  //console.log('submenu...');

  document
    .querySelector(".nav__subnavbar")
    .classList.toggle("nav__subnavbar--ocultar");

  if (
    document
      .querySelector(".nav__subnavbar")
      .classList.contains("nav__subnavbar--ocultar")
  ) {
    document
      .querySelector("#desplegable i")
      .classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
  } else {
    document
      .querySelector("#desplegable i")
      .classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
  }
});
