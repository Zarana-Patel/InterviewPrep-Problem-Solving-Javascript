/**
 * Created by zaranapatel on 8/29/17.
 */
class Linkedlist {
    constructor() {
        this.head = null;
        let length = 0;
    }

    //check empty linked list

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        else {
            return false;
        }
    }

    //size of the linked list

    size() {
        return length;
    }

    //Add node end of the liked list

    append(element) {
        let node = {
            data: element,
            next: null
        }
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    //add node begining of the linked list

    prepand(element) {
        let node = {
            data: element,
            next: this.head
        }
        this.head = node;
        length++;
    }

    //add node by using index in the middle of the linked list

    insertAfter(index, element) {
        let node = {
            data: element,
            next: null
        }
        let current = this.head, prev_node, curr_index = 0;
        if (index > this.size()) {
            return false;
        }
        if (index === 0) {
            node.next = current;
            this.head = node;
        } else {
            while (curr_index < index) {
                curr_index++;
                prev_node = current;
                current = current.next;
            }
            node.next = current;
            prev_node.next = node;
        }
        length++;
    }

    //Remove node by using value

    removeByKey(key) {
        let current = this.head, prev_node = null;
        if (current.data === key && current !== null) {
            this.head = current.next;
            return;
        }
        while (current !== null && current.data !== key) {
            prev_node = current;
            current = current.next;
        }
        if (current === null) {
            return;
        }
        prev_node.next = current.next;
        length--;
    }

    //Remove node by using node position

    removebyPosition(index) {
        let current = this.head, prev_node, curr_index = 0;
        if (index < 0 || index >= this.size()) {
            return null;
        }
        if (index === 0) {
            this.head = current.next;
        } else {
            while (curr_index < index) {
                curr_index++;
                prev_node = current;
                current = current.next;
            }
            prev_node.next = current.next;
        }
        length--;
        return current.element;
    }

    //Find Element by using tortoise and hare alogorithm
    middleElement() {
        let fast = this.head;
        let slow = this.head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(slow.data);
    }
    // Find the linked list has a loop or not using Tortoise and hare algorithm
    findlinkedlisthasloop() {
        let fast = this.head;
        let slow = this.head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        if (slow.data === fast.data) {
            return console.log('linkedlist is in loop');
        }
        else {
            return false;
        }

    }
}


let l1 = new Linkedlist();
l1.append(12);
l1.append(1);
l1.append(3);
l1.insertAfter(2,6);
l1.prepand(13);
console.log(l1);
l1.removeByKey(1);
console.log(l1);