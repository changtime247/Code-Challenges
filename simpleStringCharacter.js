// 7 kyu
// Simple string characters
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// ----------------------
// Parameter: Given a string.
// Return an array of integers:
// index 0 holds count of uppercase letters
// index 1, count of lowercase letters
// index 2, count of numbers
// index 3, special characters
// Examples:
// solve("Codewars@codewars123.com")                 -->  [1,18,3,2]
// solve("bgA5<1d-tOwUZTS8yQ")                       -->  [7,6,3,2]
// solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H")        -->  [9,9,6,9]
// solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")   -->  [15,8,6,9]
// solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"),              -->  [1,7,3,6]
// solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"),      -->  [7,13,4,10]
// Pseudocode:
// Create an empty array of 4 elements, each initialized to 0.
// Iterate through string.
// For each char of string, increment the corresponding characterization count by one.
// If char is 
// Return array of integers.

function solve(s) {
  return s.split``.reduce(
    (a, k, i, r) => {
      if (k.charCodeAt(0) > 64 && k.charCodeAt(0) < 91) a[0] += 1
      else if (k.charCodeAt(0) > 96 && k.charCodeAt(0) < 123) a[1] += 1
      else if (k.charCodeAt(0) > 47 && k.charCodeAt(0) < 58) a[2] += 1
      else a[3] += 1
      return a
    },
    [0, 0, 0, 0]
  )
}
