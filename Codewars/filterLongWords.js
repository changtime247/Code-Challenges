// 7 kyu
// Filter Long Words
// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.
// Example:
// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

// Given a sentence string and an integer.
// Return an array of all words in sentence longer than integer.
// Iterate through all words of sentence and filter for words longer than integer.

function filterLongWords(sentence, n) {
  return sentence.split(' ').filter((c) => c.length > n)
}
