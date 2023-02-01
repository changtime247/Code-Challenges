// 6 kyu
// Arrays Similar
// Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.
// const arr1 = [1, 2, 2, 3, 4],
//       arr2 = [2, 1, 2, 4, 3],
//       arr3 = [1, 2, 3, 4],
//       arr4 = [1, 2, 3, "4"]
// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false

// Given two arrays.
// Return a boolean indicating whether the arrays contain same elements and same number of those elements.
// Transform argument arrays into objects containing elements (and the type) as keys and number of occurrences as values.
// If resulting objects are the same, return true; Else, false.

function arraysSimilar(arr1, arr2) {
  let ret = true
  let obj1 = objectFromArray(arr1)
  let obj2 = objectFromArray(arr2)

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) ret = false
  }
  for (const key in obj2) {
    if (obj1[key] !== obj2[key]) ret = false
  }
  return ret
}

function objectFromArray(arr) {
  return arr.reduce(
    (a, c) => ((a[`${c}${typeof c}`] = (a[`${c}${typeof c}`] || 0) + 1), a),
    {}
  )
}
