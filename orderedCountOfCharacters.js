// 7 kyu
// Ordered Count of Characters

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. 
// For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// ----------------------
// parameters: given string
// return: an array of arrays, each consisting of an individual letter of the string and the count of said letter (number of occurrences of said letter)
// (note: array will not have duplicate letters and original order must be preserved)
// examples:
// "abracadabra"                          -->  [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
// "Code Wars"                            -->  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]
// "233312"                               -->  [['2', 2], ['3', 3], ['1', 1 ]]
// "88729786452128269361610908649552177530799531"   -->  [['8', 5 ], ['7', 5 ], ['2', 5 ], ['9', 6 ], ['6', 5 ], ['4', 2 ], ['5', 5 ], ['1', 5 ], ['3', 3 ], ['0', 3 ]]
// pseudocode: 
// split the parameter into an array of letters
// reduce the array, with initial value specified as a new Map object (using the keyword 'new')
// use the set method on the accumulator to assign it a key-value of pair corresponding to the individual letters of the string and the count of said letter
// if the accumulator already has the letter, add one to the value
// else if the accumulator does not have the letter yet, set value to one
// return array from the return value (the map object from previous line)

const orderedCount = function(text){
    return Array.from(text.split``.reduce((m,k)=>m.set(k, m.has(k)?m.get(k)+1:1),new Map()))
}