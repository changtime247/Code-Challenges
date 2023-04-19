// 7 kyu
// Make a square box!
// Easy; Make a box
// Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
// Like this:
// n = 5
// [
//   '-----',
//   '-   -',
//   '-   -',
//   '-   -',
//   '-----'
// ]
// n = 3
// [
//   '---',
//   '- -',
//   '---'
// ]

// Given an integer.
// Return an array of length arg-integer to form a box.
// Ex:
// box(5), ["-----", "-   -", "-   -", "-   -", "-----"]
// box(2), ["--", "--"]
// box(4), ["----", "-  -", "-  -", "----"]
// box(6), ["------", "-    -", "-    -", "-    -", "-    -", "------"]
// box(3), ["---", "- -", "---"]
// Create two separate strings, one for top and bottom of box and other for middle section of box.
// Top and bottom are strings consisting only of '-'.
// Middle section are strings consisting of '-' at the edge and ' ' in the middle.
// Assemble according to arg-integer (string length and array length are of arg-integer).

function box(n) {
  const topAndBot = '-'.repeat(n)
  let mid = Array.from(
    { length: n - 2 },
    () =>
      Array.from({ length: n }, (_, i) => (i == 0 || i == n - 1 ? '-' : ' '))
        .join``
  )
  mid.unshift(topAndBot)
  mid.push(topAndBot)
  return mid
}
