// 8 kyu
// What is between?

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]

// ----------------------
// parameters: two ints given. first int will always be less than the second.
// return an array of all values between the two ints, inclusive
// examples
// between(1, 4)  -->  [1, 2, 3, 4]
// between(-2, 2) -->   [-2, -1, 0, 1, 2]
// pseudocode: 
// create an empty array. 
// using a loop, push all values from first int to second int to that array.
// increment by one
// return the array

function between(a, b) {
    let array = [];
    while(a<=b){
        array.push(a);
        a++;
    }
    return array;
}