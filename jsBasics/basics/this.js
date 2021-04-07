console.log('this keyword');

console.log(this);

calcAge(2000);
function calcAge(year){
    console.log(2020 - year);
    console.log(this);
}


var john = {
    name: "john",
    birthYear: 2000,

    calcAge: function () {
        console.log(this);
        console.log(this.birthYear);
        console.log('==========================')
        calcAge(1990);

        console.log('==========================')

        function inner(){
            console.log(this);
        }

        inner();

    }
};

john.calcAge();

var mike = {
    name: "Mike",
    birthYear: 1990,
};

mike.calcAge = john.calcAge;
console.log('*****************************************');
mike.calcAge();






