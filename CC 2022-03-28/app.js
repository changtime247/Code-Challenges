// 8 kyu
// Enumerable Magic #20 - Cascading Subsets

// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

// ----------------------
// parameters: given an array and a number representing the length that the new arrays should have
// return 2D array
// Examples
// each_cons([1,2,3,4], 2) #=> [[1,2], [2,3], [3,4]]
// each_cons([1,2,3,4], 3) #=> [[1,2,3],[2,3,4]]
// pseudocode: initialize empty array. use for loop to loop through original array. in loop, use slice to push the needed portion of original array into new array. return that new array after loop finishes

function eachCons(array, n) {
    let contain = [];
    for(let i=0; i<array.length-n+1; i++){
        contain.push(array.slice(i, n+i))
    }
    return contain;
}