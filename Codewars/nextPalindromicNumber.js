// 7 kyu
// Next Palindromic Number.
// There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.
// In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.
// Let's see:
// For Javascript
// nextPal(11) == 22
// nextPal(188) == 191
// nextPal(191) == 202
// nextPal(2541) == 2552
// You will be receiving values higher than 10, all valid.
// Enjoy it!!

// Given a positive number greater than 10.
// Return the next palindromic number (greater than argument).
// nextPal(11), 22
// nextPal(188), 191
// nextPal(191), 202
// nextPal(2541), 2552
// Create helper function to check if argument passed in is a palindrome.
// In main function:
//  While n+1 is not palindrome, increment by 1.

function nextPal(val) {
  let num = val + 1
  while (!checkIfPalindrome(num)) {
    num += 1
  }
  return num
}

function checkIfPalindrome(n) {
  let arr = n.toString().split``
  for (let i = 0; i < ~~(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false
  }
  return true
}
