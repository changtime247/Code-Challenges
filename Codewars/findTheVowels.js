// 7 kyu
// Find the vowels

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

// ----------------------
// Parameter: Given a string
// Return indices of all vowels (1 based index, NOT 0 based), in an array
// Examples:
// vowelIndices('mmm')                                  -->    []
// vowelIndices('apple')                                -->    [1, 5]
// vowelIndices('super')                                -->    [2, 4]
// vowelIndices('orange')                               -->    [1, 3, 6]
// vowelIndices('supercalifragilisticexpialidocious')   -->    [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]
// Pseudocode:
// First, make string lowercase, as case is irrelevant.
// Split string into individual letters.
// Map the entire array. In map method, if element is a vowel, make the element into an index.
// Filter the mapped array for elements with type of as number.
// Return entire expression.

function vowelIndices(word) {
  return word
    .toLowerCase()
    .split('')
    .map((x, idx) => ('aeiouy'.includes(x) ? idx + 1 : x))
    .filter((x) => typeof x === 'number')
}
