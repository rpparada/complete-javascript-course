/*----- constants -----*/

/*----- app's state (variables) -----*/
var tablero, turnoJugador, juegoActivo;

inicio();

/*----- cached element references -----*/
var tableroDOM = document.getElementById('board');


/*----- event listeners -----*/
document.querySelectorAll('.square').forEach(function(item) {
	item.addEventListener('click',function(){
		item.textContent = 'X';
	});
});

document.getElementById('reset-button').addEventListener('click', function(){
	var divs = tableroDOM.getElementsByTagName('*');
	for (i=0; i<divs.length; i++) {
		console.log('hola');
		divs.textContent = 'H';
	}
});

/*----- functions -----*/
function inicio() {
	tablero = [['X','X','X'],
			  ['X','X','X'],
			  ['X','X','X']];
	turnoJugador = 0;
	juegoActivo = true;
}