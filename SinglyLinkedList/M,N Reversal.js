/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

1 -> 2 -> 3 -> 4 -> 5 -> null;
m = 2, n = 4
output = 1 -> 4 -> 3 -> 2 -> 5 -> null;


1 -> 2 -> 3 -> 4 -> 5 -> null;
m = 1, n = 5;
output = 5 -> 4 -> 3 -> 2 -> 1 -> null;
*/

/*
Step to reverse LinkedList:
-1 get current node
-2 store next value
-3 update next value to listSoFar
-4 store current node on listSoFar
-5 update current node to stored next value at step number 2;

// let prev = null;
// let current = head;

// while (current){
// let next = current.next;
// current.next = prev;
// prev = current;
// current = next;
//}
// return prev
*/

/*
- we keep track using head = 1
- position tracker = 1 (is going to tell us when we reach m - 1 or n + 1
- keep track of the current node we are working on
- if the current node is equal to a value like m - 1 or n + 1
then we keep track of that value by starting a varialbe start = value
- then increment posiiton and current node
- ask again if it is an important value? YES -> create a variable called tail = important value
*/

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const linkedList = [5, 4, 3, 2, 1].reduce((acc, value) => new ListNode(value, acc), null);

const printList = (head) => {
  if (!head) {
    return;
  }
  console.log(head.value)
  printList(head.next);
}



//////////////////////


const segmentReverse = (head, m, n) => {
  let currentPosition = 1;
  let currentNode = head, start = head;
  while (currentPosition < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPosition++;
  }

  let newList = null, tail = currentNode;
  
  while (currentPosition >= m && currentPosition <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPosition++;
  }
  start.next = newList;
  tail.next = currentNode;

  if (m > 1) {
    return head;
  } else {
    return newList;
  }
}

console.log(printList(segmentReverse(linkedList, 2, 4)))
