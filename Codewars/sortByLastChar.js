// 7 kyu
// Sort by Last Char

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// ----------------------
// Parameter: Given a string of words
// Return an array of the same words of the string but sorted alphabetically based on last letter of each word (not the first letter)
// Examples:
// last('man i need a taxi up to ubud')             --> ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano') --> ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak')                       --> ['take', 'me', 'semynak', 'to']
// Pseudocode:
// Split string into individual words
// Sort the array of words
// Sort function will compare elements' last letter charCode, using slice
// Return entire expression

function last(x){
    return x.split` `.sort((a,b)=>a.slice(-1).charCodeAt(0) - b.slice(-1).charCodeAt(0));
}