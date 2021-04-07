var x = 2;
var y = 2;

if(x === y){
    console.log('yes')
    console.log('compared using === operator');
}



if(x == y){
    console.log('yes')
    console.log('compared using == operator');
}


var obj1 = {};
var obj2 = {};

if(obj1 === obj2){
    console.log('yes');
    console.log('Compared using === operator')
}

if(obj1 == obj2){
    console.log('yes')
    console.log('compared using == operator');
}

var obj3 = obj1;


if(obj1 === obj3){
    console.log('yes');
    console.log('Compared using === operator')
}

if(obj1 == obj3){
    console.log('yes')
    console.log('compared using == operator');
}


var str = new String('hello');

console.log(typeof str);
console.log(typeof 'hello');

if(str == 'hello'){
    console.log('yes, these two strings are equal');
    console.log('compared using === operator')
}

