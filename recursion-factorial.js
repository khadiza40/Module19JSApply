//recursion k stopping function bole
function factorial(n){
    if(n==1){
        return 1;
    }
     return n* factorial(n-1);
}
const number1 = 4;
const number2 = 6;
const number3 = 8;
const number4 = 10;
console.log("4! factorial is  ",factorial(number1),"\n");
console.log("6! factorial is  ",factorial(number2) ,"\n");
console.log("8! factorial is  ",factorial(number3),"\n");
console.log("10! factorial is  ",factorial(number4),"\n");