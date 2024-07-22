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