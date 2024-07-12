/*
    => Data Types
    =>Variables and typeof
    => Date
    => Loops
    => Conditions
    => OP
    => Indexing
    => Math
    => Object and Array
    */

    let namess = new Array('Name 1','Name 2');
    console.log(namess);//[ 'Name 1', 'Name 2' ]

    // Push => Insert New Values inside the Array
    namess.push("Maithali");
    console.log(namess);//[ 'Name 1', 'Name 2', 'Maithali' ]

    //Slice
    let names = ['Hitesh sir','Anurag','Surya','Anirudh','Bipul'];
    console.log(names.slice(1,6));//[ 'Anurag', 'Surya', 'Anirudh', 'Bipul' ]
    console.log(names);//[ 'Hitesh sir', 'Anurag', 'Surya', 'Anirudh', 'Bipul' ]
    console.log(names.slice(2,3));//[ 'Surya' ]
    console.log(names.slice(3,6));//[ 'Anirudh', 'Bipul' ]
    console.log(names.slice(1,4));//[ 'Anurag', 'Surya', 'Anirudh' ]
    console.log(names.slice(0,4));//[ 'Hitesh sir', 'Anurag', 'Surya', 'Anirudh' ]
    console.log(names.slice(0,2));//[ 'Hitesh sir', 'Anurag' ]

    //Splice
    let fruit = ['Apple','Big Apple','Chota Apple','Double Apple']
    fruit.splice(2,1, 'Kharab apple', "Accha apple", "Red Apple");
    console.log(fruit); 
 //   [
//   'Apple',
//   'Big Apple',
//   'Kharab apple',
//   'Accha apple',
//   'Red Apple',
//   'Double Apple'
// ]

    let myfamily = ['Granpda','Grandma','Mom','Dad'];
    myfamily.splice(2,2, 'uncle','aunt');
    console.log(myfamily);//[ 'Granpda', 'Grandma', 'uncle', 'aunt' ]

    //Concatenation
    let arr1 = [1,2,3,4];
    let arr2 = [4,5,6,7];
    let arr3 = [7,8,9,9,9,9,9,9,9,9,9];
    console.log(arr1.concat(arr2));
//     [
//   1, 2, 3, 4,
//   4, 5, 6, 7
// ]

    console.log(arr1.concat(arr2,arr3));
//     [
//   1, 2, 3, 4, 4, 5, 6,
//   7, 7, 8, 9, 9, 9, 9,
//   9, 9, 9, 9, 9
// ]
    
//fill
let arr4 = [1,2,3,4,5,6,7,8,9];
arr4.fill('maithali',2,4);
console.log(arr4);//[ 1, 2, 'maithali', 'maithali', 5, 6, 7, 8, 9 ]
arr4.fill('maithali',2,3);
console.log(arr4);//[ 1, 2, 'maithali', 'maithali', 5, 6, 7, 8, 9 ]
arr4.fill('maithali',1,8);
console.log(arr4);
// [1,          'maithali',
//   'maithali', 'maithali',
//   'maithali', 'maithali',
//   'maithali', 'maithali',
//   9
// ]
arr4.fill('blockchain',0,9);
console.log(arr4);
// [
//   'blockchain',
//   'blockchain',
//   'blockchain',
//   'blockchain',
//   'blockchain',
//   'blockchain',
//   'blockchain',
//   'blockchain',
//   'blockchain'
// ]

//include
let includeNumber = [1,2,3,4,5,6,7,8,9,10];
console.log(includeNumber.includes(10,2));//true
console.log(includeNumber.includes(5,5));//false
console.log(includeNumber.includes(2,2));//false
console.log(includeNumber.includes(7,1));//true
console.log(includeNumber.includes(98,5));//false
console.log(includeNumber.includes(6,2));//true

//indexof
let num =[1,2,3,4,'maithali',5,6,7,8,'maithali',9,10,11];
console.log(num.indexOf('maithali'));//4

//isArray()
let numArr = [11,1,12,13,14,15,1,6,16,17,18];
console.log(Array.isArray(numArr));//true
let trythis= 'maithali';
console.log(Array.isArray(trythis));//false

//Join
let Arr1 = [1,12,,4,5,6,7];
let var1 = Arr1.join('16');
console.log(var1);//1161216164165166167
console.log(typeof var1);//string

//last indexOf
let num2 =[1,2,3,'maithali',5,5,6,7,8,'maithali',9,10];
console.log(num2.indexOf('maithali'));//3
console.log(num2.indexOf(10));//11

//Map
let maths =[1,4,9,16,25];
console.log(maths.map(Math.sqrt));//[ 1, 2, 3, 4, 5 ]
console.log(maths.map(Math.cbrt));

// [
//   1,
//   1.5874010519681996,
//   2.080083823051904,
//   2.5198420997897464,
//   2.924017738212866
// ]

//Pop
let mathvalue = [1,4,5,16,25];
console.log(mathvalue.pop());//25
console.log(mathvalue);//[ 1, 4, 5, 16 ]


//reverse
let revMath = [11,45,98,0,23,45];
console.log(revMath.reverse());//[ 45, 23, 0, 98, 45, 11 ]

//Shift()
let mathsShift = ['maithali',1,4,9,16,25];
console.log(mathsShift.shift());//maithali
let noshift = [1,4,5,6,12];
console.log(noshift.shift());//1

//Sort
let SortNames = ['hitesh sir','mithlai','anurag sir','navin sir','sanjeevan sir'];
 console.log(SortNames.sort());
// [ 'anurag sir', 'hitesh sir', 'mithlai', 'navin sir', 'sanjeevan sir' ]
console.log(SortNames.reverse(SortNames.sort()));
//[ 'sanjeevan sir', 'navin sir', 'mithlai', 
//'hitesh sir', 'anurag sir' ]

//unshift
let fruits = ['apple','berries','custurd apple','dragon fruit','Emu apple','fig'];
console.log(fruits.unshift('strawberry 1', 'pineapple 2'));//8
console.log(fruits);
// [
//   'strawberry 1',
//   'pineapple 2',
//   'apple',
//   'berries',
//   'custurd apple',
//   'dragon fruit',
//   'Emu apple',
//   'fig'
// ]

//Converting to Array
let nav='maithali';
let arrayM = nav.split(' ');
console.log(arrayM);//[ 'maithali' ]

//for of
let fruitsForOf = ['apple','berries','custurd apple','dragon fruit','Emu apple','fig'];
let UpperFruit = []; // empty Array
for ( let i of fruitsForOf){
    UpperFruit.push(i.toLocaleLowerCase())
}
console.log(UpperFruit);