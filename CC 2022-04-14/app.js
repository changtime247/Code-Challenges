// 8 kyu
// repeatIt

// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"

// ----------------------
// parameters: a string and a non-negative value given

// return parameter string repeated or default statement 'Not a string'

// examples:
// repeatIt("*",3)      --> "***"
// repeatIt("Hello",11) --> "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello"

// pseudocode: if str is truthy value, return str repeated n times. else return 'Not a string'

var repeatIt = function(str, n) {
    return str ? str.repeat(n) : 'Not a string';
}