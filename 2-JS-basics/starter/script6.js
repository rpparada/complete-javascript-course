// Objetos 

var yo ={
	nombre: 'Rodrigo',
	apellido: 'Parada',
	edad: 42,
	soltero: true,
	hijos: ['Ema','Luchito']
};

console.log(yo)

console.log(yo.hijos)
console.log(yo['apellido']);

var nombre = 'edad';
console.log(yo[nombre]);

yo.apellido = 'gonzalez';
yo[nombre] = 55;
console.log(yo)

var test = new Object();
test.prueba1 = true;
test.prieba2 = 'test';

console.log(test);

// Metodos
var mi ={
	nombre: 'Rodrigo',
	apellido: 'Parada',
	nacimiento: 1977,
	soltero: true,
	hijos: ['Ema','Luchito'],
	calcularEdad: function(fecha) {
		return 2020 - fecha;
	}
};

console.log(mi.calcularEdad(1977));

var mi2 ={
	nombre: 'Rodrigo',
	apellido: 'Parada',
	nacimiento: 1977,
	soltero: true,
	hijos: ['Ema','Luchito'],
	calcularEdad: function() {
		return 2020 - this.nacimiento;
	}
};

console.log(mi2.calcularEdad());

mi2.edad = mi2.calcularEdad();

console.log(mi2);

var mi3 ={
	nombre: 'Rodrigo',
	apellido: 'Parada',
	nacimiento: 1977,
	soltero: true,
	hijos: ['Ema','Luchito'],
	calcularEdad: function() {
		this.edad =  2020 - this.nacimiento;
	}
};

mi3.calcularEdad();
console.log(mi3);