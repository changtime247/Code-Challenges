// 8 kyu
// Heads and Legs

// #Description

// Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

// “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?”

// Where x <= 1000 and y <=1000

// #Task

// Assuming there are no other types of animals, work out how many of each animal are there.

// Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.

// In the form:

// [Heads, Legs] = [72, 200]

// VALID - [72, 200] =>             [44 , 28]   
//                              [Chickens, Cows]

// INVALID - [72, 201] => "No solutions"
// However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.

// There are many different ways to solve this, but they all give the same answer.

// You will only be given integers types - however negative values (edge cases) will be given.

// ----------------------
// parameters: two nums given, representing the count of heads of both chickens and cows and the count of legs of both
// we are assuming that no cow or chicken is missing a head and/or legs
// return the number of chicken and cows as an array
// examples:
// valid numbers returned
// animals(72, 200)         -->  [44, 28])
// animals(116, 282)        -->  [91, 25])
// animals(12, 24)          -->  [12, 0])
// animals(6, 24)           -->  [0, 6])
// animals(344, 872)        -->  [252, 92])
// animals(158, 616)        -->  [8, 150])
// Invalid number of animals
// animals(25, 555)         --> "No solutions"
// animals(12, 25)          --> "No solutions"
// animals(54, 956)         --> "No solutions"
// animals(5455, 54956)     --> "No solutions"
// Edge cases
// animals(-1, -1)          --> "No solutions"
// animals(-45, 5)          --> "No solutions"
// animals(500, 0)          --> "No solutions"
// animals(0, 500)          --> "No solutions"
// animals(5, -55)          --> "No solutions"
// pseudocode: if either heads or legs are negative, no solution is possible
// create two variables reprsenting the values that needs to be returned in an array
// num of chickens and num of cows in and array
// calculate number of cows by subtracting the number of legs by a doubled head count
// dividing the difference by two will give us the number of cows
// this is because a cow has double the legs of a chicken
// we subtract the number of heads from the number of cows to get num of chicken
// return chicken count and cow count in array form

function animals(heads, legs){
    if (heads <0 || legs<0) return 'No solutions'
    let numO = (legs - 2*heads)/2
    let numK = heads - numO
    if (numK <0 || numO<0 || !Number.isInteger(numK) || !Number.isInteger(numO)) return 'No solutions'
    return [numK, numO]
}