// 7 kyu
// Simple Fun #193: Moment Of Time In Space

// You are given a moment in time and space. What you must do is break it down into time and space, to determine if that moment is from the past, present or future.

// Time is the sum of characters that increase time (i.e. numbers in range ['1'..'9'].

// Space in the number of characters which do not increase time (i.e. all characters but those that increase time).

// The moment of time is determined as follows:

// If time is greater than space, then the moment is from the future. If time is less than space, then the moment is from the past. Otherwise, it is the present moment.

// You should return an array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.

// Examples
// For moment = "01:00 pm", the output should be [true, false, false].

// time equals 1, and space equals 7, so the moment is from the past.

// For moment = "12:02 pm", the output should be [false, true, false].

// time equals 5, and space equals 5, which means that it's a present moment.

// For moment = "12:30 pm", the output should be [false, false, true].

// time equals 6, space equals 5, so the moment is from the future.

// Input/Output
// [input] string moment
// The moment of time and space that the input time came from.

// [output] a boolean array
// Array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.

// ----------------------
// parameters: given a string, representing a particular time stamp (eg '12:00 pm', '01:00 am', ...)
// time represents the sum of the characters 1 through 9 that are found in the parameter
// space represents the count of characters other than numbers 1 through 9 that are found in the parameter
// return an array of two falses and one true. the location of the truthy value is in: 
// index 0 if time is greater than space:
// index 1 if time is equal to space:
// index 2 if time is less than space.
// examples:
// "12:30 am"   -->     [false, false, true]
// "12:02 pm"   -->     [false, true, false]
// "01:00 pm"   -->     [true, false, false]
// "11:12 am"   -->     [false, false, true]
// "05:20 pm"   -->     [false, false, true]
// "04:20 am"   -->     [false, true, false]
// pseudocode: split string on spaces and join string with a random character to get around spaces being null
// create two empty arrays. one to hold numbers and the other to hold all other chars.
// loop through the string and if the char is included in a string of numbers 1through9, then push it to the numbers array
// else push it to the other array
// reduce first array to get sum of numbers. get length of other array
// compare the two values in an array literal of length 3
// each slot will compare the numeric value of time and space


function momentOfTimeInSpace(moment) {
    let split=moment.split(' ').join('+'),
        numbers=[],
        others=[];
    for(let i=0;i<split.length;i++){
        let ele = split[i].toString();
        '123456789'.includes(ele) ? numbers.push(ele) : others.push(ele);
    }
    let time = numbers.reduce((a,b)=>+a + +b,0);
    let space = others.length;
    return [time < space, time == space, time > space];
}