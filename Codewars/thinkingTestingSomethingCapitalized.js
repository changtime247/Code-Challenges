// 7 kyu
// Thinking & Testing : Something capitalized
// No Story
// No Description
// Only by Thinking and Testing
// Look at result of testcase, guess the code!

// Given a string.
// Return string such that the last letter of every "word" (delimited by a space) is capitalized.
// Ex:
// testit(""), ""
// testit("a"), "A"
// testit("b"), "B"
// testit("a a"), "A A"
// testit("a b"), "A B"
// testit("a b c"), "A B C"
// testit("afdas bfda cfds"), "afdaS bfdA cfdS"
// testit("zaza"), "zazA"
// testit("fdashui fhduai fdahui"), "fdashuI fhduaI fdahuI"
// Iterate through each word to capitalize the last letter of each word.

function testit(s) {
  return s.split` `.map((w) => w.slice(0, -1) + w.slice(-1).toUpperCase())
    .join` `
}
