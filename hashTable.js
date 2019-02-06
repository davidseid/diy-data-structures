
const crypto = require('crypto');

class HashTable {
  constructor(size) {
    this.storage = [];
    this.size = size;
  }

  set(key, value) {
    
    let hashedKey = this._hash(key);
    if (this.storage[hashedKey]) {
      this.storage[hashedKey].push([key, value]);
    } else {
      this.storage[hashedKey] = [[key, value]];
    }
  }

  get(key) {
    let bucket = this.storage[this._hash(key)];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
    return undefined;
  }

  _hash(key) {
    const hash = crypto.createHash('sha256');
    hash.update(key.toString());
    return parseInt(hash.digest('hex'), 16) % this.size;
  }
}

let myHashTable = new HashTable(10);
myHashTable.set('monkey', 'blue');
console.log(myHashTable.get('monkey'));
myHashTable.set('trex', 'mega');
console.log(myHashTable.set('eliz', 'bronte'));
console.log(myHashTable.get('eliz'));
console.log(myHashTable.get('trex'));
console.log(myHashTable.storage);