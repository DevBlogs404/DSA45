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

  appendNode(nodeValue) {
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
  pop() {
    if (!this.head) return null;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

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

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  size() {
    // return this.length;
    console.log("length of the linked list is: " + this.length);
  }

  //   search(val) {
  //     let counter = 0;
  //     let currentNode = this.head;
  //     while (counter < this.length) {
  //       //   console.log(currentNode);
  //       if (currentNode.value === val) {
  //         return currentNode;
  //       }
  //       currentNode = currentNode.next;
  //       counter++;
  //     }
  //   }
}

const list = new LinkedList();
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.unshift(200);
list.set(2, "hello");
// console.log(list.shift());
console.log(list);
// console.log(list.get(3));
// console.log(list.search(400));
// console.log(list.pop());
// list.traverse();
// list.size();
// console.log(list);
