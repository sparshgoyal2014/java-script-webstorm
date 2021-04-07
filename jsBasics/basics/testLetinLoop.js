//
// for(let i=0; i<5; i++){
//     function test() {
//         console.log('test function called :'  + i + 'th time');
//     }
//
//     function displayi(){
//         console.log(i);
//     }
//
//     // test();
//     displayi();
// }
// console.log('===================================');
// // console.log(i);
// // test();
//
// displayi();


//
// console.log(test2)
// if(true){
//     let x = 3;
//
//     function test2(){
//         console.log(x);
//     }
// }
//
// test2()

var funcs = [];
// let's create 3 functions
for (let i = 0; i < 3; i++) {
    // and store them in funcs
    funcs[i] = function() {
        // each should log its value.
        console.log("My value: " + i);
    };
}
for (var j = 0; j < 3; j++) {
    // and now let's run each one to see
    funcs[j]();
}


if(false){
    var name = function(){
        console.log('Spartsh Goyal')
    }
}


name()