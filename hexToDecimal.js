// 8 kyu
// Hex to Decimal
// Complete the function which converts hex number (given as a string) to a decimal number.

// ----------------------
// parameters: string given, representing a hex number, 
// meaning the letters of the English alphabet indicate numerals greater than 9
// For ex: for hexadecimal numbers (base 16), A through F are used

// return that hex number as a decimal number

// examples:
// hexToDec("1")   -->  1
// hexToDec("a")   -->  10
// hexToDec("10")  -->  16
// hexToDec("FF")  -->  255
// hexToDec("-C")  --> -12

// pseudocode: parseInt() takes two parameters. a string and an int from 2-36, which represents the base number (or radix).
// since we want the hex number as a decimal, we set the base to 16

function hexToDec(hexString){
    return parseInt(hexString, 16)
}