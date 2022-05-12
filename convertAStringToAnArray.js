// 8 kyu
// Convert a string to an array
// Write a function to split a string and convert it into an array of words.

// ----------------------
// parameters: given string
// return array of words of the string
// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]
// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
// pseudocode: split on space and return

function stringToArray(string){
    return string.split(" ");
}