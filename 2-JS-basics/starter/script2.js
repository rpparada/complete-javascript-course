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

