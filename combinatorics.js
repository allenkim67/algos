function powerset(arr) {
  if (arr.length === 0) {
    return [[]]
  } else {
    const subsets = powerset(arr.slice(1))
    return subsets
      .map(subset => subset.concat(arr[0]))
      .concat(subsets)
  }
}

function permutations(arr) {
  if (arr.length === 0) {
    return [[]]
  } else {
    return permutations(arr.slice(1))
      .map(p => {
        const perms = []
        for (let i = 0; i <= p.length; i++) {
          perms.push(
            p.slice(0, i).concat(arr[0]).concat(p.slice(i))
          )
        }
        return perms
      })
      .reduce((a, b) => a.concat(b))
  }

}

function combinations(arr, n) {
  if (n === 0) {
    return [[]]
  } else {
    return arr.map((el, i) => {
      const spliced = arr.slice(0, i).concat(arr.slice(i + 1))
      return combinations(spliced, n - 1).map(c => c.concat(el))
    })
    .reduce((a, b) => a.concat(b))
  }
}

function intPartitions(sum) {
  function makeRange(start, end) {
    if (!end) {
      end = start
      start = 0
    }
    const r = []
    for (let i = start; i < end; i++) {
      r.push(i)
    }
    return r
  }
  const partitions = []
  const range = makeRange(1, sum + 1)
  for (const n of range) {
    if (n === sum) {
      partitions.push([n])
    }
    if (n < sum) {
      const ps = intPartitions(sum - n).map(p => p.concat(n))
      partitions.push(ps)
    }
  }
  return partitions
}

console.log(intPartitions(3))