let header_id = document.querySelectorAll('.header')[0].getAttribute('id');
console.log(header_id);
let enlace = document.querySelectorAll('.nav__link');

if (header_id == 'INICIO') {
  enlace[0].classList.add('nav__link--activo');
} else if (header_id == 'NOSOTROS') {
  enlace[1].classList.add('nav__link--activo');
} else if (header_id == 'TIENDA') {
  enlace[2].classList.add('nav__link--activo');
} else {
  enlace[3].classList.add('nav__link--activo');
}

if (window.innerWidth < 768) {
  document.querySelector('.nav').classList.add('nav--ocultar');

  document.querySelector('#hamburguesa').addEventListener('click', function () {
    //console.log('menu...');

    document.querySelector('.nav').classList.toggle('nav--ocultar');
    //bi-x
    if (document.querySelector('.nav').classList.contains('nav--ocultar')) {
      document.querySelector('#hamburguesa i').classList.replace('bi-x', 'bi-list');
    } else {
      document.querySelector('#hamburguesa i').classList.replace('bi-list', 'bi-x');
    }
  });
}
