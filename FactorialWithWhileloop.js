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
