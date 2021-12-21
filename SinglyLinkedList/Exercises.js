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

const removeKthNodeFromEnd = (head, k) => {
  let counter = 1;
  let first = head;
  let second = head;

  while (counter <= k) {
    second = second.next;
    counter += 1;
  }
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
}
