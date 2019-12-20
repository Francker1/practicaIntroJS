/* Third Kata */

/*1. el padre reparte las cartas, controla que no haya repetidas. Los hijos recogen las cartas y las muestran. La mesa
* valorará quién gana.*/



class Croupier {


    constructor(){

        /* datos necesarios para construir una mano: */
        this.hand = [];
        this.values = [ '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A' ];
        this.suit = ['S', 'H', 'C', 'D'];

    }

    Shuffle(){

        /*máx 5 combinaciones por mano*/
        for ( this.x=0; this.x < 5; this.x++){

            /* obtengo los valores de cada array de datos aleatoriamente*/
            this.ramdomValues = this.values[Math.floor(Math.random()*this.values.length)];
            this.ramdomSuit = this.suit[Math.floor(Math.random()*this.suit.length)];

            /*con esta función le digo que en la primera posición libre que encuentre, 'concatene' palo y valor en la
            * mano*/
           this.hand.splice(1,0,this.ramdomValues + this.ramdomSuit);


        }

        return this.hand;
    }

}

class Player1 extends Croupier {

    getHand(){

        super.Shuffle();
        return this.hand;
    }
}

class Player2 extends Croupier {

    getHand(){

        super.Shuffle();
        return this.hand;
    }
}


const player1 = new Player1();
const player2 = new Player2();

const hand1 = player1.getHand();
const hand2 = player2.getHand();

console.log('Jugador 1',hand1);
console.log('Jugador 2',hand2);