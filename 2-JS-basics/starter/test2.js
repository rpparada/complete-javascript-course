function calculadorPropina(cuenta){
	switch (true){
		case cuenta < 50:
			return cuenta * 0.2;
		case cuenta >= 50 && cuenta <= 200:
			return cuenta * 0.15;
		case cuenta > 200:
			return cuenta * 0.1;
	}
}

var cuentas = [124,48,268];
var propinas = [calculadorPropina(cuentas[0]), calculadorPropina(cuentas[1]), calculadorPropina(cuentas[2])]

console.log(propinas);
