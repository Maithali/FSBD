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


//map
const numbers = [1,2,3,4,6];
const numSqu = numbers.map((num)=> num*num);
console.log(numSqu);


//filter

const count =["India","Brussel","Turkey","Normway","Luxmberg","Ireland","Finland","Germany","England"];
const store = count.filter((val)=> val.includes("r"));
console.log(store);

//Reduce
const num = [1,2,3,4,5,6,7];
const sum = num.reduce((acc,curr)=> acc + curr, 1);
console.log(sum);


//sort
const names = ['anurag','anirudh','hitesh sir','vyom','bishal','mayur','snehal','momin','surya'];
console.log(names.sort());
console.log(names.reverse());


//destructing
const sci = [2.72, 3.14, 9.81, 37,100];
let [e,pi,grav,bodytemp,boiltemp] = sci;
console.log(e,pi,grav,bodytemp,boiltemp);

const arr1 = [1,2,3];
let [var1, , var2] =arr1;
console.log(var1, var2);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let [num1, num2, ...rest] = arr2;
console.log(num1, num2);
console.log(rest);