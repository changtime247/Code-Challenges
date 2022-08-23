// 6 kyu
// Title Case
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
// ###Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

// ----------------------
// Parameter: Given a string of words delimited by a space. Optionally given a space-delimited list of words that may be excluded from titlecase (ex. a, the, in, etc.)
// Return string in title case.
// Examples:
// titleCase('')                                    -->  ''
// titleCase('a clash of KINGS', 'a an the of')     -->  'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In')   -->  'The Wind in the Willows'
// titleCase('the quick brown fox')                 -->  'The Quick Brown Fox'
// Pseudocode:
// Lowercase both title and minorWords to standardize it.
// Iterate through each word of the title.
// If word is first word, then title case it.
// If word is not an excluded word, then titlecase it (first letter uppercase and rest of the letters lowercase).
// If word is an excluded word, then keep it as is (it's lowercase).
// Return string expression.

function titleCase(title, minorWords) {
  if (title === ``) return ``
  let arrMinorWords = []
  if (minorWords) arrMinorWords = minorWords.toLowerCase().split` `
  return title.toLowerCase().split` `.map((word, i) => {
    if (i === 0 || !arrMinorWords.includes(word)) return capitalize(word)
    if (arrMinorWords.includes(word)) return word
  }).join` `
}

function capitalize(w) {
  return w.split``.map((ltr, idx) => {
    return idx === 0 ? ltr.toUpperCase() : ltr.toLowerCase()
  }).join``
}
