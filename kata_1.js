/* First Kata */


const numberDivisible = (number) => {

   /* First step : check is number */
   if (typeof number === "number") {


      /* Second step : iterate number by number params*/
      for(let i=1; i<=number; i++ ){

         let res = "";

         /* Check number if divisible by 3, 5 or 7*/
         if ( i % 3 == 0 ){
   
            res += "Foo";
         
         }
         
         if( i % 5 == 0 ){
               
            res += "Bar";
      
         }
         
         if(i % 7 == 0){
      
            res += "Quix";
      
         }


         /* Third step: preparer parameter for iterate him and check-it if contains 3, 5 or 7 */
         let prep = i.toString();
         let cont = "";

         for (let x of prep) {

            if (x.toString().includes('3')) {

               cont += "Foo";
            }
            if (x.toString().includes('5')) {

               cont += "Bar";
            }
            if (x.toString().includes('7')) {

               cont += "Quix";
            }


         }

         /* Four step: show result */
         console.log(i,'->',res,cont);
       
      }


   }else{

      console.log( 'Please, input a type number' );

   }

};


numberDivisible(100);
//numberDivisible(45);
//numberDivisible(2500);

/*Show error if param is string*/
//numberDivisible("hola");