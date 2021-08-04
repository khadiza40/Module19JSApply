function checkLeapYear(yr){
    if(((yr%4==0) && (yr%100!=0)) ||(yr%400==0)){
        return true;
    }
    return false;
}

function leapYear(value){
    if(checkLeapYear(value) == true){
        console.log("\n This is a Leapyear! \n");
    }
    else 
    console.log("Not a Leapyear! \n");
}
let year1 = 2000;
let year2= 2100;
let year3 = 2004;
let year4 = 2010;

leapYear(year1);
leapYear(year2);
leapYear(year3);
leapYear(year4);


