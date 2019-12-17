/* Second Kata */

const arabToRoman = number => {

    let msg = "";

    try {

        if( typeof number == "number" ){

            if( number > 1 && number <= 3999){
                /*my code here*/
                const numArray = {
                    M : "1000",
                    D : "500",
                    C : "100",
                    L : "50",
                    X : "10",
                    V : "5",
                    I : "1",
                };

                let res = [];

                for (var x in numArray) {

                    // console.log(x + ": " + numArray[x])
                    if( number >= numArray[x]){

                        let numberHight = Math.floor(number / numArray[x]);

                        /*aíslo la mayor cantidad entera*/
                        number -= (numberHight * numArray[x]);

                        /*no se repitan 3 o más letras*/
                        if( numberHight <= 3 ){
                            while(numberHight--){

                                /*voy añadiendo las letras*/
                                res.push(x);
                                //console.log(res);
                            }
                        }

                    }else{
                        //console.log('mayor');
                        res.push('');
                    }

                }

                msg = res.join('');
                 console.log( msg );

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

arabToRoman(85);
arabToRoman(780);
arabToRoman(2580);