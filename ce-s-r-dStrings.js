// 7 kyu
// Ce*s*r*d Strings

// My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).

// Fortunately, I discovered that the virus hides my censored letters inside root directory.

// It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

// Examples
// uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ➜ "This is very strange"

// uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"

// uncensor("xyz", "") ➜ "xyz"
// Notes
// Expect all discovered letters to be given in the correct order.
// Discovered letters will match the number of censored ones.
// Any character can be censored.

// ----------------------
// Parameters: Given two strings:
// 1. The infected text. There's a bug that changes certain letters in the text to '*'.
// 2. The characters that have been censored (with '*').
// Return the original string (un-virus'ed)
// Examples:
// uncensor('*h*s *s v*ry *tr*ng*', 'Tiiesae') --> 'This is very strange'
// uncensor('A**Z*N*', 'MAIG')                 --> 'AMAZING'
// uncensor('xyz', '')                         --> 'xyz'
// uncensor('', '')                            --> ''
// uncensor('***', 'abc')                      --> 'abc'
// Pseudocode:
// Use for loop to iterate through each letter of discovered.
// Inside for loop, use splice method on split infected string.
// Inside splice method, delete '*' and insert corresponding letter.
// Join and return.

function uncensor(infected, discovered) {
  let infectedArray = infected.split``
  for (let i = 0; i < discovered.length; i++) {
    infectedArray.splice(infectedArray.indexOf('*'), 1, discovered.charAt(i))
  }
  return infectedArray.join``
}
