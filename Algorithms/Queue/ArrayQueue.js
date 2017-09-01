/**
 * Created by zaranapatel on 6/12/17.
 */
function Queue(){
    this.queue =[];
}
Queue.prototype.unshift = function(element){
    this.queue.push(element);
};
Queue.prototype.shift = function(){
    return this.queue.shift();
}
Queue.prototype.peek = function(){
    console.log(this.queue[this.queue.length-1]);
}
Queue.prototype.length = function(){
    console.log(this.queue.length);
}
Queue.prototype.print = function(){
    console.log(this.queue.join(','));
}
var s1 = new Queue();
s1.unshift(1);

s1.print();
s1.unshift(2);
s1.print();
s1.shift();
s1.print();

s1.peek();

//ECMA 6

/*
 class Queue{
 constructor(){
 this.items = [];
 }

 enqueue(element){
 this.items.unshift(element);
 };

 dequeue(){
 return this.items.shift();
 };

 front(){
 return this.items[0];
 };

 isEmpty(){
 return this.items.length == 0;
 };

 clear(){
 this.items = [];
 };

 size(){
 return this.items.length;
 };

 print(){
 console.log(this.items.toString());
 };
 }
 let queue = new Queue();
 queue.enqueue("John");
 queue.enqueue("Jack");
 queue.print();
 queue.enqueue("Camila");
 queue.print();
 console.log(queue.size()); //outputs 3
 console.log(queue.isEmpty()); //outputs false
 queue.dequeue();
 queue.dequeue();
 queue.print();

    */