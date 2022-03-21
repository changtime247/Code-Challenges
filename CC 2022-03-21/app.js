// 7 kyu
// Case Swapping
// Given a string, swap the case for each of the letters.
// Examples
// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"

// ----------------------
// parameters: given a string, return string with lower case letters being swapped for upper case letters
// note: if empty string, return empty string.
// return new sorted string
// Examples:
// ""           -->   "" 
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"
// pseudocode: split string to map each char of string. in map, create function to check if lower case. if true, make upper case. if false, make lower case. only either or scenario.
// join mapped array and return

function swap(str){
    return str.split('').map(x=>x===x.toLowerCase()?x.toUpperCase():x.toLowerCase()).join('');
}