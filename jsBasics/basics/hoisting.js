console.log('Hoisting');

calculateAge(2000);  // hoisting
function calculateAge(year){   // function declarations are always hoisted    but function expression
    console.log(2020 - year);
}
console.log(retirement);
retirement(2000)
var retirement = function(year){
    console.log(65 - (2020 - year));
}

retirement(2000);