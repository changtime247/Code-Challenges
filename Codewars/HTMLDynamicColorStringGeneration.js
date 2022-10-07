// 6 kyu
// HTML dynamic color string generation
// Generate a valid randomly generated hexadecimal color string. Assume all of them always have 6 digits.
// Valid Output
// - #ffffff
// - #FfFfFf
// - #25a403
// - #000001
// Non-Valid Output
// - #fff
// - #aaa
// - #zzzzz
// - cafebabe
// - #a567567676576756A7

// ----------------------
// Parameter: None.
// Return a string representing a random hexadecimal color.
// Examples:
// generateColor()  -->  #000000
// generateColor()  -->  #ffffff
// generateColor()  -->  #FFFFFF
// Pseudocode:
// Possible characters for the string are: '0123456789abcdefABCDEF'.
// Create a variable set to '#'.
// Create a loop that iterates randomly through the string of possible characters and adds it to the variable set to '#'.
// Loop stops once hexadecimal string reaches length of 7.
// Return that string.

var generateColor = function () {
  const allChars = '0123456789abcdefABCDEF'
  let ans = '#'
  while (ans.length !== 7) {
    const x = ~~(Math.random() * allChars.length)
    ans += allChars[x]
  }
  return ans
}