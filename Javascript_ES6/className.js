class Person{
       constructor(name,age){
        this.name = name;
        this.age =age;
       }
       toString(){
        return this.constructor.name;
       }
      
}
const p1 = new Person('z',34);
console.log(p1.toString());