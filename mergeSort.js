// this is merge sort algorithm for linked list.
const Node = require("./node");

function merge(left, right) {
  const mergedList = new Node(); // Dummy node to keep track of the merged list
  let current = mergedList;

  while (left !== null && right !== null) {
    if (left.value <= right.value) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }

  // Append remaining nodes, if any, from either list
  if (left !== null) {
    current.next = left;
  } else {
    current.next = right;
  }

  return mergedList.next; // Skip the dummy node and return the actual head of the merged list
}

function mergeSort(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let slowPointer = head; // makes a referance pointer to head
  let fastPointer = head.next; // makes a referance pointer
  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next; // moves pointer twice as fast as the slow pointer
  }
  // once loop stops middle of the linked list will be the slower pointer
  const middle = slowPointer.next; // makes the slow pointer the node after middle to start recurrsion.
  slowPointer.next = null; // makes the last pointer of list two point to null breaking the two list into seperate list
  const left = mergeSort(head);
  const right = mergeSort(middle);

  const sortedList = merge(left, right);

  return sortedList;
}

module.exports = merge;
module.exports = mergeSort;
