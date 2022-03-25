// 7 kyu
// Two to One
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// ----------------------
// parameters: given two strings consisting of only letters. must combine strings sorted alphabetically. remove all duplicate letters.
// return new sorted string
// Examples
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// pseudocode: concatenate strings. split into array of each char. sort. filter out duplicates. return joined array.

const longest = (s1, s2) => (s1+s2).split('').sort().filter((val,idx,arr)=>arr.indexOf(val)===idx).join('');