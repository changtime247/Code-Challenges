// 7 kyu
// Stones on the Table
// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.
// Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.
// Examples:
// "RGBRGBRGGB"   => 1
// "RGGRGBBRGRR"  => 3
// "RRRRGGGGBBBB" => 9

// Given a string composed of any combination of 'R', 'G' and/or 'B' (could also be empty string)
// Return the number of letters that need to be removed so that every character is surrounded by a different letter.
// solve(""), 0
// solve("RRGGBB"), 3
// solve("RGBRGB"), 0
// solve("BGRBBGGBRRR"), 4
// solve("GBBBGGRRGRB"), 4
// solve("GBRGGRBBBBRRGGGB"), 7
// Create a variable, count, to hold the number of characters to be removed.
// Iterate through string, up to (and incl.) second to last letter of string.
// If character of current iteration is the same as the proceeding character, add one to count.
// Return the count

function solve(stones) {
  let count = 0
  for (let i = 0; i < stones.length - 1; i++) {
    if (stones[i] === stones[i + 1]) count++
  }
  return count
}
