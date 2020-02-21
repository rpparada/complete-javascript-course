// Loops
// for

for (var i=0; i < 10; i++) {
	console.log(i);
};

var nombres = ['Ema', 'Parada', 'Guzman'];

for (var i=0; i < nombres.length; i++) {
	console.log(nombres[i]);
}

// while
var i = 0;
while (i<nombres.length) {
	console.log(nombres[i]);
	i++;
}

// continue break

var nombres2 = ['Rodrigo', 'Parada', 42, 'Gonzalez'];

for (var i=0; i < nombres2.length; i++) {
	if (typeof nombres2[i] !== 'string') continue;
	console.log(nombres2[i])
}

for (var i=0; i < nombres2.length; i++) {
	if (typeof nombres2[i] !== 'string') break;
	console.log(nombres2[i])
}

for (var i=nombres2.length-1; i >= 0; i--) {
	console.log(nombres2[i])
}