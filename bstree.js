
// make a simple binary search tree
// then make it an AVL tree that self balances

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  search(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      return this.search(node.left, data);
    }
    
    if (data > node.data) {
      return this.search(node.right, data);
    }

    return node;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
        return;
      }
      this.insertNode(node.left, newNode);
      return;
    }

    if (newNode.data > node.data) {
      if (!node.right) {
        node.right = newNode;
        return;
      } 
      this.insertNode(node.right, newNode);
      return;
    }
  }

  remove(data) {

  }

  getRootNode() {
    return this.root;
  }

  findMinNode(node) {
    if (node.left === null) return node;
    return this.findMinNode(node.left);
  }

  inOrder(node) {

  }

  preOrder(node) {

  }

  postOrder(node) {

  }
}



/*
        5
      2   6
    1  4    7

*/

const myTree = new BSTree();
myTree.insert(5);
myTree.insert(2);
myTree.insert(4);
myTree.insert(6);
myTree.insert(1);
myTree.insert(7);
// myTree.remove(5);
console.log(myTree.root);




// class BSTree {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }

//   insert(val) {
//     if (val < this.val) {

//       if (this.left === null) {
//         this.left = new BSTree(val);
//         return;
//       }
//       this.left.insert(val);
//       return;
//     }

//     if (val > this.val) {
//       if (this.right === null) {
//         this.right = new BSTree(val);
//         return;
//       } 
//       this.right.insert(val);
//       return;
//     }
//   }

//   search(val) {
//     // search is straightforward
//     if (this.val === val) return this;


//     if (val > this.val) {
//       if (!this.right) return -1;
//       return this.right.search(val);
//     }


//     if (val < this.val) {
//       if (!this.left) return -1;
//       return this.left.search(val);
//     }
//   }

//   remove(val) {

//     console.log(`Starting from ${JSON.stringify(this)}`);
//     console.log(`Removing ${val}`);

//     let node = this.search(val);
//     let parent = this._findParentOfNode(val);

//     console.log(`Node is ${JSON.stringify(node)}`);
//     console.log(`Parent is ${JSON.stringify(parent)}`);


//     if (!node.left && !node.right) {
//       if (parent.right && val === parent.right.val) {
//         parent.right = null;
//       }

//       if (parent.left && val === parent.left.val) {
//         parent.left = null;
//       }
//     }

//     if (node.left && node.right) {
//       let smallest = node.right._findSmallest();
//       console.log(`smallest is ${JSON.stringify(smallest)}`);

//       node.val = smallest.val;
//       node.right.remove(smallest.val);
//     }


//     if (node.left) {
//       if (parent && val === parent.right) {
//         parent.right = node.left;
//       }
//       if (parent && val === parent.left) {
//         parent.left = node.left;
//       }
//     }

//     if (node.right) {
//       if (parent && val === parent.right) {
//         parent.right = node.right;
//       }
//       if (parent && val === parent.left) {
//         parent.left = node.right;
//       }
//     }
//   }


//   _findParentOfNode(val) {
//     if (this.val === val) {
//       return this;
//     }

//     if (val < this.val) {
//       if (this.left.val === val) return this;
//       return this.left._findParentOfNode(val);
//     }

//     if (val > this.val) {
//       if (this.right.val === val) return this;
//       return this.right._findParentOfNode(val);
//     }
//   }

//   _findSmallest() {
//     console.log(`This in find smallest is ${JSON.stringify(this)}`);
//     if (this.left === null) return this;

//     return this.left._findSmallest();
//   }

//   _findKthSmallest(k) {

//   }

//   _balance() {

//   }
// }