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