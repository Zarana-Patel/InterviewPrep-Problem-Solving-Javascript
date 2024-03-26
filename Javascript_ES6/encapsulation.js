class Person{
     constructor(name,age){
            this.name = name;
            this.age = age;
     }
     getName(){
        console.log(this.name);
     }
     setName(name){
         this.name = name;
     }
}

let p1 = new Person('z',35);
p1.getName();