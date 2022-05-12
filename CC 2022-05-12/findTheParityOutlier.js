// 6 kyu
// Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// ----------------------
// parameters: array of integers given. one element of the array will be an outlier
// if array is full of even integers, one of them will be odd
// if array is full of odd integers, one of them will be even
// return the outlier value
// examples:
// [0, 1, 2]                       -->         1
// [1, 2, 3]                       -->         2
// [2,6,8,10,3]                    -->         3
// [0,0,3,0,0]                     -->         3
// [1,1,0,1,1]                     -->         0
// [2, 4, 0, 100, 4, 11, 2602, 36] -->         11
// [160, 3, 1719, 19, 11, 13, -21] -->         160
// pseudocode: slice and map array to change all elements to the absolute value of x%2
// this will change all the array elements to either 0 or 1, since a number can only be even or odd, respectively.
// set the returned array to a variable
// reduce the array to get sum of all elements (which will contain either 0 or 1)
// if value is 1, then we know that the outlier is an odd number
// otherwise, if value is not 1, the outlier is even
// using findIndex, locate the index of outlier and use bracket notation to find the value of the index of the original parameter
// return the value at that index

function findOutlier(integers){
    let sliced = integers.slice().map(x=>Math.abs(x%2));
    let reduced = sliced.reduce((a,b)=>a+b,0);
    return reduced===1?integers[sliced.findIndex(x=>x===1)]:integers[sliced.findIndex(x=>x===0)];
}