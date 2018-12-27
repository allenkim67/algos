class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor(arr) {
    if (!arr) {
      this.root = null
    } else {
      for (const el of arr.slice(1)) {
        this.insert(el)
      }
    }
  }

  insert(el) {
    const newNode = new Node(el)

    if (!this.root) {
      this.root = new Node(el)
    } else {
      let node = this.root
      while (true) {
        if (el <= node.val) {
          if (!node.left) {
            node.left = newNode
            break
          } else {
            node = node.left
          }
        } else {
          if (!node.right) {
            node.right = newNode
            break
          } else {
            node = node.right
          }
        }
      }
    }
  }

  find(el) {
    let node = this.root
    while (node) {
      if (node.val === el) {
        return node
      } else if (el < node.val) {
        node = node.left
      } else if (el > node.val) {
        node = node.right
      }
    }
    return null
  }
}

const bt = new BinaryTree()
bt.insert(5)
bt.insert(9)
bt.insert(4)
bt.insert(6)
bt.insert(1)

console.log(JSON.stringify(bt.find(4), 2, 2))