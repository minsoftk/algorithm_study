class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class NodeManage {
  constructor(head) {
    this.head = head;
  }

  insert(value) {
    this.currentNode = this.head;
    while (1) {
      // 노드의 값보다 작다면
      if (value < this.currentNode.value) {
        // 만약 left 노드가 있다면
        if (this.currentNode.left !== null) {
          this.currentNode = this.currentNode.left;
        } else {
          // 만약 left 노드가 없다면 새로운 노드로 추가
          this.currentNode.left = new Node(value);
          break;
        }
      } else {
        // 노드의 값보다 크거나 같다면
        if (this.currentNode.right !== null) {
          this.currentNode = this.currentNode.right;
        } else {
          this.currentNode.right = new Node(value);
          break;
        }
      }
    }
  }

  hasValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  delete(value) {
    let search = false;
    let currentNode = this.head;
    let parentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        search = true;
        return currentNode;
      } else if (currentNode.value > value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
    // deleteNode를 못찾았다면 return
    if (!search) {
      console.log('There is no match value. delete fail.');
      return false;
    }

    // 1. ChildNode가 Leaf Node인 경우
    // currentNode가 parent의 왼쪽인지 오른쪽인지 판단해 삭제만 해주면 된다.
    if (!currentNode.left && !currentNode.right) {
      if (value < parentNode.value) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }
      // 2. ChildNode를 하나만 가지고 있을 때.
      // childNode를 왼쪽에 가지고 있을 경우.
      // 왼쪽 Node가 존재할 경우
    } else if (currentNode.left && !currentNode.right) {
      if (value < parentNode.value) {
        parentNode.left = currentNode.left;
      } else {
        parentNode.right = currentNode.left;
      }
      // 오른쪽 Node가 존재할 경우
    } else if (!currentNode.left && currentNode.right) {
      if (value < parentNode.value) {
        parentNode.left = currentNode.right;
      } else {
        parentNode.right = currentNode.right;
      }

      // Case3 : 양쪽의 Node가 존재하는 경우
    } else if (!currentNode.left && !currentNode.right) {
      // Case 3.1
      if (value < parent.value) {
        this.change_node = currentNode.right;
        this.change_node_parent = currentNode.right;

        // left를 계속 순회한다.
        while (this.change_node.left) {
          this.change_node_parent = this.change_node;
          this.change_node = this.change_node.left;
        }
        // 만약 right Node가 존재한다면
        if (this.change_node.right) {
          this.change_node_parent.left = this.change_node.right;
        } else {
          this.change_node_parent.left = null;
        }
        parentNode.left = this.change_node;
        this.change_node.left = currentNode.left;
        this.change_node.right = currentNode.right;

        // Case 3-2
      } else {
        this.change_node = currentNode.right;
        this.change_node_parent = currentNode.right;
        while (this.change_node.left) {
          this.change_node_parent = this.change_node;
          this.change_node = this.change_node.left;
        }
        if (this.change_node.right) {
          this.change_node_parent.left = this.change_node.right;
        } else {
          this.change_node_parent.left = null;
        }
        parentNode.right = this.change_node;
        this.change_node.right = currentNode.right;
        this.change_node.left = currentNode.left;
      }
    }
  }
}

let head = new Node(1);
let BST = new NodeManage(head);

BST.insert(2);
BST.delete(2);
