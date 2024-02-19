const Node = require("./node");

class Linkedlist {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    newNode.next = this.head;
    this.head = newNode;
  }

  listSize() {
    let size = 0;
    let current = this.head;
    while (current !== null) {
      size += 1;
      current = current.next;
    }
    return size;
  }

  listhead() {
    if (this.head == null) {
      return null;
    }
    return this.head.value;
  }

  tail() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current.value;
  }

  at(index) {
    let currentIndex = 0;
    let current = this.head;

    while (current !== null && currentIndex < index) {
      current = current.next;
      currentIndex += 1;
    }
    if (currentIndex < index || current === null) {
      return null;
    }
    return current.value;
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    let previous = null;
    let current = this.head;
    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
    if (previous === null) {
      this.head = null;
    } else {
      previous.next = null;
    }
    return `${current.value} removed`;
  }

  contains(value) {
    let current = this.head;

    if (this.head === null) {
      return false;
    }
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(value) {
    if (this.head === null) {
      return null;
    }
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return `${null} value not found`;
  }

  toString() {
    let string = "";
    let current = this.head;
    if (this.head === null) {
      return ` list is empty`;
    }
    while (current !== null) {
      string += `${current.value} `;
      if (current.next !== null) {
        string += `->`;
      }
      current = current.next;
    }
    return string;
  }

  insertAt(value, index) {
    if (index < 0) {
      return `Invaild Index`;
    }
    const newNode = new Node();
    newNode.value = value;
    if (index === 0) {
      this.prepend(value);
      return `Node inserted at index 0`;
    }

    let currentIndex = 1;
    let current = this.head;

    if (this.head === null && index === 0) {
      this.prepend(value);
    } else if (this.head === null && index !== 0) {
      return null;
    }
    while (current !== null) {
      if (currentIndex === index) {
        newNode.next = current.next;
        current.next = newNode;
        return `Node Inserted at index ${index}`;
      }
      current = current.next;
      currentIndex += 1;
    }
    return `List is shorter than given index`;
  }
}

module.exports = Linkedlist;
