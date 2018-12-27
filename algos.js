function missing(arr) {
  if (!arr.length) return null

  let upper = arr.length
  let lower = 0
  while (true) {
    const i = Math.floor((upper - lower) / 2) + lower
    if (arr[i] !== i + 1) {
      if (i === 0 || arr[i - 1] === i) {
        return i + 1
      }
      upper = i
    } else {
      lower = i
    }
  }  
}

function binarySearch(arr, n) {
  let lower = 0
  let upper = arr.length - 1
  let mid = Math.floor((lower + upper) / 2)

  while (arr[mid] !== n && lower < upper) {
    if (n > arr[mid]) {
      lower = mid + 1
    } else {
      upper = mid - 1
    }
    mid = Math.floor((lower + upper) / 2)
  }

  return arr[mid] === n ? mid : -1
}

function reverse(arr) {
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i += 1
    j -= 1
  }
  return arr
}

class Autocomplete {
  constructor() {
    this.trie = {}
  }

  add(s) {
    let node = this.trie
    for (const ch of s) {
      if (!node[ch]) {
        node[ch] = {}
      }
      node = node[ch]
    }
    node['end'] = true
  }

  autocomplete(s, min=3) {
    if (s.length < min) return []

    let node = this.trie
    for (const ch of s) {
      if (!node[ch]) return []
      node = node[ch]
    }

    return this._iterTrie(node, s, [])
  }

  _iterTrie(node, phrase, phrases) {
    if (Object.keys(node).length !== 0) {
      if (node['end']) {
        phrases.push(phrase)
      }
      Object.keys(node).forEach(ch => {
        this._iterTrie(node[ch], phrase + ch, phrases)
      })
    }
    return phrases
  }
}

function traverse(root) {
  const stack = []
  let node = root
  while (stack.length) {
    node = stack.pop()
    if (node.right) stack.push(node.left)
    if (node.left) stack.push(node.right)
  }
}

const root = {
  data: 'a',
  left: {
    data: 'b',
    left: {
      data: 'd'
    },
    right: {
      data: 'e'
    }
  },
  right: {
    data: 'c',
    left: {
      data: 'f'
    },
    right: {
      data: 'g'
    }
  }
}

function reverseLinkedList(node, prev=null) {
  if (node) {
    const head = reverseLinkedList(node.next, node)
    node.next = prev
    return head
  } else {
    return prev
  }
}

function hasLoop(head) {
  if (!head || !head.next) return false

  let fast = head.next
  let slow = head
  let tick = 0
  while (fast && slow !== fast) {
    fast = fast.next
    if (tick % 2 === 1) {
      slow = slow.next
    }
    tick += 1
  }
  return !!fast
}

function nthFromEnd(head, n) {
  if (!head) return null
  
  let r1 = head
  for (let i = 0; i < n; i++) {
    r1 = r1.next
    if (!r1) return null
  }

  let r2 = head
  while (r1) {
    r1 = r1.next
    r2 = r2.next
  }

  return r2
}

const head = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: null
      }
    }
  }
}

class MaxHeap {
  constructor(arr) {
    this.heap = []
    this.heapify(arr)
  }

  heapify(arr) {
    for (const el of arr) {
      this.insert(el)
    }
    return this.heap
  }

  insert(el) {
    this.heap.push(el)
    let i = this.heap.length - 1

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2)
      if (this.heap[i] > this.heap[parent]) {
        this.swap(i, parent)
        i = parent
      } else {
        break
      }
    }
  }

  pop() {
    const el = this.heap[0]
    this.heap[0] = this.heap.pop()
    
    let i = 0
    while (true) {
      const left = 2 * i + 1
      const right = 2 * i + 2

      let swap = null 

      if (left < this.heap.length && this.heap[i] < this.heap[left]) {
        swap = left
      }

      if (right < this.heap.length && this.heap[i] < this.heap[right]) {
        if (swap === null || this.heap[swap] < this.heap[right]) {
          swap = right
        }
      }

      if (swap === null) {
        break
      } else {
        this.swap(i, swap)
        i = swap
      }
    }
    
    return el
  }

  swap(i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
}

const heap = new MaxHeap([])
heap.insert(5)
heap.insert(4)
heap.insert(3)
heap.insert(2)
heap.insert(1)
heap.insert(9)
heap.insert(8)
heap.insert(7)
heap.insert(6)
console.log(heap.heap)
console.log(heap.pop(), heap.heap)
console.log(heap.pop(), heap.heap)
console.log(heap.pop(), heap.heap)
console.log(heap.pop(), heap.heap)