// 7 kyu
// Spinning Rings

// Imagine two rings with numbers on them. The inner ring spins clockwise (decreasing by 1 each spin) and the outer ring spins counter clockwise (increasing by 1 each spin). We start with both rings aligned on 0 at the top, and on each move we spin each ring one increment. How many moves will it take before both rings show the same number at the top again?

// The inner ring has integers from 0 to innerMax and the outer ring has integers from 0 to outerMax, where innerMax and outerMax are integers >= 1.

// e.g. if innerMax is 2 and outerMax is 3 then after
// 1 move: inner = 2, outer = 1
// 2 moves: inner = 1, outer = 2
// 3 moves: inner = 0, outer = 3
// 4 moves: inner = 2, outer = 0
// 5 moves: inner = 1, outer = 1
// Therefore it takes 5 moves for the two rings to reach the same number
// Therefore spinningRings(2, 3) = 5
// e.g. if innerMax is 3 and outerMax is 2 then after
// 1 move: inner = 3, outer = 1
// 2 moves: inner = 2, outer = 2
// Therefore it takes 2 moves for the two rings to reach the same number
// spinningRings(3, 2) = 2

// ----------------------
// Parameters: Two integers representing the maximum number of two rings (rings contain all integers from 0 to said integer), with both rings starting at 0.
// The inner ring spins clockwise or decreases by 1 after each spin (starting from 0 and then the max number, 1 less than max, 2 less than max...)
// The outer ring spins counter clockwise or increases by 1 after each spin
// Return an integer representing the number of spins it takes to get the same value for both inner and outer ring
// Examples:
// spinningRings(2, 3)     -->     5
//      Explanation: 
//      since both start at 0... 
//      0 move: inner = 0, outer = 0
//      1 move: inner = 2, outer = 1
//      2 moves: inner = 1, outer = 2
//      3 moves: inner = 0, outer = 3
//      4 moves: inner = 2, outer = 0
//      5 moves: inner = 1, outer = 1
//      Therefore spinningRings(2, 3) = 5
// spinningRings(3, 2)     -->     2
// spinningRings(1, 1)     -->     1
// spinningRings(2, 2)     -->     3
// spinningRings(3, 3)     -->     2
// Pseudocode:
// Create three variables:
// one for a counter initialized to 0
// another for the inner ring/ array that represents all the possible integers of the inner ring (but descending order from max to 1). To this array, unshift 0 to the front of array
// and the other for the outer ring/ array that represents all the possible integers of the outer ring (from 0 to max of outer)
// Use a do... while loop to add 1 to the counter while the value at whatever index i mod (innerring [ or outerring] max number + 1)
// Adding 1 to the counter is in essence 1 revolution of a ring
// Return i after the loop.

function spinningRings(innerMax, outerMax) {
    let i=0,
        inA  = [0, ...Array.from({length:innerMax},(_,i)=>i+1).reverse()],
        outA = Array.from({length:outerMax+1},(_,i)=>i);
    do{
      i++;
    } while(inA[i%(innerMax+1)]!==outA[i%(outerMax+1)]);
    return i;
};