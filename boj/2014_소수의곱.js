const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';

const [info, input] = require('fs')
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split('\n');

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper Methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  // Functions to create Min Heap

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  // Removing an element will remove the
  // top element with highest priority then
  // heapifyDown will be called

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  insert(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  printHeap() {
    var heap = ` ${this.heap[0]} `;
    for (var i = 1; i < this.heap.length; i++) {
      heap += ` ${this.heap[i]} `;
    }
    console.log(heap);
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }
  length() {
    return this.heap.length;
  }
}

function solution(input) {
  const [k, n] = info.trim().split(' ').map(Number);
  const arr = input.split(' ').map(Number);

  const heap = new MinHeap();

  let visited = new Set();
  let maxValue = Math.max(...arr);
  for (let i = 0; i < arr.length; i += 1) {
    heap.insert(arr[i]);
    visited.add(arr[i]);
  }

  for (let i = 0; i < n - 1; i += 1) {
    const top = heap.pop();

    for (let j = 0; j < arr.length; j += 1) {
      const value = top * arr[j];
      if (heap.length() >= n && maxValue < value) continue;
      if (!visited.has(value)) {
        heap.insert(value);
        maxValue = Math.max(maxValue, value);
        visited.add(value);
      }
    }
  }
  return heap.pop();
}

console.log(solution(input));
