// 6 kyu
// I'm longer than you!
// Create a function longer that accepts a string and sorts the words in it based on their respective lengths in an ascending order. If there are two words of the same lengths, sort them alphabetically. Look at the examples below for more details.
// longer("Another Green World") => Green World Another
// longer("Darkness on the edge of Town") => of on the Town edge Darkness
// longer("Have you ever Seen the Rain") => the you Have Rain Seen ever
// Assume that only only Alphabets will be entered as the input. Uppercase characters have priority over lowercase characters. That is,
// longer("hello Hello") => Hello hello

// Given a string - i.e. words delimited by a space
// Return new string of words (delimited by a space) in which the words are sorted as follows:
// 1. Shorter words precede longer words
// 2. Capitalized words precede uncapitalized words (given same length)
// 3. Words of same length (and both capitalized or both uncapitalized) are alphabetized
// Sort through each word of string and sort accordingly.

function longer(s) {
  return s.split` `.sort((a, b) => a.length - b.length || a > b).join` `
}
