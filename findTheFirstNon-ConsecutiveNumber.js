// 8 kyu
// Find the first non-consecutive number
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// ----------------------
// parameters: given an array of ints. (could be empty)
// return the first non consecutive int
// Example
// [1,2,3,4,6,7,8] --> 6
// pseudocode: use find. condition is that the element must equal to the value at index 0 plus the index of the element in question
// find the first one that is not equal. 
// now the hard part. once you have that result, it could be null or 0 as well. must test for those cases and return null or 0 appropriately. 0 and null are not the same BTW!
// using Number.isInteger find out if the result is indeed a number. if not null. 
// return the result or null

function firstNonConsecutive (arr) {
    let result = arr.find((ele,idx)=>ele!==arr[0]+idx)
    return Number.isInteger(result) ? result : null;
}