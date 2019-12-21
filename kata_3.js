/* Third Kata */

/*1. el padre reparte las cartas, controla que no haya repetidas. Los hijos recogen las cartas y las muestran. La mesa
* valorará quién gana.*/



class Croupier {

    constructor(){

        /* datos necesarios para construir una mano: */
        this.hand = [];
        this.values = [ '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A' ];
        this.suit = ['S', 'H', 'C', 'D'];

        /* para construir un resultado: */
        this.ranks = [
            'Straight flush',
            'Four of a kind',
            'Full house',
            'Flush',
            'Straight',
            'Three of a kind',
            'Two pairs',
            'Pair',
            'High card'
        ];

    }

    /* barajo y reparto cartas */
    shuffle(){

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


    /* métodos auxiliares */

    resultByHand(array){

        return array.sort();
    }


    getResuts(arr){

        return helper.getOccurrence(arr);

    }
}

class Player1 extends Croupier {


    setHand(){

        super.shuffle();
        return this.hand;
    }

}

class Player2 extends Croupier {

    setHand(){

        super.shuffle();
        return this.hand;
    }
}


class Helper extends Croupier{

    getNumSuit(array){
        let num = [];

        for (let n of array){

            num.push(n[0]);
        }

        return num;
    }

    getPaloSuit(array){
        let palo = [];

        for (let n of array){

            palo.push(n[1]);
        }

        return palo;
    }

    getOccurrence(array) {

        let count = [];
        let legend = "";
        let pairs = 0, four = 0, three = 0;

        //let t = "";
        console.log(array);

        array.forEach(function(x) { count[x] = (count[x] || 0)+1; });

        for( let repeat of count ){

            if (repeat >= 4) four ++;
            if (repeat >= 2) pairs ++;
            if (repeat >= 3) three ++;
        }

        if(four > 0) {
            legend = "Four of a kind";
        } else if (three === 1 && pairs > 1) {
            legend =  "Full House";
        } else if ( three === 1) {
            legend =  "Three of a kind";
        } else if (pairs === 2) {
            legend =  "Two pairs";
        } else if (pairs === 1) {
            legend =  "Pairs";
        } else {
            legend = false;
        }

        return legend ;
    }


    associateValuetoLetter(letter){
        switch (letter) {
            case "T": return 10;
            case "J": return 11;
            case "Q": return 12;
            case "K": return 13;
            case "A": return 14;
            default:
                return parseInt(letra);
        }
    }

}

const croupier = new Croupier();
const player1 = new Player1();
const player2 = new Player2();
const helper = new Helper();


const hand1 = player1.setHand();
const hand2 = player2.setHand();

const res1 = croupier.resultByHand(hand1);
const num1 = helper.getNumSuit(hand1);
const num2 = helper.getNumSuit(hand2);
const palo2 = helper.getPaloSuit(hand1);





console.log('Jugador 1',hand1);
console.log('Jugador 2',hand2);
console.log('-----------');
//console.log('Las cartas del player 1 son:',res1);
console.log('Los números del player 1 son:',num1);
console.log('Las palos del player 1 son:',palo2);
console.log('-----------');
//console.log(rep);

//croupier.getResuts(num1);
console.log(croupier.getResuts(num1));
console.log(croupier.getResuts(num2));

