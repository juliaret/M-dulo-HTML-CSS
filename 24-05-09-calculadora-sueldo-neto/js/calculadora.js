document.querySelector('#boton').addEventListener('click', calcular);

function calcular() {
  console.log('calculando...');

  let bruto = document.querySelector('#bruto').value;
  let hijos = document.querySelector('#hijos').value;
  let contrato = document.querySelector('#contrato').value;
  let pagas = document.querySelector('#pagas').value;
  let respuesta = document.querySelector('#respuesta');
  console.log(bruto, hijos, contrato, pagas);

  let retHijos = document.querySelector('#retHijos');
  let retContrato = document.querySelector('#retContrato');
  let neto = document.querySelector('#neto');
  console.log(retHijos, retContrato, neto);

  let retencionHijosTotal;
  let retencionHijosMensual;
  let retencionContratoTotal;
  let retencionContratoMensual;
  let netoMensual;

  if (bruto == '') {
    respuesta.innerHTML = 'Debe completar el campo "Sueldo bruto anual"';
  } else if (hijos == '') {
    respuesta.innerHTML = 'Debe completar el campo "Nº de hijos"';
  } else if (contrato == '') {
    respuesta.innerHTML = 'Debe completar el campo "Tipo de contrato"';
  } else if (pagas == '') {
    respuesta.innerHTML = 'Debe completar el campo "Nº de pagas"';
  } else {
    respuesta.innerHTML = '';

    if (hijos == 'hijos0') {
      //retHijos.innerHTML = (bruto * 15) / 100;
      retencionHijosTotal = (bruto * 15) / 100;
      console.log((bruto * 15) / 100);
    } else if (hijos == 'hijos1') {
      //retHijos.innerHTML = (bruto * 10) / 100;
      retencionHijosTotal = (bruto * 10) / 100;
      console.log((bruto * 10) / 100);
    } else if (hijos == 'hijos3') {
      //retHijos.innerHTML = (bruto * 5) / 100;
      retencionHijosTotal = (bruto * 5) / 100;
      console.log((bruto * 5) / 100);
    }

    if (contrato == 'indefinido') {
      //retContrato.innerHTML = (bruto * 15) / 100;
      retencionContratoTotal = (bruto * 15) / 100;
      console.log((bruto * 15) / 100);
    } else if (contrato == 'temporal') {
      //retContrato.innerHTML = (bruto * 10) / 100;
      retencionContratoTotal = (bruto * 10) / 100;
      console.log((bruto * 10) / 100);
    }

    //calculos mensuales
    retencionHijosMensual = retencionHijosTotal / pagas;
    retHijos.innerHTML = retencionHijosMensual.toFixed(2) + '€';
    retencionContratoMensual = retencionContratoTotal / pagas;
    retContrato.innerHTML = retencionContratoMensual.toFixed(2) + '€';
    netoMensual =
      (bruto - retencionHijosTotal - retencionContratoTotal) / pagas;
    neto.innerHTML = netoMensual.toFixed(2);
  }
}
