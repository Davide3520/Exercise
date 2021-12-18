/*
Insertion Sort & Bubble Sort
work really well with NEARLY SORTED data such as
time complexity = O(n)

Insertion sort works very good if you have a flow of data coming in and you need
to sorted
*/


const insertionSort = (arr) => {
  let current;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([10,1,8,29,30]))
