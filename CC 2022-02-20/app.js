// 8 kyu
// Is it even?

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// ----------------------
// parameter: one arbitrary number (pos or neg). decimal possible
// return boolean - true for even and false for odd
// examples:
// testEven(0)   -->  true
// testEven(0.5) -->  false
// testEven(1)   -->  false
// testEven(2)   -->  true
// testEven(-4)  -->  true
// pseudocode: use modulus to determine whether the given parameter is odd or even

function testEven(n) {
    return n%2===0;
}