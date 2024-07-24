
//Spread

function sumone(x, y) {
    return x + y;
}

let vari  = [ 9,7,10,11,12,13];
console.log(sumone(...vari));//spread  //16

//Rest

function sum(...args) {
    console.log(args);
    let sum = 0;
    for(const x of args){
        sum = sum + x;
    }
    return sum;
}

console.log(sum(1,2,3,4,5));//[ 1, 2, 3, 4, 5 ]    15

// Try and Catch

try {
    let firstname = "maihali";
    console.log(firstname);
} catch (error) {
    console.log("variable name missing");
    
} finally{
    console.log("I will run");
}