// 7 kyu
// Sorting Dictionaries
// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?
// Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).
// The list must be sorted by the value and be sorted largest to smallest.
// Examples
// sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
// sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]

// Given an object, dict.
// Return an array of subarrays containing the key-value pairs from the arg-object, sorted by value in descending order.
// Ex:
// sortDict({1:3,2:2,3:1})                  -->   [[1,3],[2,2],[3,1]]
// sortDict({3:1,2:2,1:3})                  -->   [[1,3],[2,2],[3,1]]
// sortDict({1:2,2:4,3:6})                  -->   [[3,6],[2,4],[1,2]]
// sortDict({1:5,3:10,2:2,6:3,8:8})         -->   [[3,10],[8,8],[1,5],[6,3],[2,2]]
// sortDict({'a':6,'b':2,'c':4})            -->   [['a',6],['c',4],['b',2]]
// sortDict({'aldo':6,'boris':2,'igor':6})  -->   [['aldo',6],['igor',6],['boris',2]]
// Transform dict into an array.
// Sort the array of subarrays by value in descending order. 
// Iterate through the sorted array. If key has a numeric data value, make key a number. 

function sortDict(dict) {
  return Object.entries(dict)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => (k == parseFloat(k) ? [parseFloat(k), v] : [k, v]))
}
