

// make a simple binary search tree
// then make it an AVL tree that self balances




class BSTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (val < this.val) {

      if (this.left === null) {
        this.left = new BSTree(val);
        return;
      }
      this.left.insert(val);
      return;
    }

    if (val > this.val) {
      if (this.right === null) {
        this.right = new BSTree(val);
        return;
      } 
      this.right.insert(val);
      return;
    }
  }

  search(val) {
    // search is straightforward
    if (this.val === val) return this;


    if (val > this.val) {
      if (!this.right) return -1;
      return this.right.search(val);
    }


    if (val < this.val) {
      if (!this.left) return -1;
      return this.left.search(val);
    }
  }

  remove(val) {

    let node = this.search(val);
    let parent = this._findParentOfNode(val);

    console.log(`Node is ${JSON.stringify(node)}`);
    console.log(`Parent is ${JSON.stringify(parent)}`);


    if (!node.left && !node.right) {
      if (parent.right && val === parent.right.val) {
        parent.right = null;
      }

      if (parent.left && val === parent.left.val) {
        parent.left = null;
      }
    }

    if (node.left && node.right) {
      let smallest = node.right._findSmallest();
      console.log(`smallest is ${JSON.stringify(smallest)}`);
      let parentOfSmallest = this._findParentOfNode(smallest.val);
      console.log(`parent of smallest is ${JSON.stringify(parentOfSmallest)}`);

      node.val = smallest.val;

      if (parentOfSmallest.left.val === smallest.val) {
        parentOfSmallest.left = null;
      }
      if (parentOfSmallest.right.val === smallest.val) {
        parentOfSmallest.right = null;
      }
    }


    if (node.left) {
      if (val === parent.right) {
        parent.right = node.left;
      }
      if (val === parent.left) {
        parent.left = node.left;
      }
    }

    if (node.right) {
      if (val === parent.right) {
        parent.right = node.right;
      }
      if (val === parent.left) {
        parent.left = node.right;
      }
    }
  }

  _findParentOfNode(val) {
    if (this.val === val) {
      return null;
    }

    if (val < this.val) {
      if (this.left.val === val) return this;
      return this.left._findParentOfNode(val);
    }

    if (val > this.val) {
      if (this.right.val === val) return this;
      return this.right._findParentOfNode(val);
    }
  }

  _findSmallest() {
    console.log(`This in find smallest is ${JSON.stringify(this)}`);
    if (this.left === null) return this;

    return this.left._findSmallest();
  }

  _findKthSmallest(k) {

  }

  _balance() {

  }
}

/*
        5
      2   6
    1  4    7

*/

const root = new BSTree(5);
root.insert(2);
root.insert(4);
root.insert(6);
root.insert(1);
root.insert(7);
root.remove(2);
console.log(root);
