console.log('Objects....');


// using object literal
var obj = {
    name: 'Spartsh',
    age: 20,

    display: function () {
        console.log('This is method of obj object');
    },

    members: [
        'Sandeep', 'Tyson <3', 'Parveen', 'Shivam'
    ],

    nestedObj: {
        prop1: 'nested object',
    },

    obj: {"name1": "hi"}
};

console.log(obj);

console.log(obj.age);
console.log(obj.obj);
console.log(obj["display"]);

var x = function(){
    console.log('function');
};

console.log(x);

function display(){
    console.log('This is display function');
}

console.log(display);


obj.newProperty = "can we add it";

console.log(obj);

obj['new Property2'] = "yes we can add it too!";
console.log(obj);

//using new Object syntax

var animal = new Object();
animal.name = "german Shephered";
animal.loyality = 1/0;

console.log(animal);

animal.property = undefined;

console.log(animal);
