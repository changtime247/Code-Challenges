// 7 kyu
// Find array
// You are given two arrays arr1 and arr2, where arr2 always contains integers.
// Write a function such that:
// For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] the function returns ['a', 'a']
// For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] the function returns [1, 1, 1]
// For arr1 = [0, 3, 4], arr2 = [2, 6] the function returns [4]
// For arr1=["a","b","c","d"] , arr2=[2,2,2], the function returns ["c","c","c"]
// For arr1=["a","b","c","d"], arr2=[3,0,2] the function returns ["d","a","c"]
// Note that when an element inside arr2 is greater than the index of the last element of arr1 no element of arr1 should be added to the resulting array. If either arr1 or arr2 is empty, you should return an empty arr (empty list in python, empty vector in c++). Note for c++ use std::vector arr1, arr2.

// Given two arrays, arr1 and arr2. arr2 will contain only integers.
// Return an array of values that correspond to the values of arr1 at indices corresponding to values to arr2.
// Ex:
// findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]), ['a', 'a']
// findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]), [1, 1, 1]
// findArray([1, 2, 3, 4, 5], [0]), [1]
// findArray([1, 2, 3, 4, 5], [4,2,0]), [5,3,1]
// findArray([1, 2, 3, 4, 5], [2,2,2]), [3,3,3]
// findArray(['this', 'is', 'test'], [0, 1, 2]), ['this', 'is', 'test']
// findArray([1,2,3], []), []
// findArray([0,1,2,3], [0,1]), [0,1]
// findArray([], [2,1,3]), []
// findArray([], []), []
// Create an empty array.
// Iterate through all values of arr2
//      push corresponding values found in arr1 to the newly created array.

function findArray(arr1, arr2) {
  let ans = []
  arr2.forEach((v) => {
    if (arr1[v] || arr1[v] === 0) ans.push(arr1[v])
  })
  return ans
}
