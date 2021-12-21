/*
Remove duplicates from a single Linked list
*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const removeDuplicates = (linkedList) => {
  let current = linkedList;

  while (current !== null) {
    let nextNode = current.next;
    while (nextNode !== null && current.value === nextNode.value) {
      nextNode = nextNode.next;
    }
    current.next = nextNode;
    current = nextNode;
  }
  return linkedList;
}
