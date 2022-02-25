// 8 kyu
// Check same case
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

// ----------------------
// parameters: two letters given and must check if same case
// return 1, 0 or -1
// examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1
// pseudocode: if not a letter return -1. if same case return 1 - check case conditions else 0

function sameCase(a, b){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(!letters.includes(a) || !letters.includes(b)) return -1;
    return typeof a !== "string"  || typeof b !== "string" ? -1 :
    ((a.toLowerCase() === a && b.toLowerCase() === b) || (a.toUpperCase() === a && b.toUpperCase() === b)) ? 1 : 0;
}