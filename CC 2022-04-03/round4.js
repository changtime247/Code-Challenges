// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// ----------------------
// parameters: two numbers given. give all multiples of the one number UP TO the other number
// return array of multiples
// Examples
// (5, 25) --> [5, 10, 15, 20, 25]
// (1, 2) --> [1, 2]
// (5, 7) --> [5]
// (4, 27) --> [4, 8, 12, 16, 20, 24]
// (11, 54) --> [11, 22, 33, 44]
// pseudocode: use a loop to add to the original number the original number and add that sum to an array each iteration. return that array

function findMultiples(integer, limit) {
    let cointainer = [];
    let ayo = integer;
    while (integer <= limit) {
        cointainer.push(integer);
        integer += ayo;
    }
    return cointainer;
}