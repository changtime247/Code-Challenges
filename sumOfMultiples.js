// 8 kyu
// Sum of Multiples

// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// ----------------------
// parameters: two nums given. both nums will be positive ints. 
// return the sum of all multiples of n, up to m, excluding m
// examples:
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
// pseudocode: if m or n is not positve, return 'INVALID'
// in order to get the multiples of n, we should increment by n each time.
// this means, we will need a loop. 
// create an empty array to store the multiples.
// a while loop with a condition of n being less than m will capture all the multiples. 
// reduce the array to return the sum

function sumMul(n,m){
    if(n<=0 || m<=0) return "INVALID"
    const preserve_n = n;
    let arr = [];
    while(n < m){
        arr.push(n);
        n+=preserve_n;
    }
    return arr.reduce((a,v)=>a+v,0);
}