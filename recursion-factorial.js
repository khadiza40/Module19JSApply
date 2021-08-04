//recursion k stopping function bole
function factorial(n){
    if(n==1){
        return 1;
    }
     return n* factorial(n-1);
}
const getFactorial = factorial(7);
console.log(getFactorial);