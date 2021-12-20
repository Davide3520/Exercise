class Node {
  constructor(val,) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // we take the current tail and set the next property to a new node.

      this.tail = newNode // we updated the tail to point to the new node
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
