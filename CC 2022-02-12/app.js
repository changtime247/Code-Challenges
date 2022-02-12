// 8 kyu
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// ----------------------
// parameters: none. we're defining a method on String prototype
// return value should be a modified string, such that each char of the string will have the opposite case
// lower to upper and vice versa. Non-alphabetical characters are unaffected
// examples
// "hello world".toAlternatingCase()                        -->     "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase()                        -->     "hello world"
// "hello WORLD".toAlternatingCase()                        -->     "HELLO world"
// "HeLLo WoRLD".toAlternatingCase()                        -->     "hEllO wOrld"
// "12345".toAlternatingCase()                              -->     "12345"
// "1a2b3c4d5e".toAlternatingCase()                         -->     "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() -->     "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// "Hello World".toAlternatingCase().toAlternatingCase()    -->     "Hello World"
// pseudocode: split string to get individual char. use map to change each element to its opposite case
// note non-alphabet chars will not be changed
// join to return a new string from the mapped array

String.prototype.toAlternatingCase = function () {
    return this.split('').map(x=>x===x.toLowerCase()?x.toUpperCase():x.toLowerCase()).join('');
}