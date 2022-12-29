// 7 kyu
// Ball and Cups
// Ronny the robot is watching someone perform the Cups and Balls magic trick. The magician has one ball and three cups, he shows Ronny which cup he hides the ball under (b), he then mixes all the cups around by performing multiple two-cup switches (arr). Ronny can record the switches but can't work out where the ball is. Write a programme to help him do this.
// Rules:
// There will only ever be three cups.
// Only two cups will be swapped at a time.
// The cups and their switches will be refered to by their index in a row of three, beginning at one. So [[1,2]] means the cup at position one, is swapped with the cup at position two.
// Arr will be an array of integers 1 - 3 organised in pairs.
// There won't be any empty sub-arrays.
// If arr is just an empty array b should be returned.
// Examples:
// (b) = 2, (arr) = [[1,2]]
// The ball is under cup number : 1
// (b) = 1, (arr) = [[2,3],[1,2],[1,2]]
// The ball is under cup number : 1
// (b) = 2, (arr) = [[1,3],[1,2],[2,1],[2,3]]
// The ball is under cup number : 3

// Given a number (representing the initial location of ball - in cup 1, cup 2,or cup 3) and an array of subarrays, which only ever contains numbers 1,2,or 3 (representing cup swaps).
// Return final location of ball.
// Loop through array. At each iteration:
//  if cup under which ball is located is in subarray, then new ball location is the other value of that subarray.
// Return final location.

function cupAndBalls(b, arr) {
  return arr.reduce((a, c) => (a === c[1] ? c[0] : a === c[0] ? c[1] : a), b)
}
