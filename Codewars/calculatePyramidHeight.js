// 6 kyu
// Calculate Pyramid Height
// Your task is to calculate the maximum possible height of a perfectly square pyramid (the number of complete layers) that we can build, given n number of cubes as the argument.
// The top layer is always only 1 cube and is always present.
// There are no hollow areas, meaning each layer must be fully populated with cubes.
// The layers are thus so built that the corner cube always covers the inner 25% of the corner cube below it and so each row has one more cube than the one below it.
// If you were given only 5 cubes, the lower layer would have 4 cubes and the top 1 cube would sit right in the middle of them, where the lower 4 cubes meet.
// If you were given 14 cubes, you could build a pyramid of 3 layers, but 13 wouldn't be enough as you would be missing one cube, so only 2 layers would be complete and some cubes left over!
// What is the tallest pyramid possible we can build from the given number of cubes? Simply return the number of complete layers.
// Examples
//  4  -->  1
//  5  -->  2
// 13  -->  2
// 14  -->  3

// Given an integer, representing the number of cubes.
// Return the number of possible layers (each layer must be a square and larger than the one right above it).
// Ex:
// pyramidHeight(29), 3
// pyramidHeight(30), 4
// pyramidHeight(31), 4
// pyramidHeight(1240), 15
// Create two variables, one to count the number of cubes, and another to count the number of layers.
// While the number of cubes is less than the argument,
//      increment the layer count by one
//      square that variable and add the result to the total count of cubes.
// If the exact count of cubes and the argument are equal, the number of layers is exact.
// Otherwise, we're missing some cubes so deduct one from the layer.

function pyramidHeight(n) {
  let count = 0
  let total = 0
  while (total < n) {
    count++
    total += Math.pow(count, 2)
  }
  return total === n ? count : count - 1
}
