var jugador1Partido1, jugador1Partido2, jugador1Partido3;
var jugador2Partido1, jugador2Partido2, jugador2Partido3;
var jugador3Partido1, jugador3Partido2, jugador3Partido3;

jugador1Partido1 = 89;
jugador1Partido2 = 120;
jugador1Partido3 = 103;
jugador2Partido1 = 116;
jugador2Partido2 = 94;
jugador2Partido3 = 123;
jugador3Partido1 = 97;
jugador3Partido2 = 134;
jugador3Partido3 = 105;

var jugador1Promedio = (jugador1Partido1 + jugador1Partido2 + jugador1Partido3) / 3;
var jugador2Promedio = (jugador2Partido1 + jugador2Partido2 + jugador2Partido3) / 3;
var jugador3Promedio = (jugador3Partido1 + jugador3Partido2 + jugador3Partido3) / 3;

switch (true) {
    case jugador1Promedio > jugador2Promedio && jugador1Promedio > jugador3Promedio:
        console.log('Jugador 1 es el ganador');
        break;
	case jugador2Promedio > jugador1Promedio && jugador2Promedio > jugador3Promedio:
        console.log('Jugador 2 es el ganador');
        break;
	case jugador3Promedio > jugador2Promedio && jugador3Promedio > jugador1Promedio:
        console.log('Jugador 3 es el ganador');
        break;
    case jugador1Promedio == jugador2Promedio && jugador1Promedio == jugador3Promedio:
        console.log('Triple Empate');
        break;
    default:
        console.log('Otro resultado');
    
}

console.log(jugador1Promedio);
console.log(jugador2Promedio);
console.log(jugador3Promedio);
