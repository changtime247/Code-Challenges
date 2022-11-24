// 7 kyu
// sPoNgEbOb MeMe
// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?
// "Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme
// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.
// Example:
// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

// Given a string.
// Return a string with the cases alternating between uppercase and lowercase.
// Create a variable set to empty string to hold the return value.
// Loop through argument.
// If even index value, concat onto newly created variable the uppercase letter.
// If odd index value, concat onto newly created variable the lowercase letter.
// Return the variable.

function spongeMeme(sentence) {
  return sentence.split``.reduce((a, c, i) => {
    i % 2 ? (a += c.toLowerCase()) : (a += c.toUpperCase())
    return a
  }, '')
}
