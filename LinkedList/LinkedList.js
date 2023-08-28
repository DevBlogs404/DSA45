// creating a Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adds a node at th end of the list
  push(nodeValue) {
    let node = new Node(nodeValue);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // traverses the list and return node or node value
  traverse() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.length) {
      //   console.log(currentNode);
      console.log(currentNode.value);
      currentNode = currentNode.next;
      counter++;
    }
  }

  // removes the last element from the list
  pop() {
    if (!this.head) return null;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return currentNode;
  }

  // adds an element to the starting of the list
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // removes an element from the starting of the list
  shift() {
    if (!this.head) return null;
    let oldHead = this.head;
    // let newHead = oldHead.next;
    // this.head = newHead; or
    this.head = this.head.next;
    if (this.length === 0) {
      this.tail = null;
    }
    this.length--;
    return oldHead;
  }

  // returns an element of the requested index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // sets the value of a node at the provided index
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    let prevNode = this.get(index - 1);
    // let currentNode = this.get(index);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  // returns the size or length of the list
  size() {
    // return this.length;
    console.log("length of the linked list is: " + this.length);
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

const list = new LinkedList();
list.push(300);
list.push(400);
list.push(500);
list.unshift(200);
// list.set(2, "hello");
list.insert(1, "monu");
list.insert(3, "three");
// console.log(list.shift());
console.log(list);
// console.log(list.remove(4));
// console.log(list.shift());
// console.log(list.get(3));
// console.log(list.search(400));
// console.log(list.pop());
// list.traverse();
// list.size();
// console.log(list);
