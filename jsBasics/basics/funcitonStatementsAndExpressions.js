console.log('funciton statements and expressions');

var fun = function () {
    console.log('This is function expression');
};

console.log(typeof fun);
console.log(fun.length);

var whatYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches hot to code';  // no need of break;

        case 'driver':

            return firstName + ' drives the car';

        case 'designer':
            return firstName + ' designes the clothes!';

        default:
            return firstName + ' not clear what he does!';
    }
};

console.log(whatYouDo('teacher', 'john'));
