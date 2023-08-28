class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let currentTail = this.tail;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      // let newTail = currentTail.prev;
      // newTail.next = null;
      // currentTail.prev = null;
      // this.tail = newTail;
      // OR
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return currentTail;
  }

  unshift(val) {
    let newHead = new Node(val);
    let currentHead = this.head;
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      currentHead.prev = newHead;
      newHead.next = currentHead;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  shift() {
    let oldHead = this.head;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      // let newHead = oldHead.next;
      // newHead.prev = null;
      // this.head = newHead;
      // oldHead.next = null;
      // OR
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter, currentNode;
    if (index <= this.length / 2) {
      counter = 0;
      currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
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

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 1) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.next = afterNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 1) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push(200);
list.push(300);
list.push("three");
list.push("fourth item");
list.push(500);
list.push(600);
list.push(700);
console.log(list);
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift("first"));
// console.log(list.get(2));
// console.log(list.set(80, "hello"));
// console.log(list.insert(1, "doo"));
console.log(list.remove(2));
console.log(list);
