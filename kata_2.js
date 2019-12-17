/* Second Kata */

const arabToRoman = number => {

    let msg = "";

    try {

        if( typeof number == "number" ){

        msg = 'Number Here!!!';
        console.log( 'MSG: ' + msg );

        }else{
            throw "Error";
        };


    } catch( err ) {

        if( err == 'Error' ) {
        
        msg = 'Introduce a number!!!';
        console.log( 'MSG: ' + msg);

        }
       
    } 
}

arabToRoman( 12345 );