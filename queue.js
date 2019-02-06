class Queue {
  constructor() {
    this.storage = [];
    this.count = 0;
  }

  // O(1)
  enqueue(val) {
    this.storage.push(val);
  }

  // O(1) with linkedList, here O(n) since each item needs to be shuffled
  dequeue() {
    if (this.isEmpty()) throw new Error('Empty Queue');
    return this.storage.shift();
  }

  isEmpty() {
    return this.count === 0;
  }
}