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

  set(index, value) { // update a value in a determined position with the given value;
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) { // insert a new node at a specific position we specify.
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      this.push(value)
      return true;
    } else if (index === 0) {
      this.unshift(value)
      return true;
    }

    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let temp = previousNode.next; // placeholder variable. Keepn the connection to next available or it will be destroyed
    previousNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) { //remove a value from a specific index
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) {
      this.pop()
    }
    if (index === 0) {
      this.unshift();
    }

    let foundNode = this.get(index - 1); // retrieve the value from one before the one we want to remove

    let valueToRemove = foundNode.next;
    foundNode.next = valueToRemove.next

    this.length--;
    return valueToRemove
  }
  reverse() { //reverse in place
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}


let list = new SinglyLinkedList();
list.push("HELLO");
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push("TAILLLL");

