function cambiarFoto(event) {
  //console.log(event.target);
  let mini = event.target.getAttribute('src');
  console.log(mini);
  //document.querySelector('#grande').setAttribute('src', mini);
  document.querySelector('#grande').src = mini;
  //event.target.setAttribute('class', 'marca');
  //event.target.className = 'marca';

  /*document.querySelectorAll('.minis img')[0].className = '';
  document.querySelectorAll('.minis img')[1].className = '';
  document.querySelectorAll('.minis img')[2].className = '';
  document.querySelectorAll('.minis img')[3].className = '';*/
  let miniaturas = document.querySelectorAll('.minis img');
  //console.log(miniaturas.length);
  for (let i = 0; i < miniaturas.length; i++) {
    miniaturas[i].classList.remove('marca');
  }
  event.target.classList.add('marca');
}
