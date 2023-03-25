// 7 kyu
// Sum of integers in string
// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
// Note: only positive integers will be tested.

// Given a string with some integers mixed into the string.
// Return the sum of all the consecutive integers of the string.
// Ex:
// sumOfIntegersInString("12.4"), 16
// sumOfIntegersInString("h3ll0w0rld"), 3
// sumOfIntegersInString("2 + 3 = "), 5
// sumOfIntegersInString("Our company made approximately 1 million in gross revenue last quarter."), 1
// sumOfIntegersInString("The Great Depression lasted from 1929 to 1939."), 3868
// sumOfIntegersInString("Dogs are our best friends."), 0
// sumOfIntegersInString("C4t5 are 4m4z1ng."), 18
// sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"), 3635

function sumOfIntegersInString(s) {
  let total = 0
  let num = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] == parseFloat(s[i])) num = `${num}${s[i]}`
    else {
      total += +num
      num = ''
    }
  }
  return total + +num
}
