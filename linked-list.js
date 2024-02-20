const mergeSort = require("./mergeSort");

const Linkedlist = require("./listClass");

const List = new Linkedlist();
List.append(1);
List.append(2);
List.append(3);
List.append(4);
List.append(5);
console.log(List.listSize());

console.log(List.at(3));
console.log(List.contains(4));
console.log(List.find(2));
console.log(List.tail());
console.log(List.listhead());
List.insertAt(6, 4);
List.removeAt(2);
List.prepend(10);
console.log(List.toString());
console.log(List.head);

const sortedListHead = mergeSort(List.head);

const sortedList = new Linkedlist();
sortedList.head = sortedListHead;
console.log(` Ordered Linked list = ${sortedList.toString()}`);
