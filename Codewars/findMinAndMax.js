// 7 kyu
// Find min and max
// Implement a function that returns the minimal and the maximal value of a list (in this order).

// Given an array of values.
// Return an array of the min and max values in that order.
// Ex:
// getMinMax([1]),[1,1]
// getMinMax([1,2]),[1,2]
// getMinMax([2,1]),[1,2]
// Implement helper function that sorts array in ascending order.
// Implement quick sort which sorts by taking an arbitrary value of array and separating the array into 3 groups (lesser, equal, and greater)
//      Using recursion will sort the array in "chunks".
// Return min and max values in an array.

function getMinMax(arr) {
  function sort(a) {
    if (a.length == 0) return []
    else {
      const v = a[0]
      let lesser = []
      let equal = []
      let greater = []
      for (let i = 0; i < a.length; i++) {
        a[i] < v
          ? lesser.push(a[i])
          : a[i] > v
          ? greater.push(a[i])
          : equal.push(a[i])
      }
      return [...sort(lesser), ...equal, ...sort(greater)]
    }
  }

  const sa = sort(arr)

  return [sa[0], sa[sa.length - 1]]
}
