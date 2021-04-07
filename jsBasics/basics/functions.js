console.log('Functions');

display('spartsh');

function display(name){
    console.log('Hi, ' + name);

    // return 5;

    // default return value is undefined if not explicitly mentioned any return
}

display('Spartsh');


console.log(display('newName'))


var fun = function() {
    console.log('Trying to create anonymous function');
    return 3;
}();

console.log(fun);

function test2(fun) {
    fun();
}

test2(function () {
    console.log('Anonymous Function ');
});

(function () {
    console.log('RCB played well Today!');
})();



console.log(isHosited);
var isHosited = true;


var myFunction = function namedFunction(){
    console.log('Named function in an expression');
};

myFunction();
// namedFunction();

function yearsUntilretirement(first, second = true){
    console.log(first + ' ' + second);
}

yearsUntilretirement('hello');

console.log('=======================================');
console.log(newTest);
// newTest();

var newTest = function(){
    console.log('This is new test function');
};


var fun2 = undefined;
fun2();
