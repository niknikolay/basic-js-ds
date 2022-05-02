const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.roo = null;
  }
  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.roo;
  }

  add(/* data */data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.roo = addFunction(this.roo, data);

    function addFunction(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addFunction(node.left, data);
      } else {
        node.right = addFunction(node.right, data);
      }
      return node;
    }
  }

  has(/* data */data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return hasFunction(this.roo, data); 

      function hasFunction(node, data) {
        if(!node) {
          return false;
        }

        if(node.data === data) {
          return true;
        }

        if(data < node.data) {
          return hasFunction(node.left, data);
        } else {
          return hasFunction(node.right, data)
        }
      }
    
  }

  find(/* data */data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return findFunction(this.roo, data);

    function findFunction(node, data) {

      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      } 
      
      if(data < node.data) {
        
       return findFunction(node.left, data);
      } else {
        return findFunction(node.right, data);
      }
    }
  }

  remove(/* data */data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.roo = removeFunction(this.roo, data);

    function removeFunction(node, data) {

      if(!node) {
        return null;
      }

      if(data < node.data) {
        node.left = removeFunction(node.left, data);
        return node;
      } else if(data > node.data) {
        node.right = removeFunction(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minRigt = node.right;
        while(minRigt.left) {
          minRigt = minRigt.left;
        }
        node.data = minRigt.data;
        node.right = removeFunction(node.right, minRigt.data);

        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.roo) {
      return;
    }

    let node = this.roo;
    while(node.left) {
      node = node.left;
    }
    
    return node.data;

  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.roo) {
      return;
    }

    let node = this.roo;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};