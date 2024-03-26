
let person = {
     name:'zarana',
  age:34,
  greet:function(){
    console.log(this.name);
  }
}
let {greet} = person;
greet.bind(person)();

const {name,age,...newObj}={...person,city:'san jose'};
console.log(person);
const updatedUser = {...person,city:"san jose"};

// const {name,age,city}=updatedUser;
// console.log(updatedUser);

/* assign one object values to another one using destructuring the object 

const person = {
    fname:'zara',
    age:30,
    
};

const human ={
     name:"",
     test:"sdfdsfds"
}

const {fname:testname} =person;
human.name = testname;
console.log(human)

*/