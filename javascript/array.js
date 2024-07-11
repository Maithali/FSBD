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
    console.log(arr1.concat(arr2,arr3));
    