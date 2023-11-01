const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

// 틀린거
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 1. idx를 가지고 와야됨
  // 2. 노드가 존재하는지 확인해야 됨.
  // 3. 깂을 가져와야됨

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }
  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
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
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  heapifyUp() {
    let idx = this.heap.length - 1;
    while (this.hasParent(idx) && this.parent(idx)[0] > this.heap[idx][0]) {
      this.swap(this.getParentIndex(idx), idx);
      idx = this.getParentIndex(idx);
    }
  }

  insert(data) {
    this.heap.push(data);
    this.heapifyUp();
  }

  heapifyDown() {
    let idx = 0;
    while (this.hasLeftChild(idx)) {
      let smallerChildIndex = this.getLeftChildIndex(idx);
      if (
        this.hasRightChild(idx) &&
        this.rightChild(idx)[0] < this.leftChild(idx)[0]
      ) {
        // smallerChildIndex = this.getLeftChildIndex(idx);
        smallerChildIndex = this.getRightChildIndex(idx);
      }
      if (this.heap[idx][0] < this.heap[smallerChildIndex][0]) {
        break;
      } else {
        this.swap(idx, smallerChildIndex);
      }
      idx = smallerChildIndex;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;

    let result = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return result;
  }

  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  print() {
    for (let i = 0; i < this.heap.length; i++) {
      console.log(this.heap[i]);
    }
  }
}

function solution(input) {
  let answer = [];
  const minHeap = new MinHeap();

  for (let i = 0; i < input.length; i++) {
    const num = input[i];

    if (num !== 0) {
      minHeap.insert([Math.abs(num), num]);
    } else {
      if (minHeap.size() === 0) answer.push(0);
      else if (minHeap.size() === 1) answer.push(minHeap.pop()[1]);
      else {
        let top = minHeap.pop();
        const temp = [top];
        while (minHeap.size() > 0 && top[0] === minHeap.peek()[0]) {
          temp.push(minHeap.pop());
        }

        temp.sort((a, b) => b[1] - a[1]);
        answer.push(temp.pop()[1]);
        temp.forEach((elem) => minHeap.insert(elem));
      }
    }
  }
  return answer.join('\n');
}

console.log(solution(input));
