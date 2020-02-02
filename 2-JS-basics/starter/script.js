// Comentarios de una linea
console.log("Hola Mundo2");

var ejemploTexto = 'Hola';
var ejemploNumero = 1;
var siNo = true;

var ejemploUndefined;

/* Bloque de comentarios 
    nombre variables deben comenzar con letras, '_' o '$'
    no debe contener caracteres speciales (menos '_' y '$')
    y no usar palabras reservadas (ejemplo: 'function')
*/

// typo coercion (cambia variables automaticamente)

var nombre = 'Rodrigo';
var edad = 42;

console.log(nombre + ' ' + edad);

var labor, estaCasado;
labor = 'Profesor';
estaCasado = false;

console.log(labor + ' ' + estaCasado);

// typo mutation (+ alert)
edad = 'cuarenta y dos';
alert(nombre + ' ' + edad);

// prompt
var entrada = prompt('Ingresa un mensaje');
console.log(entrada);

// Opereadores + - * /
var edad = 2018 - 30;
console.log(edad);

// Operadores logicos
var result = 10 < 3;
console.log(result);

// Operadores typeof
console.log(typeof result);
console.log(typeof edad);

// Asignaciones multiples
var nombre1, nombre2;
nombre1 = nombre2 = 'hola'
console.log(nombre1 + ' ' + nombre2)


// Otros operadores
var x = 0;
console.log('valor 1 :' + x);
x += 10;
console.log('valor 2 :' + x);
x++;
console.log('valor final :' + x);
