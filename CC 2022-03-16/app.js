// 8 kyu
// Count Odd Numbers below n

// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

// ----------------------
// parameters: given a positive int. how many odd numbers are there from 1 to n
// return a number representing the number of positive odd numbers below n
// Examples
// 2 --> 1
// 4 --> 2
// 6 --> 3
// 7 --> 3
// 15 --> 7
// 15023 --> 7511
// pseudocode: there will always be an equal or almost equal amount of even to odd numbers, given any n.
// we floor down to account for those "almost" equal amount of even to odd numbers. why? because a fraction of a number will never equal a whole number

function oddCount(n){
    return Math.floor(n/2)
}