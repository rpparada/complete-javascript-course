// Funcion contructura
var Persona = function(nombre, anoDeNacimiento, empleo) {
  this.name = name;
  this.anoDeNacimiento = anoDeNacimiento;
  this.empleo = empleo;

  this.calculaEdad = function(){
    console.log(2020 - this.anoDeNacimiento);
  }
};

// Instancias (new)
var rodrigo = new Persona('Rodrigo',1977,'Ingeniero');

rodrigo.calculaEdad();

var Persona2 = function(nombre, anoDeNacimiento, empleo) {
  this.name = name;
  this.anoDeNacimiento = anoDeNacimiento;
  this.empleo = empleo;
};

Persona2.prototype.calculaEdad2 = function(){
  console.log(2020 - this.anoDeNacimiento);
};

Persona2.prototype.apellido = 'Parada'

var ema = new Persona2('Ema', 2015, 'Prekinder');
ema.calculaEdad2();

console.log(rodrigo.apellido);
console.log(ema.apellido);
