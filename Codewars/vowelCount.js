// 7 kyu
// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// ----------------------
// parameters: string given and consider only aeiou. count how many vowels there are.
// return value should be a number representing count of vowels
// Example: "abracadabra" --> 5 
// pseudocode: initialize count to 0. split string and filter array for only vowels. get length or count off each element

function getCount(str) {
    var vowelsCount = 0;
    str.toLowerCase().split('').filter(x=>'aeiou'.includes(x)?vowelsCount++:vowelsCount);
    return vowelsCount;
}