console.log(this);
console.log(this.newVarVariable);
console.log(window.newVarVariable);

console.log(third);

console.log('Scope Chain');

// if(true){
//     function display(){
//         console.log('This is display function in if block')
//     }
// }
//
// display();


var a = 'Hello';
console.log(a);
first();

function first(){
    var b = 'hi';
    second();
    function second(){
        var c = 'Hey!';
        // third()
        console.log(a + b + c);
    }
}

function third(){
    var d = 'john';
    console.log(a + b + c + d);
}



let newLetVariable = "this is let variable";
var newVarVariable = "this is var variable";
var newVarVariable2;


console.log(this.newVarVariable);
console.log(window.newVarVariable);


window.newProperty = 123456;

console.log('==========================================================');

var obj = {};
console.log(obj);

obj.newProp = 33;
console.log(obj);