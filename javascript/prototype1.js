let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "black adam", "superman"]

let heropower = {
    thor:"hammer",
    spiderman:"slinging",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

myHeros.hitesh()

const User = {
    name:"top name",
    email:"topuser@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvaiable: false
}

const TSAssistant = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport,Teacher)

//Goal:get truelength of string

let yourname = "maithali"

String.prototype.truelength = function(){
   console.log(`${this.name}`); 
   console.log(`true length is ${this.trim().length}`);
}

let myname = "hitesh   "