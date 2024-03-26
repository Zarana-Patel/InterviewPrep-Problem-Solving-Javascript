class Animal{
     constructor(type){
          this.type = type;
     }
     display(){
         console.log(`this Animal type is $this.type`);
     }
}
class dog extends Animal{
     constructor(type,voice){
        super(type);
        this.voice = voice;
         
     }
     display(){
         
         console.log(this.type);
         console.log(this.voice);
     }
}
let a1= new dog('pet','bark');
a1.display();