// 7 kyu
// The First Non Repeated Character In A String
// You need to write a function, that returns the first non-repeated character in the given string.
// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.
// You can assume, that the input string has always non-zero length.
// Examples
// "test"   returns "e"
// "teeter" returns "r"
// "trend"  returns "t" (all the characters are unique)
// "aabbcc" returns null (all the characters are repeated)

// Given a string.
// Return first non-repeated char in string.
// Ex:
// firstNonRepeated("1122321235121222"), '5'
// firstNonRepeated("rend"), 'r'
// Create a map of each char to count of that char in string.
// Iterate through string and check if the count of that char is 1 (referencing the map).
// Return the first char that has frequency of 1.
// If none, return null.

function firstNonRepeated(s) {
  let obj = s.split``.reduce((a, c) => (a[c] = (a[c] || 0) + 1) && a, {})
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] == 1 && res == '') res = s[i]
  }
  return res ? res : null
}
