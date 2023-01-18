// 6 kyu
// Next Version
// You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.
// Exercice
// Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.
// For example:
// Current           ->  Next version
// "1.2.3"           ->  "1.2.4"
// "0.9.9"           ->  "1.0.0"
// "1"               ->  "2"
// "1.2.3.4.5.6.7.8" ->  "1.2.3.4.5.6.7.9"
// "9.9"             ->  "10.0"
// Rules
// All numbers, except the first one, must be lower than 10: if there are, you have to set them to 0 and increment the next number in sequence.
// You can assume all tests inputs to be valid.

// Given a string representing a version (ex: '1.2.3')
// Return the string when it has been updated (ex: '1.2.4')
// Iterate through version from right to left.
// Add one only to the right most portion of version.
// If it is greater than 10, need to carry the 1 to the next portion of version (moving leftward)
// Only the left most portion of version does not need a check to see if greater than 10.

function nextVersion(version) {
  let arr = version.split`.`
  let carry = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    i === arr.length - 1 ? (arr[i] = +arr[i] + 1) : (arr[i] = +arr[i] + carry)
    if (arr[i] == 10 && i > 0) {
      arr[i] = 0
      carry = 1
    }
  }
  return arr.join`.`
}
