/*
Searching Algorithms
*/

/*
Binary search

Write a function that accepts a sorted array
and a value.
create 2 variables left and rigth
loop over and over
loop only if the left < end
value too small? ++
value too big? --

if not value return -1

*/

// const binarySearch = (arr, val) => {

// }
// console.log(binarySearch([1,2,3,4,5,6,7,8,9], 7)) // 6

//-------------------------

/*

Merge Sort
*/
// Swap helper function
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// const mergeFunc = (arr1, arr2) => {

// }

// console.log(mergeFunc([2,4,5,8], [1,3,6]))

// const mergeSort = (arr) => {

// }

// console.log(mergeSort([55,20,36,49,1,2,5,10]))

// // ///////////////////////////////////////


// const pivot = (arr, mid = Math.floor(arr.length / 2), end = arr.length - 1) => {

// }

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))

// const quickSort = (arr, left = 0, rigth = arr.length - 1) => {

// }

// console.log(pivot([[4, 8, 100,0, 500, 2, 1, 5, 7, 6, 3]]))
// console.log(quickSort([4, 8, 100,0, 500, 2, 1, 5, 7, 6, 3]))


// /////////////////////////////////

// const getDigit = (num, i) => {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// const digitCount = (num) => {
//   let string = String(num);
//   return string.length;
// }


// const maxDigit = (arr) => {
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     max = Math.max(max, digitCount(arr[i]));
//   }
//   return max;
// }

// const radixSort = (arr) => {

// }

// console.log(radixSort([333,12,44444, 10, 28, 55]))


class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
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
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      newNode.next = this.head
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || this.length <= index) return null;

    let countPosition = 0;
    let current = this.head;

    while (countPosition !== index) {
      current = current.next;
      countPosition++;
    }
    return current;
  }
  set(index, value) {
    let nodeFound = this.get(index);
    if (nodeFound) {
      nodeFound.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
    }
    if (index === this.length) {
      this.push(value);
    }
    let newNode = new Node(value);
    let foundNode = this.get(index - 1);

    let temp = foundNode.next;
    foundNode.next = newNode;
    newNode.next = temp;
    this.length++
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) {
      this.pop();
    }
    if (index === 0) {
      this.shift()
    }
    let prevNode = this.get(index - 1)
    let valueToRemove = prevNode.next;
    prevNode.next = valueToRemove.next;

    this.length--;
    return valueToRemove;
  }
  reverse() {
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
