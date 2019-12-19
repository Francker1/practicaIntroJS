/* Second Kata */

const numRomanFin = num => {

    let numToStr;
    let numFindLast;
    let resultLast = "";
    
    numToStr = num.toString();
    numFindLast = numToStr.charAt(numToStr.length-1);

    switch (numFindLast) {
    
        case '4': resultLast = 'IV'; break;
        case '9': resultLast = 'IX'; break;
        default:  resultLast = '';
    } 

    return resultLast;
};

const arabToRoman = number => {

    let msg = "";

    /*creo array vacío donde iré metiendo todas las letras del objeto*/
    let res = [];

    /* parámetro que se va a pasar para encontrar el la última cifra del num a pasar a romano*/
    let numberToFindlast = number;

    try {

        if( typeof number == "number" ){

            if( number >= 1 && number <= 3999){
                
                /*my code here*/
                const numArray = {
                    "M" : 1000,
                    "D" : 500,
                    "C" : 100,
                    "L" : 50,
                    "X" : 10,
                    "V" : 5,
                    "I" : 1,
                };
              
                for (var x in numArray) {
                    
                    /* recorro el objeto para obtener prop y val*/
                    if( number >= numArray[x]){
                        
                        let numberHight = Math.floor(number / numArray[x]);

                        /*aíslo la mayor cantidad entera*/
                        number -= (numberHight * numArray[x]);
                       
                        /*no se repitan 3 o más letras*/
                        if( numberHight <= 3 ){
                            while(numberHight--){
                                /*voy añadiendo las letras, hasta que numHight sea 0*/
                                res.push(x);
                            }
                        }else {
                            /**si es 4 o 9 (letras que no se deben repetir más de 3 veces como IIII o VIIII) */

                            /* quito última letra del array (V) y reemplazo*/
                            res.pop();

                            insert = numRomanFin(numberToFindlast); 
                            res.push(insert);
                        }
                    }else{
                        /*si no se cumple, cargo en el array un elemento vacío para no hacer nada con él*/
                        res.push('');
                    }

                }

                /*uno todo el array resultante*/
                msg = res.join('');

            }else{
                throw "error2";
            }

        }else{
            throw "error";
        }

    } catch( err ) {

        if( err == "error" ) { msg = "Introduce a number!!!"; }
        if( err == "error2" ) { msg = "Your number must be mayor than 1 and minor than 3999"; }
       
    }finally{

        return msg;
    }
};

// console.log(arabToRoman("85"));
// console.log(arabToRoman(4100));
// console.log(arabToRoman(2586));
// console.log(arabToRoman(38));
// console.log(arabToRoman(859));
// console.log(arabToRoman(10));
// console.log(arabToRoman("say hi!!"));

//------------------------------------------------------------ 2ª parte

const romanToArab = roman => {

    let index = "";
    let result = 0;

    const romanArray = [ "M", "D", "C", "L", "X", "V", "I" ];
    const numSameArray = [1000, 500, 100, 50, 10, 5, 1];

    /* primero recorro el array de letras para obtener indice y correspondiente*/

    for( let dig in romanArray ){

        /*busco correspondencia en array según parámetro, si no la encientro, -1*/
        index = roman.indexOf(romanArray[dig]);
        console.log(index);

        /*encontrando todas las apariciones del cada valor del parámetro en el array*/
        while(index != -1){

            /*voy quitando letra por letra para acumular su valor numérico, que se irá sumando*/
            roman = roman.replace(romanArray[dig], "");

            /*reasigno index hasta que deje de encontrar resultados*/
            index = roman.indexOf(romanArray[dig]);

            /*voy sumando su correspondiente valor segun indice (letra)*/
            result += numSameArray[dig];
        }

    }

    /*comprobando que sea menor de 3999*/
    if( result > 3999){
        return "number minor than 3999 please!";
    }else{
        return result;
    }


};

// console.log(romanToArab("MMVI"));
// console.log(romanToArab("MMMMDXV"));
// console.log(romanToArab("DCCCLIX"));

//------------------------------------------------------------ 3ª parte
const validateRoman = str => {

    /* primero convierto string a mayús*/
    str = str.toUpperCase();

    const chain = ["M","D","C","L","X","V","I"];
    const errors = ['DM', 'LC', 'LD', 'LM', 'VX', 'VL', 'VC', 'VD', 'VM'];

    let resp = "";
    let ans = "";
    let occurs = "";

    /* antes de nada compruebo que no existan caracteres que puedan dar error*/
    for( let u of errors){

        if( str.includes(u) ){
            resp = false;
            break;

        /* si es ok y no hay caracteres 'prohibidos', analizo letra por letra*/
        }else{

            for( let i of str){

                /* primero compruebo que el parámetro que se introduce pertenece a un número romano */
                ans = chain.includes(i);

                if ( ans === false){

                    /* si se encuentra con una primera respuesta falsa, dejo de ejecutar y devuelvo error*/
                    resp = false;
                    break;

                }else{

                    /* my code here*/
                    /*para comprobar qué letras se van a validar según las reglas*/
                    switch(i){

                        case 'M' :
                        case 'C' :
                        case 'X' :
                        case 'I' :

                            occurs = str.split(i).length-1;
                            resp = occurs > 3 ? false : true;
                            /*se podría simplificar : resp = occurs <= 3; pero la lectura se hace más compleja*/

                            break;

                        case 'V' :
                        case 'L' :
                        case 'D' :

                            occurs = str.split(i).length-1;
                            resp = occurs > 1 ? false : true;
                            /*se podría simplificar : resp = occurs <= 1; pero la lectura se hace más compleja*/

                            break;

                    }
                }
            }
        }
    }
    
    return resp;

};


 console.log(validateRoman("MMVI"));
 console.log(validateRoman("LCVXDM"));
 console.log(validateRoman("MXXXX"));
 console.log(validateRoman("L"));
 console.log(validateRoman("LVV"));
 console.log(validateRoman("MjXI"));
 console.log(validateRoman("125"));
