// Primitivos y objectos

// Primitivos
var a = 44;
var b = a;
a = 55;
console.log(a);
console.log(b);

// Objetos
var obj1 = {
  nombre: 'Rodrigo',
  edad: 42
}

// Aqui creamos una nuevo puntero al obj1
var obj2  = obj1;
obj1.edad = 55;
console.log(obj1.edad);
console.log(obj2.edad);

// Funciones
var edad = 45;
var obj = {
  nombre: 'Ema',
  apellido: 'Parada'
}

function cambio(a, b) {
  a = 30;
  b.apellido = 'Santiago';
}

cambio(edad, obj);
console.log(edad);
console.log(obj.apellido );

// Pasando funciones como argumentos

var anos = [1, 10, 13, 20, 30, 55];
function calculaArreglo(arreglo, func) {
  var arregloResultado = [];
  for (i=0; i<arreglo.length; i++){
    arregloResultado.push(func(arreglo[i]));
  }
  return arregloResultado;
}

function calcularEdad(ano){
  return 2020-ano;
}

var arregloFinal = calculaArreglo(anos, calcularEdad);

console.log(anos);
console.log(arregloFinal);

// Funciones retornando funciones
function retornaFunc(clave) {
  if (clave === 'prueba1') {
    return function(nombre) {
      console.log('Prueba1 '+nombre);
    }
  } else if (clave === 'prueba2') {
    return function(nombre) {
      console.log('Prueba2 '+nombre);
    }
  } else {
    return function(nombre) {
      console.log('Cualquiera '+nombre);
    }
  }
}

var resultado = retornaFunc('prueba1');

retornaFunc('prueba2')('Ema');

// Immediate invoked funtions expreions (IIFE)
 function test(){
   console.log('test IIFE');
 }

 test();

(function () {
  console.log('test2 IIFE');
}
)();

(function (nombre) {
  console.log('test2 IIFE '+nombre);
}
)('Rodrigo');
