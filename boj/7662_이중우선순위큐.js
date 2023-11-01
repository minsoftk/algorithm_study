const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

class Heap {
  constructor(str) {
    this.heap = [];
    this.compare = str === 'min' ? (a, b) => a < b : (a, b) => a > b;
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }
  getRightChildIndex(index) {
    return index * 2 + 2;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
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
    const temp = this.heap[index2];
    this.heap[index2] = this.heap[index1];
    this.heap[index1] = temp;
  }

  heapifyUp() {
    let idx = this.heap.length - 1;
    while (
      this.hasParent(idx) &&
      this.compare(this.heap[idx][0], this.parent(idx)[0])
    ) {
      this.swap(idx, this.getParentIndex(idx));
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
        this.compare(this.rightChild(idx)[0], this.leftChild(idx)[0])
      ) {
        smallerChildIndex = this.getRightChildIndex(idx);
      }
      if (this.compare(this.heap[idx][0], this.heap[smallerChildIndex][0])) {
        break;
      } else {
        this.swap(idx, smallerChildIndex);
      }
      idx = smallerChildIndex;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    let popItem = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();

    return popItem;
  }

  top() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0 ? true : false;
  }
}

let minHeap, maxHeap, deleted;

function solution(input) {
  function popFunc(heap, deleted) {
    while (!heap.isEmpty()) {
      const [data, id] = heap.pop();
      if (!deleted[id]) {
        deleted[id] = true;
        return data;
      }
    }
    return null;
  }

  let answer = [];
  let idx = 0;

  for (let i = 0; i < n; i += 1) {
    const num = +input[idx];
    const arr = input.slice(idx + 1, idx + num + 1);
    // D -1 은 최솟값 삭제하는 연산
    // D 1 은 최대값 삭제하는 연산
    let current = 0;
    minHeap = new Heap('min');
    maxHeap = new Heap('max');
    deleted = Array(arr.length).fill(false);

    for (let i = 0; i < arr.length; i += 1) {
      const [command, value] = arr[i].split(' ');

      if (command === 'I') {
        minHeap.insert([+value, current]);
        maxHeap.insert([+value, current]);
        current += 1;
      } else if (command === 'D') {
        // 최대값 뽑기
        if (value === '1') {
          popFunc(maxHeap, deleted);
        } else if (value === '-1') {
          popFunc(minHeap, deleted);
        }
      }
    }

    const maxValue = popFunc(maxHeap, deleted);
    if (maxValue === null) {
      answer.push('EMPTY');
    } else {
      minHeap.insert([maxValue, current]);
      // console.log('maxHeap,minHeap:', maxHeap, minHeap);
      answer.push([maxValue, popFunc(minHeap, deleted)].join(' '));
    }

    idx += num + 1;
  }
  return answer.join('\n');
}

console.log(solution(input));
