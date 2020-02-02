var masaUsuario1 = prompt('Masa Usuario 1');
var alturaUsuario1 = prompt('Altura Usuario 1');

var masaUsuario2 = prompt('Masa Usuario 2');
var alturaUsuario2 = prompt('Altura Usuario 2');

var BMIUsuario1 = masaUsuario1 / (alturaUsuario1 * alturaUsuario1);
var BMIUsuario2 = masaUsuario2 / (alturaUsuario2 * alturaUsuario2);

var compara = BMIUsuario1 > BMIUsuario2;

alert('BMI Usuario 1 es mayor que BMI Usuario 2? :' + compara);