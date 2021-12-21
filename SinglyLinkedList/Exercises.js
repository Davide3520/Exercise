
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
Remove duplicates from a single Linked list
ex: 1-1-2-3-3-4
ex: 1-2-3-4
*/
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

/*
Remove the kth node from the end;
example:
let head = 1-2-3-4-5-6-7;
removeKthNode(head, 3)
result: 1-2-3-4-6-7
*/

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

/*
Sum of Linked list return a new linked list.

linkedListOne = 2-4-7-1
linkedListTwo = 9-4-5

result = 1-9-2-2 because: 1742 + 549 = 1922
*/
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const newLinkedList = new LinkedList(0);
   let current = newLinkedList;
   let carry = 0;

   let nodeOne = linkedListOne;
   let nodeTwo = linkedListTwo;

   while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
     const valueOne = nodeOne !== null ? nodeOne.value : 0;
     const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;

     const sumOfNodeValues = valueOne + valueTwo + carry;
     const newValue = sumOfNodeValues % 10;
     const newNode = new LinkedList(newValue);
     current.next = newNode;
     current = newNode;

     carry = Math.floor(sumOfNodeValues / 10);
     nodeOne = nodeOne !== null ? nodeOne.next : null;
     nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
   }
   return newLinkedList.next;
}
