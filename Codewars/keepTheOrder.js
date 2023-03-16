// 7 kyu
// Keep the Order
// 35892% of 318898 of 1,849narayanswa306632 Issues Reported
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.
// Do not modify the input.
// Some examples:
// keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//                       ^(index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
//           ^(index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
//                 ^(index 2)
// Also check out my other creations — Naming Files, Elections: Weighted Average, Identify Case, Split Without Loss, Adding Fractions, Random Integers, Implement String#transpose, Implement Array#transpose!, Arrays and Procs #1, and Arrays and Procs #2.
// If you notice any issues or have any suggestions/comments whatsoever, please don't hesitate to mark an issue or just comment. Thanks!

// Given a sorted array of numbers and a single number.
// Return the lowest possible index that the single number can be "inserted" into the sorted array (while still keeping the sorted order).
// Iterate through array and find index at which value can be inserted.

function keepOrder(ary, val) {
  const res = ary.findIndex((n) => val <= n)
  return res > -1 ? res : ary.length
}
