
function isEven (number){
    if(number %2 ==0){
        return true;
    }
    return false;

}
const mynum = 1234;
console.log( "If true  then even : ", isEven(mynum) ,"\n");


function isOdd (number){
    if(number %2 !=0){
        return true;
    }
    return false;

}
const mynum2 = 1233;
console.log( "If true  then  odd : ", isOdd(mynum2));