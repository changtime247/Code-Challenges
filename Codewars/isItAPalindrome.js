// 8 kyu
// Is it a palindrome?
// Write a function that checks if a given string (case insensitive) is a palindrome.

// ----------------------
// parameters: given a string
// return true if string is a palindrome (same frontwards and backwards). upper case and lower case does not matter. just letters need to be same.
// Examples
// ("a")       --> true
// ("aba")     --> true
// ("Abba")    --> true
// ("hello")   --> false
// ("Bob")     --> true
// ("Madam")   --> true
// ("AbBa")    --> true
// ("")        --> true
// pseudocode: in order to reverse a string, first turn string into an array. lowercase the string in case 
// first split. then reverse. then join. lowercase string. check if equal to original string. return boolean

function isPalindrome(x) {
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase();
}