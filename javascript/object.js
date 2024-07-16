const object1 = {
    rocket:'🚀',
    home: '🏡',
    plant:'☘'
}
console.log(object1);
//{ rocket: '🚀', home: '🏡', plant: '☘' }


const people ={
    man:'🧔🏻',
    boy:'👦🏻',
    woman:'👩🏻',
    girl:'👧🏻',
}
console.log(people);
// { man: '🧔🏻', boy: '👦🏻', woman: '👩🏻
//', girl: '👧🏻' }

people.boy='👦🏽'
console.log(people);
// { man: '🧔🏻', boy: '👦🏽', woman: '👩🏻
// ', girl: '👧🏻' }


people['family'] = '👨‍👧';
console.log(people);
// {
//   man: '🧔🏻',
//   boy: '👦🏽',
//   woman: '👩🏻',
//   girl: '👧🏻',
//   family: '👨‍👧'
// }



// part 2
const obj2 = new Object() //constructor

obj2.redbook ='📕',
 obj2.blueBook = '📘',
 obj2.myValue = '1 green book 📗'
 console.log(obj2);