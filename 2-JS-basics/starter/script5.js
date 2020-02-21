// Arreglos

var nombres = ['Rodrigo','Dayan','Ema'];
var edades = new Array(42,39,4);

console.log(nombres[0]);
console.log(nombres);
console.log(nombres.length);

nombres[0] = 'Chino';

nombres[10] = 'test';
nombres[nombres.length] = 'ultimo';
nombres[nombres.length] = false;

nombres.push(12);
nombres.unshift('primero');


console.log(nombres);

nombres.pop();
nombres.push('primero');
console.log(nombres);
console.log(nombres.indexOf('Chino'));

var text = nombres.indexOf('Chino') === -1 ? 'no esta' : 'esta';
console.log(text);