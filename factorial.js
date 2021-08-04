


//usng for loop
console.log("\n By for  loop \n"); 

function findFactorial(num){
      let factorial =1;
      for (let i =1; i <= num; i++){
          factorial =  factorial*i;

           }
       return factorial;
}

let number1 =3;
let number2 =5;


console.log("Factorial of 3! is :",findFactorial(number1) ,"\n");
console.log("Factorial of 5! is :",findFactorial(number2) ,"\n");



//usng while loop 
console.log("\n By while loop \n");
function findFactorialw(num){
      let factorial =1;
      let i =1; 
      while(i <= num ){
          factorial =  factorial*i;
          i++
        }
      
       return factorial;
}


let number3 =7;
let number4 =9;


console.log("Factorial of 7! is :",findFactorialw(number3) ,"\n");
console.log("Factorial of 9! is :",findFactorialw(number4) ,"\n");
