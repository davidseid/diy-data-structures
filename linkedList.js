class LinkedList {
  constructor(head) {
    this.head = head;
    this.tail = head;
  }

  addToTail(node) {
    this.tail.next = node;
    this.tail = node;
  }

  removeHead() { 
    if (this.head === null) return null;
    let oldHead = this.head;
    this.head = this.head.next;
    return oldHead.val;
  }

  search(val) {
    let node = this.head;
    while (node !== null) {
      if (node.val === val) return node;
      node = node.next;
    }
    return -1;
  }
}

class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const headNode = new LinkedListNode(7);

const myLinkedList = new LinkedList(headNode);
myLinkedList.addToTail

console.log(myLinkedList);
