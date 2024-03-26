class Person{
    constructor(name,age){
          this.name = name;
          this.age = age;
    }
    printValues(){
          console.log(this.name);
          console.log(this.age);
    }
}
const person = {};
Person.call(person,'z',34);
console.log(person);