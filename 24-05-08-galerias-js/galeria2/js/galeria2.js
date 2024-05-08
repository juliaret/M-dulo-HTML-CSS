let fotos = document.querySelectorAll('.fotos img');
console.log(fotos.length);

let puntos = document.querySelectorAll('.puntos div i');
console.log(fotos.length);

document.querySelector('#atras').addEventListener('click', retroceder);
document.querySelector('#adelante').addEventListener('click', avanzar);

let numFoto = 0;

function retroceder() {
  numFoto--;
  if (numFoto < 0) {
    numFoto = fotos.length - 1;
  }
  vaciar();

  console.log(numFoto);
  fotos[numFoto].classList.add('activo');
}

function avanzar() {
  numFoto++;
  if (numFoto > fotos.length - 1) {
    numFoto = 0;
  }

  vaciar();

  console.log(numFoto);
  fotos[numFoto].classList.add('activo');
  puntos[numFoto].classList.replace('bi-circle', 'bi-circle-fill');
}

function vaciar() {
  for (let i = 0; i < fotos.length; i++) {
    fotos[i].classList.remove('activo');
    puntos[i].classList.replace('bi-circle-fill', 'bi-circle');
  }
}
