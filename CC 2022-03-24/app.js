// 7 kyu
// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// ----------------------
// parameters: given a string. modify string to match examples. 
// return formatted string
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// pseudocode: split string. each element's first char must begin with a capitalized form -rest lower case- AND length of each element must match index of that element (eg idx of 0 will repeat 0 times; idx of 1, once, etc...). push that modified element into a new array. join that array with dash and return

function accum(s) {
    let sArr = s.split('');
    let new_sArr = [];
    sArr.forEach((char, idx) => {
        let first = char.toUpperCase();
        let rest = char.toLowerCase().repeat(idx);
        new_sArr.push(first+rest);
    });
    return new_sArr.join('-');
};