class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(data) {
    if (data) this.head = new Node(data);
    else this.head = null;
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(data);
    }
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
    console.log(this.head);
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

const linkedList1 = new LinkedList();
for (let i = 0; i <= 10; i += 1) {
  linkedList1.add(i);
}
linkedList1.print();
