// 7 kyu
// String Merge!

// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"

// ----------------------
// parameters: two different strings given along with a string consisting of one letter of alphabet. 
// return a concatenated string, which is comprised of first portion of first string and second portion of second string, each portion determined by relative position of first occurence of the letter
// examples:
// stringMerge("person","here", "e")                    -->    "pere"
// stringMerge("apowiejfoiajsf","iwahfeijouh", "j")     -->    "apowiejouh"
// stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x")     -->    "abcdefxxxyyyxyzz"
// stringMerge("12345654321","123456789", "6")          -->    "123456789"
// stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d")  -->    "JiOdddasdfdfsd"
// stringMerge("incredible","people", "e")              -->    "increople"
// pseudocode: split string1 on letter. use index 0 to get at the first portion of split string
// slice string2 from the first occurence of the letter onwards (to get the second portion of string)
// return the concatenation of the two portions

function stringMerge(string1, string2, letter){
    return string1.split(letter)[0] + string2.slice(string2.indexOf(letter));
}