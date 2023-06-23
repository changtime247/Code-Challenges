function dominator(arr) {
    let hash = arr.reduce((a, c) => (a[c] = (a[c] || 1) + 1) && a, {})
    const entries = Object.entries(hash).sort((a, b) => b[1] - a[1])
    if(entries[0][1] <= arr.length / 2 || entries[0][1] === entries[1][1])
      return -1
    return +entries[0][0]
  }
  