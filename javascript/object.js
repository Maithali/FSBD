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
const book = new Object() //constructor

book.redbook ='📕',
 book.blueBook = '📘',
 book.myValue = '1 green book 📗'
 console.log(book);

 // part 3
 const power= {
    fly : true,
    cordinate : Math.random() + 2
 }

 const obj3 = Object.create(power)