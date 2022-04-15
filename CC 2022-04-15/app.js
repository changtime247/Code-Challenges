// 7 kyu
// Filter unused digits

// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

// ----------------------
// parameters: we're given an arbitrary number of paramters, each being an int (not explicitly stated but positive nums)
// return digit(s) (0 through 9) that is(are) not included given parameters, ascending order, as a string 
// examples:
// unusedDigits(12, 34, 56, 78) --> "09"
// unusedDigits(2015, 8, 26)    --> "3479"
// unusedDigits(20154, 8, 26)    --> "379"
// pseudocode: we do not know how many parameters will be given
// to capture all parameters use the spread operator. 
// in order to cross check it with digits 0 through 9, create a string with digits 0-9
// no need to mess around with sort if creating the string with digits in ascending order
// with that newly created string filter out any digit that is included in the given parameters. 
// return the outcome (ie string with parameter-given-digits filtered out) as a string

function unusedDigits(...rest) {
    let parametersArrayed = [...rest].join('').split('');
    return '0123456789'.split('').filter(ele=>!parametersArrayed.includes(ele)).join('');
}