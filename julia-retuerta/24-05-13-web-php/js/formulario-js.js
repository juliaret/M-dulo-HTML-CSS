document.querySelector('#enviar').addEventListener('click', enviar);

function enviar() {
  console.log('dentro...');

  let nombre = document.querySelector('#nombre');
  let apellido = document.querySelector('#apellido');
  let email = document.querySelector('#email');
  let asunto = document.querySelector('#asunto');
  let servicios = document.querySelector('#servicios');
  let mensaje = document.querySelector('#mensaje');
  let politica = document.querySelector('#politica');
  let respuesta = document.querySelector('#respuesta');

  console.log(nombre, apellido, email, asunto, servicios, mensaje);

  nombre.classList.remove('rojo');
  apellido.classList.remove('rojo');
  email.classList.remove('rojo');
  asunto.classList.remove('rojo');
  servicios.classList.remove('rojo');
  mensaje.classList.remove('rojo');
  document.querySelector('#nombre + p').innerHTML = '';
  document.querySelector('#apellido + p').innerHTML = '';
  document.querySelector('#email + p').innerHTML = '';
  document.querySelector('#asunto + p').innerHTML = '';
  document.querySelector('#servicios + p').innerHTML = '';
  document.querySelector('#mensaje + p').innerHTML = '';
  document.querySelector('#politica ~ p').innerHTML = '';

  let cNombre = true;
  let cApellido = true;
  let cEmail = true;
  let cAsunto = true;
  let cServicios = true;
  let cMensaje = true;
  let cPolitica = true;

  let patron = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (nombre.value == '') {
    document.querySelector('#nombre + p').innerHTML = 'Debe completar el campo Nombre';
    nombre.classList.add('rojo');
    cNombre = false;
  }
  if (apellido.value == '') {
    document.querySelector('#apellido + p').innerHTML = 'Debe completar el campo Apellido';
    apellido.classList.add('rojo');
    cApellido = false;
  }
  if (email.value == '') {
    document.querySelector('#email + p').innerHTML = 'Debe completar el campo Email';
    email.classList.add('rojo');
    cEmail = false;
  }

  if (email.value != '') {
    if (patron.test(email.value)) {
    } else {
      document.querySelector('#email + p').innerHTML = 'El email no es válido';
      email.classList.add('rojo');
      cEmail = false;
    }
  }

  if (asunto.value == '') {
    document.querySelector('#asunto + p').innerHTML = 'Debe completar el campo Asunto';
    asunto.classList.add('rojo');
    cAsunto = false;
  }
  if (servicios.value == '') {
    document.querySelector('#servicios + p').innerHTML = 'Debe completar el campo Servicios';
    servicios.classList.add('rojo');
    cServicios = false;
  }
  if (mensaje.value == '') {
    document.querySelector('#mensaje + p').innerHTML = 'Debe completar el campo Mensaje';
    mensaje.classList.add('rojo');
    cMensaje = false;
  }
  /*else if (!politica.checked) {
  }*/

  if (politica.checked == false) {
    document.querySelector('#politica ~ p').innerHTML = 'Debe aceptar la Política de privacidad';
    cPolitica = false;
  } else {
    if (cNombre && cApellido && cEmail && cAsunto && cServicios && cMensaje && cPolitica) {
      //respuesta.innerHTML = 'Formulario enviado';
      document.querySelector('#formulario').submit();
    }
  }
}
