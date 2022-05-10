// 7 kyu
// Palindrome chain length

// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

// Example
// For example, start with 87:

//   87 +   78 =  165     - step 1, not a palindrome
//  165 +  561 =  726     - step 2, not a palindrome
//  726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!
// 4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

// Additional info
// Some interesting information on the problem can be found in this Wikipedia article on Lychrel numbers.

// ----------------------
// parameters: positive integer given
// return the number of steps it takes to return a palindrome number from the positive integer, where the positive integer,
// if it is not a palindrome, is added to its reversed version (ex: 12345 + 54321). 
// if the sum is a palindrome, then the number of steps that it took is 1, in above case.
// otherwise, if not palindrome, repeat the addition of itself with its reversed version
// examples
// palindromeChainLength(87) --> 4 because:
// 87  +   78 =  165   -   step 1, not a palindrome
// 165 +  561 =  726   -   step 2, not a palindrome
// 726 +  627 = 1353   -   step 3, not a palindrome
// 1353+ 3531 = 4884   -   step 4, palindrome!
// palindromeChainLength(1)   -->  0
// palindromeChainLength(88)  -->  0
// palindromeChainLength(10)  -->  1
// palindromeChainLength(87)  -->  4
// palindromeChainLength(89)  -->  24
// pseudocode: create variable to store the number of steps it took to get palindrome. initialize to 0, since no steps have been taken thusfar
// while the parameter is not equal to its reverse (use toString and split to reverse the array)
// add one to step and take the step which is to add the number to its reverse
// assign the parameter the value of the sum
// while loop will run as long as condition is not met
// once met the while loop will stop executing
// return i
// if parameter

var palindromeChainLength = function(n) {
    let i=0;
    while(n!==+n.toString().split``.reverse().join``){
        i++;
        n+=+n.toString().split``.reverse().join``;
    }
    return i;
};