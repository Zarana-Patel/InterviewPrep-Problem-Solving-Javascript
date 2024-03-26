
//static variable: are variables which are acceeed through the class itself while instance variables are accessed through an instance of the class.
class Animal{
      static legs = 3;
      name;
      constructor(name){
         this.name = name;
      }
      readName(){
         console.log(this.name);
      }
}
let a1 = new Animal('dog');
console.log(Animal.legs);//legs are static variable is access by classitself
console.log(a1.name); // name can access by instance of the class 