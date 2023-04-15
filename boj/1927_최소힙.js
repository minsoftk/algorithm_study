const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// class minHeap {
//   constructor() {
//     this.heap = [];
//     this.heap.push(-1e9);
//   }

//   moveUp(insertedIdx) {
//     if (insertedIdx <= 1) return false;

//     const parentIdx = Math.floor(insertedIdx / 2);
//     if (heap[parentIdx] < heap[insertedIdx]) return true;
//     else return false;
//   }

//   insert(data) {
//     if (this.heap.length === 0) {
//       this.heap.push(null);
//       this.heap.push(data);
//       return true;
//     }
//     this.heap.push(data);

//     insertedIdx = this.heap.length - 1;

//     while (this.moveUp(insertedIdx)) {
//       const parentIdx = Math.floor(insertedIdx / 2);
//       const temp = this.heap[parentIdx];
//       this.heap[parentIdx] = this.heap[insertedIdx];
//       this.heap[insertedIdx] = temp;
//       insertedIdx = parentIdx;
//     }
//     return true;
//   }

//   moveDown(popIdx) {
//     let left = popIdx * 2;
//     let right = popIdx * 2 + 1;
//     const heapLen = this.heap.length;

//     // 왼쪽 자식 노드가 없을 때
//     if (left >= heapLen) return false;
//     else if (right >= heapLen) {
//       // 오른쪽 자식 노드만 없을때

//       // 왼쪽 자식 노드가 더 작을 때
//       if (this.heap[popIdx] > this.heap[left]) return true;
//       else return false;
//     } else {
//       // 왼쪽, 오른쪽 자식 노드 모두 있을 때
//       if (this.heap[left] < this.heap[right]) {
//         if (this.heap[popIdx] < this.heap[left]) return true;
//         else return false;
//       } else {
//         if (this.heap[popIdx] < this.heap[right]) return true;
//         else return false;
//       }
//     }
//   }

//   pop() {
//     if (this.heap.length <= 1) return null;
//     const returnData = this.heap[1];
//     this.heap[1] = this.heap[this.heap.length - 1];

//     let popIdx = 1;
//     while (moveDown(popIdx)) {
//       let left = popIdx * 2;
//       let right = popIdx * 2 + 1;

//       // 오른쪽 자식 노드만 없을 때,
//       if (right >= this.heap.length && this.heap[popIdx] > this.heap[left]) {
//         const temp = this.heap[popIdx];
//         this.heap[popIdx] = this.heap[left];
//         this.heap[left] = temp;
//       }else {
//         // 왼쪽, 오른쪽 자식 모두 있을 때
//         if (this.heap[left] < this.heap[right]){

//         }
//       }
//     }
//     return returnData;
//   }
// }

class minHeap {
  constructor() {
    this.heap = [];
    this.heap.push(-1e9);
  }
  insert(val) {
    this.heap.push(val);
    this.upheap(this.heap.length - 1);
  }

  upheap(pos) {
    let tmp = this.heap[pos];
    // 부모 노드보다 클 경우
    while (tmp < this.heap[parseInt(pos / 2)]) {
      // insert에서 입력된 새로운 값의 idx에 부모노드의 값을 입력한다.
      // pos는 부모노드의 위치로 바뀐다.
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    // 부모노드보다 컸던 tmp값이 입력. 즉, 7-8  -> 8-7 과정
    this.heap[pos] = tmp;
  }
  get() {
    if (this.heap.length === 2) return this.heap.pop();
    if (this.heap.length === 1) return false;
    let res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1); // pos는 마지막 부모까지만 내려가야 한다.
    return res;
  }
  downheap(pos, len) {
    let tmp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      // 왼쪽 자식이 더 큰가 오른쪽 자식이 더 큰가
      // len보다는 작아야 한다.
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      if (tmp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
}

function solution(input) {
  const [n, ...arr] = input.map((elem) => elem.split(' ').map(Number));
  const num = n[0];
  const heap = new minHeap();
  const answer = [];
  for (let i = 0; i < num; i += 1) {
    const val = arr[i][0];
    if (val === 0) {
      const temp = heap.get();
      answer.push(temp > 0 ? temp : 0);
    } else if (val > 0) {
      heap.insert(val);
    }
  }

  return answer.join('\n');
}

console.log(solution(input));

// https://velog.io/@longroadhome/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-JS%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-HEAP
