/* First Kata 

numero entre  el 1 y 100. si es divisble por 3, escribir foo. si es por 5 escribir bar. si es por 7 escribir quix. si es por 3 y 5 ej: foobar. por cada 
dígito 3, 5, o 7 añadiremos foo, bar, quix respectivamente y en orden de aparición.*/


const numberDivisible = (num) => {

   /* First step : check is number */
   if (typeof num === "number") {
      
      for( i=1; i<=num; i++ ){

         let res = "";

         if ( i % 3 == 0 ){
   
            res += "Foo";
         
         }
         
         if( i % 5 == 0 ){
               
            res += "Bar";
      
         }
         
         if(i % 7 == 0){
      
            res += "Quix";
      
         }
         

   
         console.log(i, '->', res);
       
      }   


   }else{

      console.log( 'Is not a number!!' );

   }

}

numberDivisible(30);

let num = 73;
let str = num.toString();
let cont = "";


for (let x of str){

   if (x.toString().includes('3') ){

      cont += "tres";
   }
   if (x.toString().includes('5') ){

      cont += "cinco";
   }
   if (x.toString().includes('7') ){

      cont += "siete";
   }
}

console.log(str,cont);