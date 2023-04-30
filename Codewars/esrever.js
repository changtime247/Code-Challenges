// 7 kyu
// esreveR
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
// (the dedicated builtin(s) functionalities are deactivated)

// Given an array.
// Return the reversed version of array (without using built-in method).
// Ex: 
// reverse([1,2,3]), [3,2,1]
// reverse([1,null,14,"two"]), ["two",14,null,1]
// Iterate through array to unshift values onto new array.

reverse = function (array) {
  let newArr = []
  array.forEach((v) => newArr.unshift(v))
  return newArr
}
