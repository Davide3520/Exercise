/*
Given a LinkedList return it in reverse.

ex: 1->2->3->4->null
output: 4->3->2->1->null

if we receive a single node return null;
if we receive null return null;

pattern for looping

currentNode = head;

while (currentNode) {
  SOME OPERATIONS

  currentNode = currentNode.next
}
*/

// class Linked {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

/*
- current = head -> null
- prev = current
- next = current.next

*/
//ex: 1->2->3->4->null

/*Time: o(n)  Space: o(1) */
const linked = (head) => {
  let previous = null; // null
  let currentNode = head; // 1

  while (currentNode) { // currentNode is true
    let next = currentNode.next; // reference to the next value  2
    currentNode.next = previous // null
    previous = currentNode; // 1->null
    currentNode = next; // 2
  }
  return previous;
}
