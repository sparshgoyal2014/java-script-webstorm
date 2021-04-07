
var windowProp = 'Window property';

var animal = {
    Name: 'Dog',
    legs: 4,
    name2: this,

    display: function () {
        console.log(this.name2);
        console.log(typeof this.name2);
        console.log(this.name2.legs)
        console.log(this.windowProp);
        console.log(this.name2.windowProp)

        this.newProperty = 'new Property in animal object';
    }
};

console.log(animal);
// console.log(animal.name2);
animal.display();
console.log(animal)