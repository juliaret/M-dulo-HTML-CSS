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

  if (nombre.value == '') {
    respuesta.innerHTML = 'Debe completar el campo Nombre';
    nombre.classList.add('rojo');
  }
  if (apellido.value == '') {
    respuesta.innerHTML = 'Debe completar el campo Apellido';
    apellido.classList.add('rojo');
  }
  if (email.value == '') {
    respuesta.innerHTML = 'Debe completar el campo Email';
    email.classList.add('rojo');
  }
  if (asunto.value == '') {
    respuesta.innerHTML = 'Debe completar el campo Asunto';
    asunto.classList.add('rojo');
  }
  if (servicios.value == '') {
    respuesta.innerHTML = 'Debe completar el campo Servicios';
    servicios.classList.add('rojo');
  }
  if (mensaje.value == '') {
    respuesta.innerHTML = 'Debe completar el campo Mensaje';
    mensaje.classList.add('rojo');
  }
  /*else if (!politica.checked) {
  }*/ if (politica.checked == false) {
    respuesta.innerHTML = 'Debe aceptar la Política de privacidad';
  } else {
    respuesta.innerHTML = 'Formulario enviado';
    document.querySelector('#formulario').submit();
  }
}
