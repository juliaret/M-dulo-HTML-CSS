function enviar() {
  console.log('dentro...');

  let nombre = document.querySelector('#nombre');
  let telefono = document.querySelector('#telefono');
  let email = document.querySelector('#email');
  let mensaje = document.querySelector('#mensaje');
  let politica = document.querySelector('#politica');
  let respuesta = document.querySelector('#respuesta');

  console.log(nombre, telefono, email, mensaje);

  nombre.classList.remove('borde-rojo');
  telefono.classList.remove('borde-rojo');
  email.classList.remove('borde-rojo');
  mensaje.classList.remove('borde-rojo');
  document.querySelector('#nombre + p').innerHTML = '';
  document.querySelector('#telefono + p').innerHTML = '';
  document.querySelector('#email + p').innerHTML = '';
  document.querySelector('#mensaje + p').innerHTML = '';
  document.querySelector('#politica ~ p').innerHTML = '';

  let cNombre = true;
  let cTelefono = true;
  let cEmail = true;
  let cMensaje = true;
  let cPolitica = true;

  let patron = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (nombre.value == '') {
    document.querySelector('#nombre + p').innerHTML = 'Debe completar el campo "Nombre y apellidos"';
    nombre.classList.add('borde-rojo');
    cNombre = false;
  }
  if (telefono.value == '') {
    document.querySelector('#telefono + p').innerHTML = 'Debe completar el campo "Nº de teléfono"';
    telefono.classList.add('borde-rojo');
    cTelefono = false;
  }
  if (email.value == '') {
    document.querySelector('#email + p').innerHTML = 'Debe completar el campo "Email"';
    email.classList.add('borde-rojo');
    cEmail = false;
  }

  if (email.value != '') {
    if (patron.test(email.value)) {
    } else {
      document.querySelector('#email + p').innerHTML = 'El email no es válido';
      email.classList.add('borde-rojo');
      cEmail = false;
    }
  }

  if (mensaje.value == '') {
    document.querySelector('#mensaje + p').innerHTML = 'Debe completar el campo "Mensaje"';
    mensaje.classList.add('borde-rojo');
    cMensaje = false;
  }
  /*else if (!politica.checked) {
    }*/

  if (politica.checked == false) {
    document.querySelector('#politica ~ p').innerHTML = 'Debe aceptar la Política de privacidad';
    cPolitica = false;
  } else {
    if (cNombre && cTelefono && cEmail && cMensaje && cPolitica) {
      respuesta.innerHTML = 'Formulario enviado';
      document.querySelector('#formulario').submit();
    }
  }
}
