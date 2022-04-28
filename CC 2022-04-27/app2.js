// 7 kyu
// Leap Years

// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

// ----------------------
// parameters: positive integer given
// return boolean indicating whether the year is a leap year or not
// examples:
// 1234  -->  false
// 1984  -->  true
// 2000  -->  true
// 2010  -->  false
// 2013  -->  false
// pseudocode: 
// the order of the following three will be important:
// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// leap years are divisible by 4 (hence, every 4 years)
// AND
// this must not be true: the leap year is divisible by 100 and the leap year is not divisible by 400
// in other words: if it ends in the digits -00 AND it is not divisble by 400, then it is not a leap year
// invert the previous line to capture leap years
// return the two joined by logcial operator &&

function isLeapYear(year) {
    return (year%4===0) && !(year%100===0 && year%400!==0);
}