console.log("truthy and falsy values");

// falsy values :----   undefined, null, 0, '', NaN(not a number);

var height;
height = 23;
if(height){
    console.log('variable is defined');
}else{
    console.log('variable has not been defined');
}


// equality operators == and ===
if(height == '23'){
    console.log('== does type coercion')
}

if(height === '23'){  // strict equality operator
}else{
    console.log('=== does not do tyoe coercion')
}