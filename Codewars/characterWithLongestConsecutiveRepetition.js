// 6 kyu
// Character with longest consecutive repetition
// For a given string s find the character c (or C) with longest consecutive repetition and return:
// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
// For empty string return:
// ["", 0]

// Given a string.
// Return an array with values of the char of the longest consecutive char and the length of that consecutive series.
// Ex:
// longestRepetition("aaaabb"),      ["a",4]
// longestRepetition("bbbaaabaaaa"), ["a",4]
// longestRepetition("cbdeuuu900"),  ["u",3]
// longestRepetition("abbbbb"),      ["b",5]
// longestRepetition("aabb"),        ["a",2]
// longestRepetition(""),            ["",0]
// longestRepetition("ba"),          ["b",1]
// If there empty arg-string, return ['', 0]
// Create two variables to hold longest char and respective length.
// Create another two variables to hold current char and its respective current length.
// Iterate through each char of string,
//      if consecutive, increment current char length and update longest char and its length
//      otherwise, reset current char and its length.

function longestRepetition(s) {
  if (!s) return ['', 0]
  let c = s[0]
  let l = 1
  let tempC = s[0]
  let tempL = 1
  for (let i = 1; i < s.length; i++) {
    if (tempC == s[i]) {
      tempL++
      if (tempL > l) {
        l = tempL
        c = tempC
      }
    } else {
      tempC = s[i]
      tempL = 1
    }
  }
  return [c, l]
}
