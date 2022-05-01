// 7 kyu
// Sum of odd numbers

// Given the triangle of consecutive odd numbers:

//                 1
//              3     5
//           7     9    11
//       13    15    17    19
//    21    23    25    27    29
// 31    33    35    37    39    41
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 --> 1
// 2 --> 3 + 5 = 8
// 3 --> 7 + 9 + 11 = 27
// 4 --> 13 + 15 + 17 + 19 = 64
// 5 --> 21 + 23 + 25 + 27 + 29 = 125

// ----------------------
// parameters: arbitrary positive integer given
// also the premise of the challenge hinges on having an array of consecutive odd integers starting from 1,
// each line being the length of the depth (line 2 has length 2. 3, 3... so on so forth)
// being arranged as a tree (seen above)
// return the sum of the line that has length value of whatever the parameter is
// examples
// rowSumOddNumbers(1)     -->     1
// rowSumOddNumbers(42)    -->     74088
// rowSumOddNumbers(129)   -->     2146689
// rowSumOddNumbers(337)   -->     38272753
// pseudocode: if n is not greater than 2, it is not part of the odd tree. so in this case, return n.
// create an array representing the line on the tree, that is n (parameter) levels down
// the starting number can be found by summing up all the positive numbers less than n, multiplying it by 2, and adding one
// so  3 levels down, would give us 7
// and 4 levels down, would give us 13
// once you have the starting number, create an array representing the line of interest. 
// return the sum of that array
// the sum of each line is equivalent to the each line number raised to the 3rd power
// line #1 --> 1
// line #2 --> 8
// line #3 --> 27
// line #4 --> 64
// line #5 --> 125

function rowSumOddNumbers(n) {
	return Math.pow(n,3);
}