// 7 kyu
// Most Likely
// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.
// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.
// So:
// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

// Given two probabilities as strings, each with format "[num1]:[num2]".
// Return whether the first string is more probable than the second (i.e. greater).
// Ex:
// mostLikely('1:3','1:2'),false
// mostLikely('1:2','1:3'),true
// Compare the values calculated from the probabilities.
// Return whether first is greater.

function mostLikely(prob1, prob2) {
  function calcProb(str) {
    let nums = str.split`:`
    return nums[0] / nums[1]
  }
  return calcProb(prob1) > calcProb(prob2)
}
