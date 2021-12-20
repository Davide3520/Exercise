class Node {
  constructor(val) {
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

  push(val) { // insert value at the end
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

  pop() { // remove last value
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() { // remove the current head
    if (!this.head) return undefined;
    let currentHead = this.head; // pointing to head
    this.head = currentHead.next; // the new head is the next value
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) { // add a value beginning
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // pointing new node to the old head
      this.head = newNode // update the head
    }
    this.length++
    return this;
  }

  get(index) { // get retrieve a node by it's position in the Linked List. not an index but it's a count.
    if (index < 0 || index >= this.length) {
      return null;
    }

    let countPosition = 0;
    let current = this.head;

    while (countPosition !== index) {
      current = current.next;
      countPosition++;
    }
    return current;
  }

  set(value ,position) { // update a value in a determined position with the given value;
    let foundNode = this.get(position);

    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }
}


let list = new SinglyLinkedList();
list.push("HELLO");
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

