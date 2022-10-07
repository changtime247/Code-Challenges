// 7 kyu
// 99 Bottles of Beer
// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.
// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters
// Lyrics
// [ "99 bottles of beer on the wall, 99 bottles of beer.",
//   "Take one down and pass it around, 98 bottles of beer on the wall.",
//   "98 bottles of beer on the wall, 98 bottles of beer.",
//   ...and so on...
//   "3 bottles of beer on the wall, 3 bottles of beer.",
//   "Take one down and pass it around, 2 bottles of beer on the wall.",
//   "2 bottles of beer on the wall, 2 bottles of beer.",
//   "Take one down and pass it around, 1 bottle of beer on the wall.",
//   "1 bottle of beer on the wall, 1 bottle of beer.",
//   "Take one down and pass it around, no more bottles of beer on the wall.",
//   "No more bottles of beer on the wall, no more bottles of beer.",
//   "Go to the store and buy some more, 99 bottles of beer on the wall." ]

// Parameter: None.
// Return entire '99 Bottles of Beer' song lyrics as an array of strings with each line as a new element.
// Example: See above.
// Pseudocode: create an empty array.
// Create a for loop decrementing from 99 to 0.
// At each iteration, push two elements to newly created array.
// First element is a string, which goes like: "x bottle(s) of beer on the wall, x bottle(s) of beer.",
// And the second element is a string, which goes like: "Take one down and pass it around, x-1 bottle(s) of beer on the wall.",
// A few workarounds needed (within the loop):
// a. Casing - when we get to 2, change plurals to singulars.
// b. Phrasing - when we get to 0, use 'no more', with correct capitalization for 'no'.
// c. Last line is unique - "Go to the store and buy some more,"
// Return array.

const sing = () => {
  let arr = []
  for (let bot = 99; bot > -1; bot--) {
    const countInWords = (num) => (num ? num : 'No more')
    const grammar = (num) => (num !== 1 ? 's' : '')
    let repeatedPhrase = `${countInWords(bot)} bottle${grammar(bot)} of beer`
    let str1 = `${repeatedPhrase} on the wall, ${repeatedPhrase.toLowerCase()}.`
    let str2 = bot
      ? `Take one down and pass it around, ${
          countInWords(bot - 1) > 0
            ? countInWords(bot - 1)
            : countInWords(bot - 1).toLowerCase()
        } bottle${grammar(bot - 1)} of beer on the wall.`
      : 'Go to the store and buy some more, 99 bottles of beer on the wall.'
    arr.push(str1)
    arr.push(str2)
  }
  return arr
}
