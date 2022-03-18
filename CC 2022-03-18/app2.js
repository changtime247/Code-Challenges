// 8 kyu
// If you can't sleep, just count sheep!!
// Task: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// ----------------------
// parameters: given a non-negative num, return a string consisting of all the numbers from 1 to that num
// return string
// Examples
// 0 --> ""
// 1 --> "1 sheep..."
// 2 --> "1 sheep...2 sheep..."
// 3 --> "1 sheep...2 sheep...3 sheep..."
// pseudocode: create an empty array. use a for loop to iterate from 1 to num. at each iteration, push a string to the new array. that string will include the current number (iteration count) and the rest of the string
// return joined array

const countSheep = function (num){
    let sheepPen = [];
    for(let i=1; i<=num; i++){
        sheepPen.push(`${i} sheep...`);
    }
    return sheepPen.join('');
}