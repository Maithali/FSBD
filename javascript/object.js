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
 console.log(power);//{ fly: true, cordinate: 2.8089675238963903 }


 // part 4
 const obj4 =  Object.create({})
 Object.defineProperty(obj4, 'books',{
    get :() => '',
    enumerable: true
 })

    console.log(obj4);
    console.log(obj4.book);
    console.log(Object.getPrototypeOf(obj4));

    for(k in obj4){
    console.log("value is: ", k);
}


//part 5
const obj5 = {
    comics : 'marvel',
    pen: '',
    printComic: function(){
        this.pen += '🖊️🗒️'
        console.log(this);
        return this;
    },
    // printaComic: () => {
    //     // this.pen += '🖊️🗒️'
    //     console.log(this);

    // },
    
}

console.log(obj5.printComic().printComic().printComic());
// console.log(obj5.printaComic());


const objm = {
    foo: 1,
    propertyIsEnumerable(){
        return false;
    },
};

objm.propertyIsEnumerable("foo");
Object.prototype.propertyIsEnumerable.call(objm,"foo");


//deleting a property from an object

const normalObj = {};
const nullProtoObj = Object.create(null);
console.log(`normalObj is: ${normalObj}`);//normalObj is: [object Object]
//console.log(`nullProtoObj is: ${nullProtoObj}`);//throws error: Cannot convert object to primitive value
 alert(normalObj);
 //alert(nullProtoObj);//// throws error: Cannot convert object to primitive value


 //Other methods will fail as well

 normalObj.valueOf();