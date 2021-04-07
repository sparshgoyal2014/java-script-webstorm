console.log('Object methods');

var obj = {
    firstName: 'john',
    lastNaem: 'Smith',
    birthYear: 2000,

    // age: 2020 - this.birthYear,

    property: (undefined - 4),

    calculateAge: function(presentYear){  // dunction expression
        this.age = presentYear - this.birthYear;
        // return presentYear - this.birthYear;

    }
};
console.log(obj.calculateAge(2020));
console.log(obj);

console.log(this);

this.number = 4;
console.log('==============================')
console.log(number);
console.log('==============================')

console.log(this.name = null);
console.log(name);
console.log(this.name);

