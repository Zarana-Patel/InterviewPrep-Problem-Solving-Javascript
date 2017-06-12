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