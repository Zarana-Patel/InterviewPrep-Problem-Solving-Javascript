class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const node = new Node(value);
    if(this.length === 0){
        this.top = node;
        this.bottom = node;
    }
    else{
       let pointer = this.top;
       this.top = node;
       this.top.next = pointer;
    }
    this.length++;
    return this;
  }
  pop(){
      if(!this.top){
         return null;
      }
      if(this.top === this.bottom){
            this.bottom = null;
      }
      else{
          let pointer = this.top;
           this.top = this.top.next;
          
          this.length--;
           return this;
      }
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push('google');
myStack.push('Udemy');
console.log(myStack.push('Youtube'));

console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.peek());
