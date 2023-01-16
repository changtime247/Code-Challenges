// 7 kyu
// String Scramble
// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.
// Ex:
// scramble('abcd', [0,3,1,2]) -> 'acdb'
// The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corresponding numbers in the index array.
// In other words, put the first character in the string at the index described by the first element of the array
// You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).

// Given a string and an array of integers (lengths of two will be same)
// Return string derived from rearranging argument string, according to placement instructions of argument array.
// Ex:
// scramble('abcd', [0,3,1,2]), 'acdb'
// scramble('sc301s', [4,0,3,1,5,2]), "c0s3s1"
// scramble('bskl5', [2,1,4,3,0]), "5sblk"
// Create a variable set to empty array, used to hold the new string
// Iterate through arg-array. At each iteration,
//      place at new array's index (taken from value of arg-array) the char corresponding to char from str (corresponding to iteration count)

function scramble(str, arr) {
  let newStr = []
  arr.forEach((v, i) => {
    newStr[v] = str[i]
  })
  return newStr.join``
}
