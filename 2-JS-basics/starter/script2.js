// if else
var nombreUsuario = 'Juanito';
var estadoCivil = 'separado';

if (estadoCivil === 'casado') {
    console.log(nombreUsuario + ' esta casado\' test ');
} else {
    console.log(nombreUsuario + ' esta soltero\' test');
}

// logica boleana
if (estadoCivil === 'casado') {
    console.log(nombreUsuario + ' esta casado');
} else if (estadoCivil === 'soltero' || estadoCivil === 'separado') {
    console.log(nombreUsuario + ' esta soltero');
} else {
    console.log(nombreUsuario + ' esta separado');
}

// Ternary operator
var nombre = 'Rodrigo';
var edad = 16;
edad >= 18 ? console.log(nombre + ' puede beber') : console.log(nombre + ' no puede beber');

edad = 21;
var resultado = edad >= 18 ? ' puede beber' : ' no puede beber';
console.log(nombre + resultado);

// switch statement
var palabra = 'poto';
switch (palabra) {
    case 'poto':
    case 'hola':
        console.log('hola');
        break;
    case 'chao':
        console.log('chao');
        break;
    case 'chile':
        console.log('chile');
        break;
    default:
        console.log('nose');
}

// Valores falsos: undefined, null, 0, '', NaN
// Valores verdaderos: Todos los que no son falsos

// === : data type tiene que ser igual
// == : data type no tiene que ser igual

var valor = 23;
if (valor == '23') {
    console.log('Hola1')
}
if (valor === '23') {
    console.log('Hola2')
}

