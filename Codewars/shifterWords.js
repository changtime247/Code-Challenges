// 7 kyu
// Shifter words
// You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees, can be read, although sometimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".
// We will call a word "shifter" if it consists only of letters "H", "I", "N", "O", "S", "X", "Z", "M" and "W". After turning the sheet, this word can also be read, although in a different way. So, the word "WOW "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter.
// Find the number of unique shifter words in the input string (without duplicates). All shifters to be counted, even if they are paired (like "MOM" and "WOW"). String contains only uppercase letters.
// Examples
// shifter("SOS IN THE HOME") === 2 // shifter words are "SOS" and "IN"
// shifter("WHO IS SHIFTER AND WHO IS NO") === 3 // shifter words are "WHO", "IS", "NO"
// shifter("TASK") === 0 // no shifter words
// shifter("") === 0 // no shifter words in empty string

// Given a string of words separated by a space.
// Return the number of unique words that are a "shifter" word (i.e. able to spell same or different word if rotated 180deg).
// Ex:
// shifter("ON"), 1
// shifter("OS IS UPDATED"), 2
// shifter("WHO IS WHO"), 2
// shifter("JS"), 0
// shifter("I III I III"), 2
// shifter(""), 0
// Create a counter variable initialized to 0.
// Iterate through each unique word of arg-string.
//      If it is a shifter word (i.e. consists only of the following: "H", "I", "N", "O", "S", "X", "Z", "M" and "W")
//          increment counter.

function shifter(s) {
  return s
    ? [...new Set(s.split` `)].reduce((a, c) => {
        if (c.split``.every((char) => 'HINOSXZMW'.includes(char))) a++
        return a
      }, 0)
    : 0
}
