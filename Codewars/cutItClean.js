// 7 kyu
// Cut it Clean
// In front of you there's a rope of length len. Your task is to cut the rope into n pieces of "equal" length.
// Return an array of each piece's length. Order is NOT important.
// Requirements:
// Each piece should be an integer (rounded to 0dp).
// The difference between each piece should be diff <= 1.
// Example:
// cut(100, 2) => [50, 50]
// cut(100, 3) => [33, 33, 34]   // [33, 34, 33] and [34, 33, 33] are also acceptable
// Constraints:
// rope length len is: integer
// number of pieces num is: integer
// num <= len

// Given an integer, representing the length of rope, and another integer representing the number of pieces that the rope should be cut (note: no actual unit of measurement, e.g. cm, ft, etc.).
// Return an array of integers, representing the length of all the pieces of rope such that no two piece should have a difference greater than 1 (sum of all pieces should equal total rope length).
// Create an empty array.
// The mod between two arg-integers is the number of longer pieces
// Leftover pieces (or if mod is 0) are shorter pieces.
// Note: shorter piece is the floor of two numbers divided and longer piece is simply one more than the shorter piece.

var cut = function (len, num) {
  let res = []
  const p1 = ~~(len / num)
  const p2 = p1 + 1
  let p2case = len % num
  while (p2case) {
    res.push(p2)
    p2case--
  }
  while (res.length < num) {
    res.push(p1)
  }
  return res
}
