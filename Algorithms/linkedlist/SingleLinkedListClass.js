
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
    prepend(value){
       let nextnode = new Node(value);
        nextnode.next = this.head;
        this.head = nextnode;
        this.length ++;
        return this;
          
    }
    
}

 let newLinkedList = new linkedList(10);
newLinkedList.insert(2,99);
 newLinkedList.append(5);
newLinkedList.append(16);
newLinkedList.prepend(1);
 console.log(newLinkedList);
