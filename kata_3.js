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


    /* Juguemos! */
    playPoker(){

         this.player1 = hand1;
         this.player2 = hand2;

         //this.p1Result = this.ranks.indexOf(helper.getResults(this.player1));
         this.p1Result = this.ranks.indexOf(helper.getResults(this.player1));
         this.p2Result = this.ranks.indexOf(helper.getResults(this.player2));

        console.log('empezaremos a jugar pronto');

        console.log(this.p1Result);
        console.log(this.p2Result);



    }

}

class Player1 extends Croupier {

    setHand(){
        super.shuffle().sort();
        return this.hand;
    }
}

class Player2 extends Croupier {

    setHand(){
        super.shuffle().sort();
        return this.hand;
    }
}

class Helper extends Croupier {

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

    /* asociar valores a letras para poder compararlas correctamente */
    associateValueToLetter(array){

        let values = array.map(function(x) {

            switch(x){
                case 'T': x = 10; break;
                case 'J': x = 11; break;
                case 'Q': x = 12; break;
                case 'K': x = 13; break;
                case 'A': x = 14; break;
            }

            return x;
        });

        /* devuelvo el nuevo array pero ordenado */
        return values.sort(function(a, b){return a - b});
    }

    /*repeticiones*/
    getOccurrence(array) {

        let count = [];
        let legend = "";
        let pairs = 0, four = 0, three = 0;

        array = helper.getNumSuit(array);

        /* si en el array de números hay letras les asigno valor: */
        let doubles = helper.associateValueToLetter(array);

        doubles.forEach(function(x) { count[x] = (count[x] || 0)+1; });

        for( let repeat of count ){

            if (repeat >= 4) four ++;
            if (repeat >= 2) pairs ++;
            if (repeat >= 3) three ++;
        }

        if(four > 0) {
            legend = this.ranks[1];
        } else if (three === 1 && pairs > 1) {
            legend =  this.ranks[2];
        } else if ( three === 1) {
            legend =  this.ranks[5];
        } else if (pairs === 2) {
            legend =  this.ranks[6];
        } else if (pairs === 1) {
            legend =  this.ranks[7];
        } else {
            legend = false;
        }

        return legend ;

    }

    /* números consecutivos */
    getConsecNums(array){

        array = helper.getNumSuit(array);

        let doubles = helper.associateValueToLetter(array);
        let consecutive = true;

        /*compruebo si hay números consecutivos*/
        for (let i = 1; i < doubles.length; i++) {
            if (doubles[i - 1] != doubles[i] - 1) {
                consecutive = false;
            }
        }

        return consecutive;
    }

    /* si tiene el mismo palo */
    getSameSuits(array){

        array = helper.getPaloSuit(array);

        const suit = array.shift();
        let count = 0;


        /* recorro cada elemento para comprobar si es el mismo del que he ido quitando al array de palos */
        array.map(ele => {
            if (ele === suit) {
                count++;
            }
        });

        return count === 4 ? true : false ;

    }

    /* carta más alta */
    getHightCard(array){

        array = helper.getNumSuit(array);
        let highIndex = 0;

        array.map(ele => {
            if (this.values.indexOf(ele) > highIndex) {
                highIndex = this.values.indexOf(ele);
            }
        });

       return this.values[highIndex];

    }


    getResults(array){

        if(helper.getConsecNums(array) && helper.getSameSuits(array)){
            return this.ranks[0];
        }
    }

}

/* instancio los objetos */
const croupier = new Croupier();
const player1 = new Player1();
const player2 = new Player2();
const helper = new Helper();


/* seteo manos y las ordeno */

//const hand1 = player1.setHand();
//const hand2 = player2.setHand();

/*para testing:*/
const hand1 =  ['4C', '4C', '5H', '6C', 'TC'];
const hand2 = ['3C', 'KC', '5C', '6D', '7C'];


console.log(hand1);

const repeats1 = helper.getOccurrence(hand1);
const sameNums1 = helper.getConsecNums(hand1);
const sameSuits1 = helper.getSameSuits(hand1);
const hightCard1 = helper.getHightCard(hand1);


const repeats2 = helper.getOccurrence(hand2);
const sameNums2 = helper.getConsecNums(hand2);
const sameSuits2 = helper.getSameSuits(hand2);
const hightCard2 = helper.getHightCard(hand2);


console.log('-----------');
console.log('Jugador 1',hand1, repeats1, sameNums1, sameSuits1, hightCard1);
console.log('-----------');
console.log('Jugador 2',hand2, repeats2, sameNums2, sameSuits2, hightCard2);
console.log('-----------');


croupier.playPoker();