// 8 kyu
// Powers of 2
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// ----------------------
// parameters: non negative int given. 
// return: an array of all the powers of two (2 ** n) starting from n=0 all the way to parameter.
// examples: 
// 0 --> [1]
// 1 --> [1, 2]
// 4 --> [1, 2, 4, 8, 16]
// pseudocode: create array. iterate from 0 to n and push all (2 ** n) values into array.

function powersOfTwo(n){
    let result = [1]
    for(let i = 1; i <= n; i++){
        result.push(2**i)
    }
    return result;
}