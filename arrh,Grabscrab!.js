// 6 kyu
// Arrh, grabscrab!
// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.
// At long last, we need a way to unscramble what these pirates are saying.
// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.
// For example:
// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"].
// Return matches in the same order as in the dictionary. Return an empty array if there are no matches.
// Good luck!

// ----------------------
// Parameters: Given a string (anagram) and an array of strings.
// Return only the strings of the array that have the exact same letters (and count of letters) as the argument string (the anagram).
// Examples:
// grabscrab("trisf", ["first"])                              -->  ["first"]
// grabscrab("oob", ["bob", "baobab"])                        -->  []
// grabscrab("ainstuomn", ["mountains", "hills", "mesa"])     -->  ["mountains"]
// grabscrab("oolp", ["donkey", "pool", "horse", "loop"])     -->  ["pool", "loop"]
// grabscrab("ortsp", ["sport", "parrot", "ports", "matey"])  -->  ["sport", "ports"]
// grabscrab("ourf", ["one","two","three"])                   -->  []
// Pseudocode:
// Sort string alphabetically. This is the anagram string.
// Filter through the array to find all elements, after sorting it alphabetically, that match the anagram string.
// Return filter value.

function grabscrab(anagram, dictionary) {
  let std = sortStr(anagram)
  return dictionary.filter((r) => sortStr(r) === sortStr(std))
}

function sortStr(str) {
  return str.split``.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join``
}
