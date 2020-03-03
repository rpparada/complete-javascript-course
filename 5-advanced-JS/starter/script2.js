// Object.create
var prototipoPersona = {
  calcularEdad: function() {
    console.log(2020 - this.anoDeNacimiento);
  }
}

var rodrigo = Object.create(prototipoPersona);
rodrigo.nombre = 'Rodrigo';
rodrigo.anoDeNacimiento = 1977;
rodrigo.empleo = 'Ingeniero';

var ema = Object.create(prototipoPersona, {
  nombre: { value:'Ema' },
  anoDeNacimiento: { value:2015 },
  empleo: { value:'PreKinder' }
});
