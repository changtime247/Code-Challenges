// 7 kyu
// Is Undefined?
// Help Timmy remove undefined values from his array, you are modifing a callback function which he uses on each element on his array.
// Your task is to finish the isUndefined method which returns true if the value is undefined :)

// Given an argument value, could be anything.
// Return true if it is undefined (otherwise, false)
// isUndefined(1), false
// isUndefined(2), false
// isUndefined(undefined), true
// isUndefined(3), false
// isUndefined(4), false
// Take care of cases where value might be the number 0.
// That is not technically undefined.
// Use built in Boolean method.

function isUndefined(value) {
  return isNaN(value) && Boolean(!value)
}
