class TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(public value: any){
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;
  constructor(){
    this.root = null;
  }

  insert(value: any){
    let newNode = new TreeNode(value);
    if (this.root == null) {
      this.root = newNode
    } else {
      let currentNode = this.root;
      while(true){
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this
          }
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right){
            currentNode.right = newNode;
            return this
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value:any){
    if (!this.root) {
      return null;
    }

    let currentNode: TreeNode | null = this.root;
    while(currentNode){
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        currentNode = currentNode.right;
      } else if(currentNode.value == value){
        return currentNode;
      } else {
        return false
      }
    }
  }

  remove(value: any){
    if (this.root == null) {
      return null;
    }

    let currentNode: TreeNode | null = this.root;
    let parentNode: TreeNode | null = null;
    while(currentNode){
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if(currentNode.value == value){
        if (currentNode.right == null) {
          if (parentNode == null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left
            } else if(currentNode.value > parentNode.value){
              parentNode.right = currentNode.left
            }
          }
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return currentNode;
      } else {
        return false
      }
    }
  }

  breadthFirstSearch(){
    if (this.root === null) {
      return false;
    }
    let currentNode = this.root;
    let list: any[] = [];
    let queue: TreeNode[] = [];
    queue.push(currentNode)

    while(queue.length > 0){
      currentNode = queue.shift()!;
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return list;
  }

  DFSInorder(){
    if (this.root === null) {
      return [];
    }
    return traverseInorder(this.root, []);
  }

  DFSPreorder(){
    if (this.root === null) {
      return [];
    }
    return traversePreorder(this.root, []);
  }

  DFSPostorder(){
    if (this.root === null) {
      return [];
    }
    return traversePostorder(this.root, []);
  }
}

function traverseInorder(node: TreeNode, list: any[]){
  if (node.left) {
    traverseInorder(node.left, list);
  }

  list.push(node.value);
  if (node.right) {
    traverseInorder(node.right, list);
  }

  return list;
}

function traversePreorder(node: TreeNode, list: any[]){

  list.push(node.value);
  if (node.left) {
    traversePreorder(node.left, list);
  }
  if (node.right) {
    traversePreorder(node.right, list);
  }

  return list;
}

function traversePostorder(node: TreeNode, list: any[]){
  if (node.left) {
    traversePostorder(node.left, list);
  }
  if (node.right) {
    traversePostorder(node.right, list);
  }

  list.push(node.value);

  return list;
}

let tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);

tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.remove(4);
console.log(tree.DFSPostorder());