// 7 kyu
// Wealth equality, finally!

// The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.

// Their first act in power is absolute wealth equality through coercive redistribution.

// Create a function that redistributes all wealth equally among all citizens.

// Wealth is represented as an array/list where every index is the wealth of a single citizen.
// The function should mutate the input such that every index has the same amount of wealth.
// MUTATE the input array/list, don't return anything.

// See example:

// wealth = [5, 10, 6]  # This represents:
//                      # citizen 1 has wealth 5
//                      # citizen 2 has wealth 10
//                      # citizen 3 has wealth 6

// redistribute_wealth(wealth) # mutates wealth list
// wealth => [7, 7, 7] # wealth has now been equally redistributed
// Info:

// MUTATE the input array/list, don't return anything
// Input is garantueed to hold at least 1 citizen
// Wealth of citizen will an integer with minimum 0 (negative wealth not possible)
// Handling of floating point error will not be tested

// ----------------------
// Parameter: Given an array of numbers representing the wealth of the citizens.
// No return expected. Instead modify the array to make it so that each citizen (i.e. the value at every index) has the same level of wealth.
// Examples:
// twoSum([[1, 2, 3], 4)                   -->     [0, 2]]
// twoSum([[1234, 5678, 9012], 14690)      -->     [1, 2]]
// twoSum([[2, 2, 3], 4)                   -->     [0, 1]]
// twoSum([[2, 3, 1], 4)                   -->     [1, 2]]
// twoSum([-689, 398, 643, 597, 501, -106, -411, 136, 636, -501, -436, 354, 498], -188)
//                                         -->     [ 0, 4 ]
// twoSum([-652, 261, -206, -165, -966, 245, -39, -503, 76, -675, 302, -925, 178, 821, -714, -302, 717, 826, 984, -388, -41, 781], 678)
//                                         -->     [ 6, 16 ]
// Pseudocode:
// Find total wealth of array and divide by length of array. This is the wealth equality number (which is the same for each person).
// Modify array such that every value is replaced with the wealth equality number.

function redistributeWealth(wealth) {
  let wPP = wealth.reduce((a, k) => a + k, 0) / wealth.length
  for (let i = 0; i < wealth.length; i++) {
    wealth[i] = wPP
  }
}
