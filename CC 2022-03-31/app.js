// 8 kyu
// Removing Elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// None of the arrays will be empty, so you don't have to worry about that!

// ----------------------
// parameters: given an array remove all the elements at indices of odd values 
// return an array with only even indexed values
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// pseudocode: if index is even push it into new array

function removeEveryOther(arr){
    let container = [];
    for(let i=0; i<arr.length; i++){
        if (i % 2 === 0) {
        container.push(arr[i])
        }
    }
    return container;
}