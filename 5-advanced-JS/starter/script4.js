// Closures
function prueba(valor){
  var a = 'prueba closures';
  return function(nombre){
    var resultado = nombre + valor;
    console.log(a+resultado);
  }
}

prueba('Rodrigo')('Ema');

// Bind, call and apply
var rodrigo = {
  nombre: 'Rodrigo',
  edad: 42,
  empleo: 'Ingeniero',
  saludo: function(stilo, horaDelDia){
    if (stilo === 'formal'){
      console.log(horaDelDia+
        ', soy '+
        this.nombre+
        ' tengo '+
        this.edad+
        ' y trabajo como '+
        this.empleo);
    } else if (stilo === 'amigo'){
      console.log('Wueeeena '+
        horaDelDia+
        ', soy '+
        this.nombre+
        ' tengo '+
        this.edad+
        ' y trabajo como '+
        this.empleo);
    }
  }
};

var ema = {
  nombre: 'Ema',
  edad: 5,
  empleo: 'Pre Kinder'
}

rodrigo.saludo('formal','noche');

rodrigo.saludo.call(ema, 'amigo', 'tarde');
//rodrigo.saludo.apply(ema, ['amigo','tarde']); Se usa con llamadas a arreglo en los  parametros de entrada

var rodrigoAmigo = rodrigo.saludo.bind(rodrigo, 'amigo');
rodrigoAmigo('medio dia');

var emaFormal = rodrigo.saludo.bind(ema, 'formal');
emaFormal('mañana');



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapon = arrayCalc(ages, isFullAge.bind(this, 20));
//var fullJapon = arrayCalc(ages, isFullAge); aqui no puedo pasar variable


console.log(ages);
console.log(fullJapon);
