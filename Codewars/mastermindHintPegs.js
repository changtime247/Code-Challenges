// 6 kyu
// Mastermind Hint Pegs
// Mastermind is a two-player game where one player creates a four-color code from a possible six colors. The other player has ten turns to guess this code. After each guess, the "codemaker" places pegs corresponding to correct guesses and the "codebreaker" then guesses again, based on these pegs. Black pegs are given for every color in the guess that is correctly placed, and white pegs are given for other colors in the guess that are in the code, but were not guessed in the correct position.

// Task
// Your task is to implement a function that will compare the player's guess to the secret code and return an appropriate number of colored hints - one black peg for each correctly guessed color in a correct position, one white peg for each correct color in an incorrect position.

// Specifics for this kata:
// The number of colors in the code is random instead of always being 4
// The number of possible colors has been increased
// The same color may appear multiple times in different positions
// Examples:
// No elements match:
//   code   = [1, 2, 3]
//   guess  = [4, 5, 6]
//   result = {black: 0, white: 0}

// 2 elements match, both in wrong positions:
//   code   = [1, 2, 3]
//   guess  = [2, 1, 4]
//   result = {black: 0, white: 2}

// 3 elements match, one in correct position and two in wrong positions:
//   code   = [1, 2, 3]
//   guess  = [2, 1, 3]
//   result = {black: 1, white: 2}

// 3 elements match, one in correct position and two in wrong positions:
//   code   = [0, 0, 0, 1, 1]
//   guess  = [2, 2, 0, 0, 0]
//   result = {black: 1, white: 2}

// ----------------------
// Parameters: Given two arrays of numbers, one array representing the answer array and the other, the guess array.
// For each exact correct guess (i.e., the answer's element and guess's element value at index i matches), there is one black peg.
// For each partially correct guess (i.e., the answer's element and guess's element value match but NOT the index), there is one white peg.
// Return a count of black and white pegs.
// Examples:
// getHints([1, 2, 3, 4], [1, 2, 3, 4])                     -->                 {black: 4, white: 0}
// getHints([1, 2, 3, 4], [4, 3, 2, 1])                     -->                 {black: 0, white: 4}
// getHints([1, 2, 3, 4], [1, 1, 1, 1])                     -->                 {black: 1, white: 0}
// getHints([1, 2, 3, 4], [1, 2, 4, 3])                     -->                 {black: 2, white: 2}
// getHints([1, 2, 3, 4], [0, 0, 0, 0])                     -->                 {black: 0, white: 0}
// getHints([1,1,1,2,2,2,1,1,1,2,2,2,3,3,3],[1,1,1,2,2,2,1,1,1,2,2,2,3,3,3) --> {black: 15,white: 0}
// getHints([9,6,4,3,6,3,2,6,1,6,7,6,3,6,2,2,8,3,5,1,2,2,4,7,0,6,4,7,7,5,5,5,5,9,],[3,2,9,1,6,4,2,6,0,9,1,5,0,6,7,7,3,3,1,1,5,1,9,0,5,1,4,5,0,7,5,7,9,8])
//                                                          -->                 {black: 8, white: 17}
// Pseudocode:
// Use two loops, consecutively. 
// Loop 1. Find all exact matches. Peg both arrays with black pegs on those indices.
// Loop 1. Find all partial matches. Peg both arrays with white pegs on the indices where match occurred (this is to prevent double counting).
// Return count of black and white pegs.

function getHints(answer, guess) {
  let obj = { black: 0, white: 0 }
  for (let i = 0; i < answer.length; i++) {
    answer[i] === guess[i]
      ? ((obj.black += 1), (guess[i] = 'B'), (answer[i] = 'B'))
      : obj
  }
  for (let i = 0; i < answer.length; i++) {
    answer[i] !== guess[i] && answer.includes(guess[i])
      ? ((obj.white += 1),
        (answer[answer.indexOf(guess[i])] = 'W'),
        (guess[i] = 'W'))
      : obj
  }
  return obj
}