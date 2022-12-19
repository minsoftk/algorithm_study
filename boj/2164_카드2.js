const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.size += 1;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size -= 1;
  }

  getHead() {
    return this.head.data;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  getLength() {
    return this.size;
  }
}

function solution(input) {
  const num = +input;
  let temp = new LinkedList();
  for (let i = 1; i <= num; i += 1) {
    temp.add(i);
  }

  while (temp.getLength() !== 1) {
    temp.removeHead();
    temp.add(temp.getHead());
    temp.removeHead();
  }

  return temp.getHead();
}

console.log(solution(input));
