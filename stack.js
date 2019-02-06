class Stack {
  constructor() {
    this.data = [];
  }

  // O(1)
  push(val) {
    this.data.push(val);
    return;
  }

  // O(1)
  pop() {
    if (this.isEmpty()) throw new Error('Empty Stack');
    return this.data.pop();
  }

  // O(1)
  peek() {
    return this.data[this.data.length - 1];
  }

  // O(1)
  isEmpty() {
    return this.data.length === 0;
  }

  // O(n)
  search(val) {
    for (let i = this.data.length - 1; i >= 0; i --) {
      if (this.data[i] === val) return i;
    }
    return -1;
  }
}

const myStack = new Stack();
myStack.push(5);
myStack.push('3');
console.log(myStack.peek());
console.log(myStack.pop());
myStack.push(7);
myStack.push(9);
console.log(myStack.search(3));
console.log(myStack.search(7));
