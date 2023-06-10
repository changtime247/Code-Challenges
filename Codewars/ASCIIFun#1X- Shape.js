// 6 kyu
// ASCII Fun #1: X- Shape
// You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.
// Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o
// Examples
//                                      ■□□□■
//             ■□■                      □■□■□
//   x(3) =>   □■□             x(5) =>  □□■□□
//             ■□■                      □■□■□
//                                      ■□□□■

// Given an odd integer, n.
// Return a string which is an X-shaped ASCII art composed of '□' and '■'.
// See above for examples.
// Create an array of length n.
// Within array are subarrays, also of length n, filled with '□'.
// Iterate from outer indices to the inner index of array and subarrays simultaneously.
//      At each iteration, progressively working from outer to inner of subarrays, replace the corresponding value at the indices with '■'.
// Return a string by joining subarrays on '' and the array on a new line.

function x(n) {
  let arr = Array(n)
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    let inner = Array(n).fill('□')
    inner[i] = '■'
    inner[inner.length - 1 - i] = '■'
    let line = inner.join``
    arr[i] = line
    arr[arr.length - 1 - i] = line
  }
  return arr.join`\n`
}
