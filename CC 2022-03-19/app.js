// 7 kyu
// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.
// Here are the following valid operators :
// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// ----------------------
// parameters: straightforward arithmetic but instead of using numbers, using cheerios (or 'dots')

// return string after the "arithmetic function"

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

// pseudocode: since the string given will always have 3 items, two sequences of dots separated by a arithmetic operator symbol.
// split that string on the 2 spaces.
// this will give back an array of 3 items. 
// if the arithmetic symbol is an addition, add the lengths of the two symbols and return a new string with dots repeated that many times (from the added lengths)
// if subtraction, subtract the lengths and return a new string with dots repeated that many times (from the difference in lengths)
// if multiplication, multiply the lengths and return a new string with dots repeated that many times (from the product)
// if division, divide the lengths and return a new string with dots repeated that many times (from the division)
// note: the division will not take into account floating values. no need to round down as the repeat method will not take into account floating values

function dotCalculator (equation) {
    let dot = '.'
    let split = equation.split(' ');
    let op = split[1];
    return(
    op === "+"  ? dot.repeat(split[0].length + split[2].length) : 
    op === "-"  ? dot.repeat(split[0].length - split[2].length) : 
    op === "*"  ? dot.repeat(split[0].length * split[2].length) : 
    op === "//" ? dot.repeat(split[0].length / split[2].length) : ''
    )
}