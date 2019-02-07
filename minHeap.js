
/*
*/

class BinaryHeap {
  constructor() {
    this.storage = [];
  }

  insert(val) {
    if (this.storage.length === 0) {
      this.storage.push(val);
      return;
    }

    this.storage.push(val);
    let cI = this.storage.length - 1;
    let pI = this._findParentIdx(cI);

    while (this._compare(cI, pI)) {
      this._swap(cI, pI);
      cI = pI;
      pI = this._findParentIdx(cI);
    }
  }

  removeMin() {
    this._swap(0, this.storage.length - 1);
    let result = this.storage.pop();

    let pI = 0;
    let [ cI1, cI2 ] = this._findChildrenIdx(pI);

    while ((cI1 || cI2) && (this._compare(cI1, pI)|| this._compare(cI2, pI))) {
      if (cI1 && cI2 && this._compare(cI1, pI) && this._compare(cI2, pI)) {
        if (this._compare(cI1, cI2)) {
          this._swap(pI, cI1);
          pI = cI1;
          [ cI1, cI2 ] = this._findChildrenIdx(pI);
        } else {
          this._swap(pI, cI2);
          pI = cI2;
          [ cI1, cI2 ] = this._findChildrenIdx(pI);
        }
      } else if (cI1 && this._compare(cI1, pI)) {
        this._swap(pI, cI1);
        pI = cI1;
        [ cI1, cI2 ] = this._findChildrenIdx(pI);
      } else {
        this._swap(pI, cI2);
        pI = cI2;
        [ cI1, cI2 ] = this._findChildrenIdx(pI);
      }
    }
    return result;
  }

  _swap(indexA, indexB) {
    let temp = this.storage[indexA];
    this.storage[indexA] = this.storage[indexB];
    this.storage[indexB] = temp;
  }

  _findParentIdx(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  _findChildrenIdx(parentIndex) {
    let leftChildIdx = (parentIndex * 2) + 1;
    leftChildIdx < this.storage.length ? leftChildIdx : null;

    let rightChildIdx = (parentIndex * 2) + 2;
    rightChildIdx < this.storage.length ? rightChildIdx : null;
    return [leftChildIdx, rightChildIdx];
  }

  _compare(indexA, indexB) {
    return this.storage[indexA] < this.storage[indexB]; 
  }
}

const myBinHeap = new BinaryHeap();
myBinHeap.insert(3);
myBinHeap.insert(5);
myBinHeap.insert(6);
myBinHeap.insert(1);
myBinHeap.insert(4);
myBinHeap.insert(2);
console.log(myBinHeap.removeMin());
console.log(myBinHeap.storage);