
class Node{
        constructor(value){
           this.value =value;
           this.next = null;
        }
}
class linkedList{
    constructor(value){
         this.head = {
              value : value,
              next : null
         }
         this.tail = this.head;
         this.length = 1;
    }

     append(value){
          let nextnode = new Node(value);
        this.tail.next = nextnode;
        this.tail = nextnode;
        this.length ++;
        return this;

    }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
    prepend(value){
       let nextnode = new Node(value);
        nextnode.next = this.head;
        this.head = nextnode;
        this.length ++;
        return this;
    }
    insert(index,value){
         if(index >= this.length){
              return this.append(value);       
         }
           let nextNode = new Node(value);
           let leader = this.traverseToNext(index-1);
           let pointer = leader.next;
           leader.next =nextNode;
           nextNode.next = pointer;
           this.length++
      return this.printList();
    }
    traverseToNext(index){
         let counter = 0;
         let currentNode = this.head;
         while(counter !== index){
           currentNode = currentNode.next;
           counter++;           
         }
         return currentNode;
    }  
  remove (index){
     let leader = this.traverseToNext(index-1);
    let unwanterNode = leader.next;
    leader.next = unwanterNode.next;
    this.length--;
    return this;
  }
}
 let newLinkedList = new linkedList(10);
 newLinkedList.append(5);
newLinkedList.append(16);
newLinkedList.insert(2,66);
newLinkedList.prepend(1);
newLinkedList.remove(1);
console.log(newLinkedList);

