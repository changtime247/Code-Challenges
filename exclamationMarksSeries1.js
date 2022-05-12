// 8 kyu
// Exclamation marks series #1: Remove an exclamation mark from the end of string

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// ----------------------
// parameters: given a string
// return string modified, such that if there is an exclamation point at the end of the string, it should be removed.
// note that it is just one exclamation point that should be removed. see below ex. 
// examples:
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// pseudocode: use slice to check if last char of string is "!". 
// if it is then return string with that part sliced out
// else just return string

function remove (string) {
    return string.slice(-1)==='!'?string.slice(0,-1):string;
}