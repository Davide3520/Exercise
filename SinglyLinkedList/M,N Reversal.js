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


*/

const segmentReverse = (head, m, n) => {

}
