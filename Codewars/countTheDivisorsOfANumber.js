// 7 kyu
// Count the divisors of a number

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

// ----------------------
// parameters: positive integer given
// return the number of divisors from 1 through n (the parameter)
// examples:
// prime numbers will return 2, since it is only divisible by 1 and itself, by definition
// getDivisorsCnt(1)       -->     1
// getDivisorsCnt(10)      -->     4
// getDivisorsCnt(11)      -->     2
// getDivisorsCnt(54)      -->     8
// pseudocode: set count at 0
// loop through numbers starting from n and working backwards to 1 (so decrement by 1),
// for each iteration, check if that numeric value is a divisor of n. 
// if it is, add 1 to count
// return final count

function getDivisorsCnt(n){
    let count=0;
    for(let z=n; z>0; z--){
        if(n%z==0) count++
    }
    return count;
}