// 7 kyu
// Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// ----------------------
// parameters: string given
// if the length of the string is even, return middle two chars
// else if odd, return the single middle char.
// examples:
// "test"        -->     "es"
// "testing"     -->     "t"
// "middle"      -->     "dd"
// "A"           -->     "A"
// pseudocode: there are only two cases: if string length is odd or even. 
// if it is even, then return value is two chars, the one where index is equal to one less than length/2 and the other is the next on index list.
// if odd, the return the rounded down number of the length/2. 

function getMiddle(s){
    if(s.length%2===0){
        return s[(s.length/2)-1] + s[(s.length/2)];
    } else return s[Math.floor(s.length/2)];
}