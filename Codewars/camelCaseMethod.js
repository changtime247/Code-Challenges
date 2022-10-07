// 6 kyu
// CamelCase Method
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
// For instance:
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

// ----------------------
// Parameter: Given a normal string (not camel case)
// Return the string camel-cased (first letter is also capitalized in this kata)
// Examples:
// "hello case".camelCase()           -->  "HelloCase"
// "camel case word".camelCase()      -->  "CamelCaseWord"
// "camel casing".camelCase()         -->  "CamelCasing"
// "camel casing test".camelCase()    -->  "CamelCasingTest"
// "capital and capital".camelCase()  -->  "CapitalAndCapital"
// Pseudocode:
// Split string on space and map array to capitalize first letter of every word.
// Join on empty string and return

String.prototype.camelCase = function () {
  return this.split` `.map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join``
}
