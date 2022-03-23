// 7 kyu
// Day of the Year
// Work out what number day of the year it is.
// toDayOfYear([1, 1, 2000]) => 1
// The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.
// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:
// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.

// ----------------------
// parameters: given an array representing a date [day, month, year]. find out what numerical day of the year it is. 
// return an int representing the day of the year (365 or 366, leap year accounted for)
// Examples:
// [25, 12, 2017] --> 359,
// [31, 10, 1991] --> 304
// [1, 5, 3000] --> 121
// [14, 3, 1066] --> 73
// [5, 11, 1604] --> 310
// [31, 12, 2000] --> 366
// [31, 12, 2001] --> 365
// [31, 12, 2004] --> 366
// [31, 12, 2100] --> 365
// Pseudocode: 
// - create array of 12 elements each representing how many days there are in month x+1 (x starts at 0)
// - use if statement to check whether provided year is a leap year or not (using modulus). if leap year, february has one extra day. make necessary change to that array of the months
// - using month given, add all prior months days count, using reduce. to that sum, add the number days that have passed for the current month. return the final sum

function toDayOfYear(arr) {
    let daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31];
    if (arr[2] % 4 === 0 && arr[2]%100!==0 && arr[2]%400!==0){
        daysInMonths[1]=29
    }
    if(arr[1] > 1) {
        return daysInMonths.slice(0, arr[1]-1).reduce((a,b)=>a+b) + arr[0]
    } else return arr[0]
}