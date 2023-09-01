class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // adds/appends/push to the last of the queue
  enQueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this;
  }

  // removes /pops from the starting of the queue
  deQueue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let myQueue = new Queue();

console.log(myQueue);
myQueue.enQueue(100);
myQueue.enQueue(200);
myQueue.enQueue(300);
console.log(myQueue);

console.log(myQueue.deQueue());
console.log(myQueue);
