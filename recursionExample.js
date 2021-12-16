
// const  randomNum = (random = []) => {

//   if (random.length === 100) {
//     return random;
//   }
//   random.push(Math.floor(Math.random() * 100))
//   return randomNum(random)
// }

// console.log(randomNum())


// const firstNodeInLinkedList = {
//   value: "Bandit",
//   next: null
// };

// const secondNodeInLinkedList = {
//   value: "Penny",
//   next: null
// };

// const thirdNodeInLinkedList = {
//   value: "Pepper",
//   next: null
// };

// firstNodeInLinkedList.next = secondNodeInLinkedList;
// secondNodeInLinkedList.next = thirdNodeInLinkedList;

// const linkedListIterative = (rootNode) => {

//   let current = rootNode

//   while(current) {

//     console.log(current.value)
//     current = current.next;
//   }

//   return;
// }

// const linkedListRecursive = (rootNode) => {

//   console.log(rootNode.value)

//   if (rootNode.next !== null) {
//     linkedListRecursive(rootNode.next)
//   }
//   return
// }

// console.log(linkedListRecursive(firstNodeInLinkedList))

// const fibAnswers = {};

// const fibMemo = (n) => {

//   if (fibAnswers[n]) {
//     return fibAnswers[n];
//   }
//   if (n === 0) {
//     return 0;

//   } else if (n <= 2) {
//     return 1;
//   }

//   const results = fibMemo(n - 1) + fibMemo(n - 2);
//   fibAnswers[n] = results;
//   return results;

// }

// console.log(fibMemo(9))


// function fact(num) {
//   if (num < 2) {
//     return 1;
//   }

//   return num *= fact(num - 1)

// }

// console.log(fact(0)) // 1
// console.log(fact(1)) // 1
// console.log(fact(2)) // 2
// console.log(fact(3)) // 3 * 2 * 1 = 6
// console.log(fact(4)) // 24 1 * 2 * 3 * 4
// console.log(fact(7)) // 5040

