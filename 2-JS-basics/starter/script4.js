// Funciones no produce un resultado inmediato, solo acciones (retorna un undefinedn)

function calcularEdad(fechaNacimiento) {
	return 2020 - fechaNacimiento;
}

console.log(calcularEdad(1977));

var edad = calcularEdad(1977);
console.log(edad);

function retiro(fechaNacimiento, nombre) {
	var edad = calcularEdad(fechaNacimiento);
	var retiro = 65 - edad;
	console.log(nombre + ' ' + retiro);
}

retiro(1977, 'Rodrigo');

// Expresiones produce un resultado (valor)

var prueba = function(nombre, apellido) {
	switch (nombre) {
		case 'Rodrigo':
			return 'Bello';
			// return funciona como break
		case 'Carlos':
			return 'Feo';
		case 'Juan':
			return 'Muy feo';
		default:
			return 'No tengo idea'
	}
	
}

console.log(prueba('Rodrigo', 'Parada'));

// Arreglos
var nombres = ['hola','chao','rodrigo'];
var años = new Array(1977, 2020);

console.log(nombres[2]);