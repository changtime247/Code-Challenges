// 7 kyu
// Adding Arrays

// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

// Examples:

// arrAdder([
// ['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']
// ]) // => "Just Live Life Man"

// arrAdder([ 
//   [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//   [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//   [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//   [ '', 'o', '', '', 'e', '', '', 'l' ],
//   [ '', 'c', '', '', 'r', '', '', '' ],
//   [ '', 'h', '', '', 'h', '', '', '' ],
//   [ '', 'o', '', '', 'o', '', '', '' ],
//   [ '', 'n', '', '', 'u', '', '', '' ],
//   [ '', 'd', '', '', 's', '', '', '' ],
//   [ '', 'r', '', '', 'e', '', '', '' ],
//   [ '', 'i', '', '', '', '', '', '' ],
//   [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mitochondria is the powerhouse of the cell"

// ----------------------
// parameters: given 2-d array, that's supposed to represent a random string of words
// value of each element of subarray is the value at the nth index of every word
// if there is no 'value' at nth index of subarray (because there are no more letters for that particular word), it will be an empty string
// return the string
// examples
// arrAdder([
//     ['J','L','L','M'],
//     ['u','i','i','a'],
//     ['s','v','f','n'],
//     ['t','e','e','']
//     ]) // => "Just Live Life Man"
    
//     arrAdder([ 
//       [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//       [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//       [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//       [ '', 'o', '', '', 'e', '', '', 'l' ],
//       [ '', 'c', '', '', 'r', '', '', '' ],
//       [ '', 'h', '', '', 'h', '', '', '' ],
//       [ '', 'o', '', '', 'o', '', '', '' ],
//       [ '', 'n', '', '', 'u', '', '', '' ],
//       [ '', 'd', '', '', 's', '', '', '' ],
//       [ '', 'r', '', '', 'e', '', '', '' ],
//       [ '', 'i', '', '', '', '', '', '' ],
//       [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mitochondria is the powerhouse of the cell"
// pseudocode: take the first subarray and map it (this is because we need to get each word of the sentence)
// within map method, reduce the parameter array, so as to extract the values at the nth index of every subarray
// map will return an array of completely 'assembled' words
// join the array on a space (ie as the delimiter)
// return string

function arrAdder(arr) {
    return arr[0].map((x,idx)=>arr.reduce((a,v)=>a+=v[idx],'')).join(' ');
}