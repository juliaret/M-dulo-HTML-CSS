console.log('Hola desde el archivo externo');

//Variables
//var
var numero = 1;
console.log(numero);
numero = 8;
console.log(numero);

//let
let nombre = 'Pepe';
console.log(nombre);
nombre = 'Juan';
console.log(nombre);

//const
const codigo = '28008';
console.log(codigo);
//codigo = '28009';
console.log(codigo);

//tipos de datos
//números
let numero1 = 6;
let numero2 = 9;

//cadenas de texto
let usuario = 'Manuel';

//boolean true | false
let primeraVez = true;

//Arrays
//Se suele utilizar para galerías de fotos
let frutas = ['Manzana', 'Pera', 'Plátano'];
//console.log(frutas);
console.log(frutas[0]);
console.log(frutas.length);

//operadores matemáticos:
//suma +
console.log(numero1 + numero2);
//resta -
console.log(numero1 - numero2);
//multiplicación *
console.log(numero1 * numero2);
//división /
console.log(numero1 / numero2);
//módulo de la división %
//exponencial **

//operadores relacionales:
//mayor >
console.log(numero1 > numero2);
//menor <
console.log(numero1 < numero2);
//mayor o igual >=
console.log(numero1 >= numero2);
//menor o igual <=
console.log(numero1 <= numero2);
//igual ==
console.log(numero1 == numero2);
//no igual !=
console.log(numero1 != numero2);

//operadores lógicos
//AND &&
//OR ||

//Condicionales

/*if (condicion1) {
  //si se cumple la condición1...
  console.log('Bienvenida!!!');
} else if (condicion2) {
  //si se cumple la condición2...
} else if (condicion3) {
  //si se cumple la condición3...
} else {
  //si no se cumple la condición...
  console.log('No puedes entrar');
}*/

//ejemplo mayor de edad
/*
let edad = prompt('Escribe tu edad');
console.log(edad);

if (edad >= 18) {
  console.log('Bienvenido, eres mayor de edad');
} else {
  console.log('No puedes pasar, eres menor de edad');
}*/

//Incremento
let contador = 0;
console.log(contador);
contador = contador + 1;
console.log(contador);
contador = contador + 1;
console.log(contador);
contador++;
console.log(contador);

//Disminución
contador--;
console.log(contador);
contador--;
console.log(contador);

//Bucles;
//for
for (let i = 0; i < frutas.length; i++) {
  //console.log('Hola' + i);
  console.log(frutas[i]);
}

//tabla de multiplicar

for (let i = 0; i <= 10; i++) {
  console.log('2 x ' + i + ': ' + i * 2);
}
