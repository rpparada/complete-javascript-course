var cuentas1 = {
	cuenta: [124, 48, 268, 180, 42],
	calculaPropina: function() {
		this.propina = [];
		this.total = [];
		for (var i=0; i < this.cuenta.length; i++) {
			switch (true) {
				case this.cuenta[i] < 50:
					this.propina[i] = this.cuenta[i] * 0.2;
					this.total[i] = this.propina[i] + this.cuenta[i];
					break;
				case this.cuenta[i] >= 50 && this.cuenta[i] <= 200:
					this.propina[i] = this.cuenta[i] * 0.15;
					this.total[i] = this.propina[i] + this.cuenta[i];
					break;
				case this.cuenta[i] > 200:
					this.propina[i] = this.cuenta[i] * 0.1;
					this.total[i] = this.propina[i] + this.cuenta[i];
					break;
			}
		}
	},
	
	calcularPromedioPropina: function() {
		var temp = 0;
		for (var i=0; i<this.propina.length; i++) {
			temp = temp + this.propina[i];
		}
		this.promedio = temp / this.propina.length;
	}
}


var cuentas2 = {
	cuenta: [77, 375, 110, 45],
	calculaPropina: function() {
		this.propina = [];
		this.total = [];
		for (var i=0; i < this.cuenta.length; i++) {
			switch (true) {
				case this.cuenta[i] < 100:
					this.propina[i] = this.cuenta[i] * 0.2;
					this.total[i] = this.propina[i] + this.cuenta[i];
					break;
				case this.cuenta[i] >= 100 && this.cuenta[i] <= 300:
					this.propina[i] = this.cuenta[i] * 0.1;
					this.total[i] = this.propina[i] + this.cuenta[i];
					break;
				case this.cuenta[i] > 300:
					this.propina[i] = this.cuenta[i] * 0.25;
					this.total[i] = this.propina[i] + this.cuenta[i];
					break;
			}
		}
	},
	
	calcularPromedioPropina: function() {
		var temp = 0;
		for (var i=0; i<this.propina.length; i++) {
			temp = temp + this.propina[i];
		}
		this.promedio = temp / this.propina.length;
	}
	
	
	
}

cuentas1.calculaPropina();
cuentas1.calcularPromedioPropina()

cuentas2.calculaPropina();
cuentas2.calcularPromedioPropina();

console.log('promedio c1 '+cuentas1.promedio)
console.log('promedio c2 '+cuentas2.promedio)

if (cuentas1.promedio > cuentas2.promedio) {
	console.log('Cuenta 1');
} else if (cuentas1.promedio < cuentas2.promedio) {
	console.log('Cuenta 2');
} else {
	console.log('Igula');
}
