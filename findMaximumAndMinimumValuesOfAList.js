// 8 kyu
// Find Maximum and Minimum Values of a List
// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

// ----------------------
// parameters: non-empty array given
// two functions: one returning the min value and the other, the max value
// examples
// finindg min [-52, 56, 30, 29, -54, 0, -110] -->  -110
// finindg min [42, 54, 65, 87, 0]             -->  0
// finindg max [4,6,2,1,9,63,-134,566]         -->  566
// finindg max [5]                             -->  5
// pseudocode: to find a min or max numeric value of an array of numbers, the array must first be sorted
// ascending order vs descending order to find min and max, respectively
// use index 0 to return the min and max values indexed at 0 in the sorted array

var min = function(list){
    list.sort((p,c)=>p-c)
    return list[0];
}

var max = function(list){
    list.sort((p,c)=>c-p)
    return list[0];
}