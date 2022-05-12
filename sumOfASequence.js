// 7 kyu
// Sum of a sequence

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// ----------------------
// parameters: three non-negative values given
// from those numbers, imagine an array beginning from the 'begin' parameter, ending at 'end' parameter, and incremented by 'step' value
// use conditional to return 0 if begin is greater than end
// else return the sum of the begin parameter value with the function of the exact same parameters except for the begin parameter, which will now be passed as begin+step
// examples:
// 2,2,2            --> 2
// 2,6,2            --> 12 (2 + 4 + 6)
// 1,5,1            --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3            --> 5 (1 + 4)
// 689, 473, 66     --> 0
// pseudocode: if begin value is greater than the end parameter, there is no need to move on further. simply return 0
// else, use recursion to find sum of all the parameters incremented by step
// base case will be the starting number, which is begin

const sequenceSum = (begin, end, step) => {
    return begin>end?0:begin+sequenceSum(begin+step,end,step);
};