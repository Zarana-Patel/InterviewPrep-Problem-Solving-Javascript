class MyClass{
      #privateMethod(){
          console.log('this is my private method');

      }
      publicMethod(){
        this.#privateMethod();
         console.log('this is my public method');
      }
}
const m1 = new MyClass();

m1.publicMethod();
