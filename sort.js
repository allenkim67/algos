function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    const temp = arr[minIdx]
    arr[minIdx] = arr[i]
    arr[i] = temp
  }
  return arr
}

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      const temp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = temp
    }
  }
  return arr
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
  }

  function merge(arr1, arr2) {
    const merged = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i])
        i++
      } else {
        merged.push(arr2[j])
        j++
      }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j))
  }
}

function quickSort(arr, left, right) {
  left = left || 0
  right = right || arr.length - 1

  if (left < right) {
    const pidx = partition(arr, left, right)
    quickSort(arr, left, pidx - 1)
    quickSort(arr, pidx + 1, right)
  }

  return arr

  function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  
  function partition(arr, left, right) {
    const pivot = arr[right]
    let i = left
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        swap(arr, i ,j)
        i += 1
      }
    }
    swap(arr, i, right)
    return i
  }
}