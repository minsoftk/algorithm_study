class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // let node = this.head;
      // while (node.next) {
      //   node = node.next;
      // }
      // node.next = newNode;
      // newNode.prev = node;
      // this.tail = newNode;

      let node = this.tail;
      node.next = newNode;
      newNode.prev = node;
      this.tail = newNode;
    }
  }

  desc() {
    let node = this.tail;
    while (node) {
      console.log(node.data);
      node = node.prev;
    }
  }
  searchData(data) {
    if (!this.head) {
      return false;
    }
    let node = this.head;
    while (node) {
      if (node.data === data) {
        return node;
      } else node = node.next;
    }
    return false;
  }

  insertBefore(data, newData) {
    if (!this.head) {
      this.head = new Node(newData);
      return true;
    }
    let node = this.head;
    let newNode = new Node(newData);
    while (node.data !== data) {
      node = node.next;
      if (!node) return false;
    }
    let prevNode = node.prev;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = node;
    node.prev = newNode;
    return true;
  }

  delete(data = null) {
    // 총 3가지 경우를 생각해야 한다.
    // 예외처리 head가 없는경우
    // 1. head를 삭제하는 경우
    // 2. 마지막 노드를 삭제하는 경우
    // 3. 중간 노드를 삭제하는 경우

    if (!this.head) {
      console.log('해당 값을 가진 노드가 없습니다.');
      return;
    }

    let node;
    if (this.head.data === data) {
      this.head = this.head.next;
    } else {
      node = this.head;
      while (node.next) {
        if (node.next.data === data) {
          node.next = node.next.next;
        } else node = node.next;
      }
    }
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

const linkedList1 = new DoubleLinkedList();
for (let i = 0; i <= 10; i += 1) {
  linkedList1.add(i);
}
// linkedList1.desc();
linkedList1.insertBefore(3, 99);
linkedList1.desc();
