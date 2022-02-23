// 7 kyu
// Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction
// Task
// Create a function shuffleIt. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.
// Example:
// shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
// shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
// shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]

// ----------------------
// parameters: two or more parameters. 
// first parameter is an array of numbers. 
// subsequent parameters will each be an array of two numbers, representing the indices of the first array.
// using the numbers representing the indices, swap the values at those indices.
// return the modified array (the first parameter modified)
// examples
// [1,2,3,4,5],[1,2])              --> [1,3,2,4,5]
// [1,2,3,4,5],[1,2],[3,4])        --> [1,3,2,5,4]
// [1,2,3,4,5],[1,2],[3,4],[2,3])  --> [1,3,5,2,4]
// pseudocode: use the rest parameter (not a spread operator since it is being used in the parameter portion of the function declaration)
// to catch all the parameters subsequent to the first parameter (undetermined amount)
// using a for loop, iterate through all the given parameters (from the second parameter on)
// the stopping condition will be once we get the the end of parameters or the end of the length
// using destructuring, swap the values at the indices of the first array
// return the modified arr

function shuffleIt(arr,...theRest){
    for(var i=0; i<theRest.length; i++){
        [arr[theRest[i][0]],arr[theRest[i][1]]] = [arr[theRest[i][1]],arr[theRest[i][0]]]
    }
    return arr
}