/* Different ways to create Object in JS */

const person = {
    id:1,
    name:'Zarana'
};

console.log(person);

const newObj = Object.create(person);
console.log(newObj);
console.log(newObj.id);
newObj.id = 2;

console.log(newObj.name);
console.log(newObj.id);
console.log(newObj);


//using class and constructor es6

class vehicle {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
let p1  = new vehicle("car",1);
console.log(p1);
/*
function vehicle(name,id){
     this.name = name;
     this.id = id;
}
let v1 = new vehicle ("cycle",1);
console.log(v1);

*/