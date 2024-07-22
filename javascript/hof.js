//HOF => Higher Order Function
// CALLBACK
// function is calling a function


function a() {
    console.log("I was called by a function");
}

function b() {
   a(); 
}

b();

// mini Program
const callback = (n) =>{
    return n ** 2;
};

function cube(callback, n) {
    return callback(n) * n;
    
}
console.log(cube(callback,3));

//For Each
const arr = ['hey','hi','hello','hola','namaste'];
arr.forEach((greet) => {
    console.log(greet);
});
arr.forEach(myfunc);
function myfunc(val) {
    console.log(val);
}


//SetTimeout
setTimeout(()=>{
    console.log("hello maithali");
},1000);

//setInterval
setInterval(()=>{
    console.log("keep it up");
},5000);