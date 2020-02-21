var usuario1 = {
	nombre: 'Usuario1',
	masa: 20,
	altura: 20,
	calculaBMI: function() {
		this.bmi = this.masa / (this.altura * this.altura);
		return this.bmi;
	}
};

var usuario2 = {
	nombre: 'Usuario2',
	masa: 30,
	altura: 30,
	calculaBMI: function() {
		this.bmi = this.masa / (this.altura * this.altura);
		return this.bmi;
	}
};

console.log(usuario1.calculaBMI());
console.log(usuario2.calculaBMI());

if (usuario1.bmi > usuario2.bmi) {
	console.log(usuario1.nombre + ' ' + usuario1.bmi);
} else if (usuario1.bmi < usurio2.bmi) {
	console.log(usuario2.nombre + ' ' + usuario2.bmi);
} else {
	console.log('Iguales BMI');
}