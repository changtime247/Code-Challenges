// 8 kyu
// Difference of Volumes of Cuboids
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.

// ----------------------
// parameters: given two arrays, each consisting of three numerical values
// return difference of the two arrays, each reduced to just the product 
// examples:
// [3, 2, 5],    [1, 4, 4]),    --> 14
// [9, 7, 2],    [5, 2, 2]),    --> 106
// [11, 2, 5],   [1, 10, 8]),   --> 30
// [4, 4, 7],    [3, 9, 3]),    --> 31
// [15, 20, 25], [10, 30, 25]), --> 0
// pseudocode: reduce both arrays to the product of the three numbers. subtract the two products. return the absolute value of the difference

function findDifference(a, b) {
    const volume = arr => arr.reduce((a,b)=>a*b,1);
    return Math.abs(volume(a)-volume(b));
}