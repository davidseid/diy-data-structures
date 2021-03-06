
// make a simple binary search tree
// then make it an AVL tree that self balances

class Node {
  constructor(data) {
    this.data = data;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  rotateRight(node) {
    let left = node.left;
    let child = left.right;

    left.right = node;
    node.left = child;

    this.updateHeight(node);
    this.updateHeight(left);
    return left;
  }

  rotateLeft(node) {
    let right = node.right;
    let child = right.left;

    right.left = node;
    node.right = child;

    this.updateHeight(node);
    this.updateHeight(right);
    return right;
  }

  getBalance(node) {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  rebalance(node) {
    let balance = this.getBalance(node);
    if (Math.abs(balance) <= 1) return node;

    // left left
    if (balance > 1 && this.getBalance(node.left) > 0) {
      return this.rotateRight(node);
    }

    // left right
    if (balance > 1 && this.getBalance(node.left) < 0) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }
    
    // right right
    if (balance < -1 && this.getBalance(node.right) < 0) {
      return this.rotateLeft(node);
    }

    // right left
    if (balance < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }
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

  updateHeight(node) {
    let leftHeight = this.getHeight(node.left);
    let rightHeight = this.getHeight(node.right);
    node.height = 1 + Math.max(leftHeight, rightHeight);
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.root = this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
    if (newNode.data > node.data) {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
    this.updateHeight(node);   
    return this.rebalance(node);
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {

    if (node === null) return null;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    // no children
    if (!node.left && !node.right) {
      node = null;
      return node;
    }
    
    // one child
    if (!node.right) {
      node = node.left;
      return node;
    }

    if (!node.left) {
      node = node.right;
      return node;
    }

    // two children
    let minNode = this.findMinNode(node.right);
    node.data = minNode.data;
    node.right = this.removeNode(node.right, minNode.data);
    return node;
  }

  getRootNode() {
    return this.root;
  }

  findMinNode(node) {
    if (node.left === null) return node;
    return this.findMinNode(node.left);
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
}

const myTree = new AVLTree();
myTree.insert(5);
myTree.insert(4);
myTree.insert(8);
myTree.insert(9);
myTree.insert(7);
myTree.insert(6);
console.log(myTree.root);
