// 8 kyu
// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?

// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples
// isOpposite("ab","AB") should return true;
// isOpposite("aB","Ab") should return true;
// isOpposite("aBcd","AbCD") should return true;
// isOpposite("AB","Ab") should return false;
// isOpposite("","") should return false;

// ----------------------
// Parameters: Given two strings.
// Return a boolean value:
// true, if the letters of str1 are all the same letters of str2 AND those letters are opposite cases:
// false, if otherwise.
// Examples:
// isOpposite("ab","AB")       --> true
// isOpposite("aB","Ab")       --> true
// isOpposite("aBcd","AbCD")   --> true
// isOpposite("aBcde","AbCD")  --> false
// isOpposite("AB","Ab")       --> false
// isOpposite("","")           --> false
// Pseudocode:
// Split str1 to get each char and use reduce method, setting initial value to 0
// Inside reduce method, check if char at whatever index is not equal to char at char at that same index of split str2 AND the two chars are equal if both are made to be lower case. 
// If conditions are met, add 0 to accumulator.
// If conditions are not met, add 1 to accumulator
// Check if entire reduce method returns numeric value 0
// Check if the lengths are same
// Check if neither strings are empty
// If pass the 3 checks, boolean value returned is true (else false)

function isOpposite(s1,s2){
    return s1!=0 && s2!=0 && 
           s1.length===s2.length && 
           s1.split``.reduce((a,k,i,r)=> (k!==s2.split``[i] && k.toLowerCase()===s2.split``[i].toLowerCase() ? a+=0 : a+=1)&&a , 0)===0;
}