
console.log('Arrays');

var arr = ['hello', 2, true];

console.log(typeof arr);

var names = ['John', 'mark', 'jane'];

var years = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

for(let x=0; x<years.length; x++){
    console.log(years[x]);
}

console.log(arr);
console.log(years);
console.log(arr[13]);
arr[13] = 44;
console.log(arr);

var john = ['john', 'Smith', 2000, 'Teacher', false];
john.push('fav Color: blue');
john.unshift(1,2,3);
console.log(john)
john.shift();
john.pop();
console.log(john);

console.log(john.push(true));
console.log(john.length);

console.log(john.indexOf('helloWorld'));
