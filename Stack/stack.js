class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  // method from course
  //   pop() {
  //     if (!this.first) return null;
  //     let temp = this.first;
  //     if (this.first === this.last) {
  //       this.last = null;
  //     }
  //     this.first = this.first.next;
  //     this.size--;
  //     return temp.value;
  //   }

  // own written method
  pop() {
    if (!this.first || this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.size--;
    return temp.value;
  }
}

let myStack = new Stack();

myStack.push(100);
myStack.push(200);
myStack.push(300);
myStack.push(400);
myStack.push(500);
console.log(myStack);

console.log(myStack.pop());
console.log(myStack);
