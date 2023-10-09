class Graph {
  constructor() {
    this.adjanceyList = {};
  }
  addVertex(vertex) {
    if (!this.adjanceyList[vertex]) this.adjanceyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (this.adjanceyList[vertex1]) {
      this.adjanceyList[vertex1].push(vertex2);
    }
    if (this.adjanceyList[vertex2]) {
      this.adjanceyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjanceyList[vertex1] = this.adjanceyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjanceyList[vertex2] = this.adjanceyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
}

let g = new Graph();
g.addVertex("first");
g.addVertex("second");
g.addVertex("third");
g.addEdge("third", "second");
g.addEdge("first", "third");
console.log(g.adjanceyList);
g.removeEdge("first", "third");
console.log(g.adjanceyList);
