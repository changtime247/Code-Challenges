// 7 kyu
// shorter concat [reverse longer]
// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// Given two strings.
// Return a string in the following format: shorter string + reverse(longer string) + shorter string.
// If strings are of equal length, treat the first argument as the "longer" string.
// First, check for lengths
// If length of a is longer or equal to length of b, then a is sandwiched.
// Else, b is sandwiched.
// Reversing a string can be achieved by splitting and reversing the string and joining

function shorter_reverse_longer(a, b) {
  return a.length >= b.length
    ? `${b}${a.split``.reverse().join``}${b}`
    : `${a}${b.split``.reverse().join``}${a}`
}
