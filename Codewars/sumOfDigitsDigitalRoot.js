// 6 kyu
// Sum of Digits / Digital Root
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// ----------------------
// Parameters: Given a positive integer.
// Return a single digit number derived from:
// taking the argument (or a subsequent step's output integer) and checking if the sum of the digits is itself a single digit.
// If not, reassign the argument's value to the sum and repeat until single digit is derived.
// Examples:
// digitalRoot(16)      -->  1 + 6 = 7
// digitalRoot(942)     -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// digitalRoot(132189)  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// digitalRoot(493193)  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
// Pseudocode:
// Create a variable initially set to argument.
// Create a loop that runs as long as that variable is greater than 9 (i.e. any number with two or more digits)
// Inside loop set the new value of variable to be the sum of the individual digits of the argument (or previous value)
// Return the number that satisfies loop condition.

function digitalRoot(n) {
    let ans = n
    while(ans>10){
        ans=ans.toString().split``.reduce((a,k)=>a+=k,0)
    }
    return ans
}