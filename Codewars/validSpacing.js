// 7 kyu
// Valid Spacing
// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).
// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:
// * 'Hello world'   => true
// * ' Hello world'  => false
// * 'Hello world  ' => false
// * 'Hello  world'  => false
// * 'Hello'         => true
// Even though there are no spaces, it is still valid because none are needed:
// * 'Helloworld'    => true
// * 'Helloworld '   => false
// * ' '             => false
// * ''              => true
// Note - there will be no punctuation or digits in the input string, only letters.

// ----------------------
// Parameter: Given a string.
// Return true, if string contains words separated by one space. The string also has no leading or trailing whitespaces.
// Otherwise, false.
// Examples:
// validSpacing('Hello world')    -->  true
// validSpacing(' Hello world')   -->  false
// validSpacing('Hello  world ')  -->  false
// validSpacing('Hello')          -->  true
// validSpacing('Helloworld')     -->  true
// Pseudocode:
// If the string contains any double white space (eg '  '), then return false.
// If the first or last char of string is a whitespace, then return false.
// Otherwise, return true.

function validSpacing(s) {
  if (s.split`  `.length > 1) return false
  if (s[0] === ` ` || s.slice(-1) === ` `) return false
  return true
}
