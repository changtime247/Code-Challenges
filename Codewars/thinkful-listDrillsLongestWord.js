// 7 kyu
// Thinkful - List Drills: Longest word

// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7
// Do not modify the input list.

// ----------------------
// parameters: array of arbitrary strings of varying lengths
// return the length of the longest string
// examples:
// ['simple', 'is', 'better', 'than', 'complex']     -->  7
// ['explicit', 'is', 'better', 'than', 'implicit']  -->  8
// ['beautiful', 'is', 'better', 'than', 'ugly']     -->  9
// pseudocode: slice array, so as to not modify original input
// sort array by comparing lengths of entry a and entry b
// put the longer one first, so as to get an array desconding by length
// return the length of the string at index 0

function longest(words) {
    return words.slice().sort((a,b)=>b.length-a.length)[0].length;
}