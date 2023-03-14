class Heap {
  constructor(data) {
    this.heapArray = [];
    this.heapArray.push(null);
    this.heapArray.push(data);
  }

  moveUp(insertedIdx) {
    if (insertedIdx <= 1) return false;

    let parentIdx = parseInt(insertedIdx / 2);
    if (this.heapArray[insertedIdx] > this.heapArray[parentIdx]) return true;
    else return false;
  }

  insert(data) {
    // 초기화
    if (this.heapArray.length === 0) {
      this.heapArray = [];
      this.heapArray.push(null);
      this.heapArray.push(data);
    } else {
      this.heapArray.push(data);
    }

    // 위치 바꾸기
    const len = this.heapArray.length;
    let newDataIdx = len - 1;

    // 만약 root가 아니고 부모의 값이 더 크다면 Swap
    while (this.moveUp(newDataIdx)) {
      let parentIdx = parseInt(newDataIdx / 2);
      if (this.heapArray[parentIdx] < data) {
        let temp = this.heapArray[parentIdx];
        this.heapArray[parentIdx] = data;
        this.heapArray[newDataIdx] = temp;
      }
      newDataIdx = parentIdx;
    }

    return true;
  }

  moveDown(popIdx) {
    let [left, right] = [popIdx * 2, popIdx * 2 + 1];
    const len = this.heapArray.length;
    // Case 1: 왼쪽 자식 노드도 없을 때
    if (left >= len) {
      return false;
      //Case 2: 오른쪽 자식 노드만 없을 때
    } else if (right >= len) {
      if (this.heapArray[popIdx] > this.heapArray[left]) {
        return true;
      } else return false;
    } else {
      // Case 3: 왼쪽, 오른쪽 자식 노드 모두 있을 때
      // 두 노드를 먼저 비교한다.
      if (this.heapArray[left] > this.heapArray[right]) {
        if (this.heapArray[popIdx] < this.heapArray[left]) return true;
        else return false;
      } else {
        if (this.heapArray[popIdx] < this.heapArray[right]) return true;
        else return false;
      }
    }
  }

  pop(data) {
    if (this.heapArray.length <= 1) return null;
    const len = this.heapArray.length;
    let maxHeap = this.heapArray[1];

    // 가장 마지막 값과 root값을 바꿔준다.
    let lastValue = this.heapArray[len - 1];
    this.heapArray[1] = lastValue;
    this.heapArray.pop();

    // 자식과 비교
    let popIdx = 1;
    while (moveDown(popIdx)) {
      const [left, right] = [2 * popIdx, 2 * popIdx + 1];

      // case 2: 오른쪽 자식 노드만 없을 때
      if (right >= len) {
        if (this.heapArray[popIdx] < this.heapArray[left]) {
          const temp = this.heapArray[popIdx];
          this.heapArray[popIdx] = this.heapArray[left];
          this.heapArray[left] = temp;
          popIdx = left;
        }
      } else {
        // Case 3: 왼쪽, 오른쪽 자식 노드 모두 있을 때
        if (this.heapArray[left] > this.heapArray[right]) {
          if (this.heapArray[popIdx] < this.heapArray[left]) {
            const temp = this.heapArray[popIdx];
            this.heapArray[popIdx] = this.heapArray[left];
            this.heapArray[left] = temp;
            popIdx = left;
          }
        } else {
          if (this.heapArray[popIdx] < this.heapArray[right]) {
            const temp = this.heapArray[popIdx];
            this.heapArray[popIdx] = this.heapArray[right];
            this.heapArray[right] = temp;
            popIdx = right;
          }
        }
      }
    }
    return maxHeap;
  }
}

const heap = new Heap(1);
heap.insert(2);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(7);
heap.insert(8);
console.log(heap.heapArray);
