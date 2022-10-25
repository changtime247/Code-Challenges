// 5 kyu
// The Hashtag Generator
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// Parameters: Given a string of words and spaces
// Return a string with a octothorp in front of it
// If string is empty or if string length is ultimately over 140 chars, return false
// Ex:
// Pseudocode:
// generateHashtag(""), false
// generateHashtag(" ".repeat(200)), false
// generateHashtag("a".repeat(140)), false
// generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag"
// generateHashtag("Codewars"), "#Codewars"
// generateHashtag("Codewars Is Nice"), "#CodewarsIsNice"
// generateHashtag("Codewars is nice"), "#CodewarsIsNice"
// generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars"
// generateHashtag("a".repeat(139)), "#A" + "a".repeat(138)

function generateHashtag(str) {
  if (!str.trim()) return false
  const hT =
    '#' +
    str.trim().split` `
      .filter((e) => e)
      .map((e) => e.slice(0, 1).toUpperCase() + e.slice(1)).join``
  if (hT.length > 140) return false
  return hT
}
