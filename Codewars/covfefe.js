// 7 kyu
// Covfefe
// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.
// For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

// Given a string of words, that may or may not contain the word "coverage".
// Return a string of words such that all instances of "coverage" is replaced by "covfefe".
// If there is no instance of "coverage", return arg-string with "covfefe" added at the end of string.
// Ex:
// covfefe("coverage"),"covfefe"
// covfefe("coverage coverage"),"covfefe covfefe"
// covfefe("nothing"),"nothing covfefe"
// covfefe("double space "),"double space  covfefe"
// covfefe("covfefe"),"covfefe covfefe"
// covfefe("erag"),"erag covfefe"
// Convert string to array of words.
// Iterate through array and convert any "coverage" instance with "covfefe".
// Return array as string.
// If no "coverage", return arg-string with "covfefe" added at end.

function covfefe(str) {
  let isCovfefe = false
  let newStr = str.split` `.map((s) => {
    if (s == 'coverage') {
      isCovfefe = true
      s = 'covfefe'
    }
    return s
  }).join` `
  return isCovfefe ? newStr : `${str} covfefe`.trim()
}
