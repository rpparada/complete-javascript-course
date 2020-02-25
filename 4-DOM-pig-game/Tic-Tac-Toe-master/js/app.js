// variables
var tablero, turnoJugador;

// Configuracion Inicial
confInicial();

// Eventos
// '.' class, '#' id
document.querySelectorAll('td').forEach((item, i) => {
  item.addEventListener('click', function(){
    switch (item.id) {
      case 'c1':
      juegoTurno(item, 0, 0);
      break;
      case 'c2':
      juegoTurno(item, 0, 1);
      break;
      case 'c3':
      juegoTurno(item, 0, 2);
      break;
      case 'c4':
      juegoTurno(item, 1, 0);
      break;
      case 'c5':
      juegoTurno(item, 1, 1);
      break;
      case 'c6':
      juegoTurno(item, 1, 2);
      break;
      case 'c7':
      juegoTurno(item, 2, 0);
      break;
      case 'c8':
      juegoTurno(item, 2, 1);
      break;
      case 'c9':
      juegoTurno(item, 2, 2);
      break;
    }
  })
});

document.getElementById('b-reset').addEventListener('click', confInicial);

// Funciones
function confInicial() {

  tablero = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']];

  turnoJugador = 'X';

  var td = document.querySelectorAll('td');
  for (i=0; i<td.length; i++) {
    td[i].textContent = ' ';
  };

  document.getElementById('winner').textContent = 'TO PLAY!';

}

function verificarGanador(){

  switch (true) {
    // Verifica linea horizontales
    case (tablero[0][0] === tablero[0][1]) && (tablero[0][1] === tablero[0][2]) && (tablero[0][0] !== ' '):
    case (tablero[1][0] === tablero[1][1]) && (tablero[1][1] === tablero[1][2]) && (tablero[1][0] !== ' '):
    case (tablero[2][0] === tablero[2][1]) && (tablero[2][1] === tablero[2][2]) && (tablero[2][0] !== ' '):
    // Verifica linea verticales
    case (tablero[0][0] === tablero[1][0]) && (tablero[1][0] === tablero[2][0]) && (tablero[0][0] !== ' '):
    case (tablero[0][1] === tablero[1][1]) && (tablero[1][1] === tablero[2][1]) && (tablero[0][1] !== ' '):
    case (tablero[0][2] === tablero[1][2]) && (tablero[1][2] === tablero[2][2]) && (tablero[0][2] !== ' '):
    // Verifica diagonales
    case (tablero[0][0] === tablero[1][1]) && (tablero[1][1] === tablero[2][2]) && (tablero[0][0] !== ' '):
    case (tablero[0][2] === tablero[1][1]) && (tablero[1][1] === tablero[2][0]) && (tablero[0][2] !== ' '):

    document.getElementById('winner').textContent = 'Winner: '+turnoJugador;

    break;
  }
}

function juegoTurno(item, x, y) {
  if (tablero[x][y] === ' ') {
    item.textContent = turnoJugador;
    tablero[x][y] = turnoJugador;

    verificarGanador();

    turnoJugador === 'X' ? turnoJugador = 'O' : turnoJugador = 'X';
  }
}
