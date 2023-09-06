class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // inserting/ adding/ appending  nodes
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined; // to check if value already exists and avoid duplication
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // finding nodes in a tree
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  BFS() {
    let visited = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  DFSPreOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return visited;
  }

  DFSPostOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(current);
    return visited;
  }

  DFSInOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }
}

let tree = new BinarySearchTree();
console.log(tree);
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(30);
tree.insert(3);
tree.insert(1);
tree.insert(9);
tree.insert(50);
tree.insert(22);
tree.insert(44);
console.log(tree.find(10));
console.log(tree);
