// function display(){
//     console.log('THis is display function');
// }
//
// console.log(display);
//
// display = 3;
//
// console.log(display);
// console.log(typeof display);
// display();


function test(){
    console.log('This is test function');
    inner();
    return 2;

    function inner(){
        console.log('This is inner function');
    }
}


var obj = {
    name: 'Spartsh',
    name: 3
};


console.log(obj.name);

// test();