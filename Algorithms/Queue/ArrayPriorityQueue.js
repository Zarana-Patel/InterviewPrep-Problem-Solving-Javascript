/**
 * Created by zaranapatel on 8/28/17.
 */
class PriorityQueue{
    constructor(){
        this.data = [];
        let priority;
    }
    push(element, priority) {
        priority = +priority
        for (var i = 0; i < this.data.length && this.data[i][1] > priority; i++);
        this.data.splice(i, 0, [element, priority])
    }
    pop() {
        return this.data.shift()[0]
    }
    size(){
        return this.data.length
    }

}

var queue = new PriorityQueue()

queue.push('high', 9)
queue.push('low', 1)
queue.push('medium-low', 3)
queue.push('medium', 5)
queue.push('medium-high', 7)

while (queue.size()) {
    console.log(queue.pop())
}