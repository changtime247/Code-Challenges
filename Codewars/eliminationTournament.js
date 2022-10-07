// 6 kyu
// Elimination Tournament

// In this Kata you will be given an array (or another language-appropriate collection) representing contestant ranks. You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.

// During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. This goes on until one contestant only is left. If the number of contestants is odd, the last one of the current array becomes the first of the next round.

// At the end of the competition, return the results of all the rounds in the form of array of arrays.

// Example:
// input = [9, 5, 4, 7, 6, 3, 8, 2];

// output = [
//   [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
//   [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2
//   [9, 8],                    // results of 9 vs 7 and 6 vs 8
//   [9]                        // results of 9 vs 8
// ];
// Notes:

// Array length will alway be >= 2 and <= 100
// Elements of the array will always be >=1 and <= 100
// Input must not be altered.

// ----------------------
// Parameters: Given an array of positive integers, representing competeing contestants (before any matches occurred)
// Return an array, containing subarrays, which represent the winning contestants at end of each successive tournament round. All rounds must be represented in the array.
// Examples:
// tourney([ 9, 5, 4, 7, 6, 3, 8, 2 ])     -->     [ [ 9, 5, 4, 7, 6, 3, 8, 2 ], [ 9, 7, 6, 8 ], [ 9, 8 ], [ 9 ] ]
// tourney([ 9, 5, 4, 7, 6, 3, 8 ])        -->     [ [ 9, 5, 4, 7, 6, 3, 8 ], [ 8, 9, 7, 6 ], [ 9, 7 ], [ 9 ] ]
// tourney([46,10,67,91,28,81,89,17,93,83,20,21,44,6,3,13,6,42,71,77,51,29,93,57,98,22,84,69,21,57,99,98,25,43,24,39,89,40,34,30,11,70,49,38,88,53,98,55,54,53,14,44,74,31,48,14,86,59,72,93,97,3,2,83,74,95,1,65,15,42,58,8,57,37,54,42,21,72,85,75,41,60,92,6,32,26,79])
//                                         -->     [[  46, 10, 67, 91, 28, 81, 89, 17, 93, 83, 20, 21, 44, 6, 3, 13, 6, 42, 71, 77,
//                                                     51, 29, 93, 57, 98, 22, 84, 69, 21, 57, 99, 98, 25, 43, 24, 39, 89, 40, 34,
//                                                     30, 11, 70, 49, 38, 88, 53, 98, 55, 54, 53, 14, 44, 74, 31, 48, 14, 86, 59,
//                                                     72, 93, 97, 3, 2, 83, 74, 95, 1, 65, 15, 42, 58, 8, 57, 37, 54, 42, 21, 72,
//                                                     85, 75, 41, 60, 92, 6, 32, 26, 79 ],
//                                                 [   79, 46, 91, 81, 89, 93, 21, 44, 13, 42, 77, 51, 93, 98, 84, 57, 99, 43, 39,
//                                                     89, 34, 70, 49, 88, 98, 54, 44, 74, 48, 86, 93, 97, 83, 95, 65, 42, 58, 57,
//                                                     54, 72, 85, 60, 92, 32 ],
//                                                 [   79, 91, 93, 44, 42, 77, 98, 84, 99, 89, 70, 88, 98, 74, 86, 97, 95, 65, 58,
//                                                     72, 85, 92 ],
//                                                 [91, 93, 77, 98, 99, 88, 98, 97, 95, 72, 92],
//                                                 [92, 93, 98, 99, 98, 95],
//                                                 [93, 99, 98],
//                                                 [98, 99],
//                                                 [99]]
// Pseudocode:
// The return value should be an array of subarrays. So create a variable set to an array with first value as parameter array.
// Every tournament round involves pairs facing off (which is greater). So after each tournament, the number of contestants are halved (we are dealing with powers of 2).
// While the original number of contestants is greater than 2 to the power of one less than the length of the new array, push subarrays into a newly created array at each iteration.
// (ex: if there are 8 contestants, there will be 4 rounds because 2**(4-1) >= 8)
// (ex: if there are 9 contestants, there will be 5 rounds because 2**(5-1) >= 9)
// Create a helper function to, after a tournament round, get a new array consisting of the winners (the greater numbers of all the pairs).
// In helper function:
//   - create empty array to hold winners
//   - if, for that tournament round, the number of contestants is odd, set aside the odd man out (since unable to pair that contestant with another contestant)
//   - use for loop to determine the winners (increment by 2 not by 1, since we're dealing with pairs) and push winners into newly created array.
//   - if the array was odd, add the odd man out back as first contestant of the winners array
//   - if the array was even, nothing else to do
//   - return array
// Back in main function, push the winners to the array of subarrays.
// Set the contestants equal to the winners array.
// Iterate while the original number of contestants is greater than 2 to the power of one less than the length of the array of subarrays.
// Return that array once condition met.

const tourney = (arr) => {
  let allResults = [arr]
  let contestantsAtEachRound = arr
  while (arr.length > 2 ** (allResults.length - 1)) {
    allResults.push(fight(contestantsAtEachRound))
    contestantsAtEachRound = fight(contestantsAtEachRound)
  }
  return allResults
}

const fight = (arr) => {
  let results = []
  let arrLength = arr.length % 2 ? arr.length - 1 : arr.length
  for (let i = 0; i < arrLength; i += 2) {
    arr[i] > (arr[i + 1] || 0)
      ? results.push(arr[i])
      : results.push(arr[i + 1] || 0)
  }
  return arr.length % 2 ? [arr[arrLength], ...results.slice()] : results
}
