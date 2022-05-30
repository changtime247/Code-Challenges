// 7 kyu
// Incrementer

// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

// Notes:
// return an empty array if your array is empty
// arrays will only contain numbers so don't worry about checking that
// Examples:
// [1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

// [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
//                                        #  9+3 = 12  -->  2

// ----------------------
// Parameters: Given an array of integers
// Return the array with each element being the sum of itself and its index position, with the starting position being index 1 (NOT index 0). 
// Examples:
// incrementer([])                                           -->   []
// incrementer([1, 2, 3])                                    -->   [2, 4, 6]
// incrementer([4, 6, 7, 1, 3])                              -->   [5, 8, 0, 5, 8]
// incrementer([3, 6, 9, 8, 9])                              -->   [4, 8, 2, 2, 4]
// incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8])   -->   [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]
// Pseudocode: 
// Map method on array will return an array with same number of elements as the argument
// Each element will be modified in this way: the element itself (the number at a specified index) added with the specified index + 1 (because JS is index 0 yet we're starting at index 1 in problem)
// That sum, if two or more digits, should only be the ones digit (ones digit, tens digit, hundreds digit...).
// In order to get only the ones digit of each number, use modulo. Sum % 10, this expression, will give just the ones digit.
// Return entire map method expression

function incrementer(nums) { 
    return nums.map((e,i)=>(e+i+1)%10);
}