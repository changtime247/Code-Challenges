// 6 kyu
// Sort the odd

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// parameter: array of integers given
// return modified array such that odd numbers are sorted in ascending order (even numbers remain in their original position)
// examples:
// []                       -->      []
// [5, 3, 1, 8, 0]          -->      [1, 3, 5, 8, 0]
// [5, 3, 2, 8, 1, 4]       -->      [1, 3, 2, 8, 5, 4]
// [5, 3, 2, 8, 1, 4, 11]   -->      [1, 3, 2, 8, 5, 4, 11]
// [-18,-48,18,46,41,-42,2,-2,-39,-31,-26,-40,-10,-30,-8,33,-30,-23,8,15] -->
// [-18,-48,18,46,-39,-42,2,-2,-31,-23,-26,-40,-10,-30,-8,15,-30,33,8,41]
// pseudocode:
// take parameter and use slice so as to not modify it. map the sliced array, assigning elements with an odd value a new value (ex: 'o'). if even, just return the even number. 
// assign return value of map to a variable
// take parameter and use slice once more. filter all odd numbers. sort returned array of odd numbers in descending order
// take variable from previous earlier step and map it. 
// using a conditional, if anytime the array has a value that is not odd (or in our ex, value is "o"), reassign a new value found from using pop on the array that is sorted in descending order
// pop will make sure that we are getting the element at the end of the array, which would make the pop move in an ascending fashion
// else if value is even, just return even

function sortArray(array) {
    let evensAndZeros = array.slice().map(x=>x%2===0?x:'o');
    let odds = array.slice().filter(x=>x%2!==0).sort((a,b)=>b-a);
    return evensAndZeros.map((x,i)=>{
        return x==='o'?array[i]=odds.pop():x;
    })
}