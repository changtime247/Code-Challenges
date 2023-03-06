// 6 kyu
// Frog jumping
// Help the frog to find a way to freedom
// You have an array of integers and have a frog at the first position
// [Frog, int, int, int, ..., int]
// The integer itself may tell you the length and the direction of the jump
// For instance:
//  2 = jump two indices to the right
// -3 = jump three indices to the left
//  0 = stay at the same position
// Your objective is to find how many jumps are needed to jump out of the array.
// Return -1 if Frog can't jump out of the array
// Example:
// array = [1, 2, 1, 5];
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)
// All tests for this Kata are randomly generated.

// Given an array of numbers, representing the an index (or indices) that a frog can travel to the left (neg values) or right (pos values).
// Return the number of "jumps" that it will take to for the frog to "jump" out of the array.
// If frog cannot "jump" out of the array, return -1.
// Ex:
// solution([1, 2, 2, -1]), 4
// solution([1, 2, 1, 5]), 3
// solution([1, 1, 1, 1]), 4
// solution([1, -1],) -1
// solution([-3]), 1
// The goal is to jump out of the array, whether "left" (i.e. < 0) or "right" (i.e. > a.length - 1)
// Create a count variable initiated at 1 (because frog will perform first jump)
// Create another variable to keep track of visited indices.
// Start with index 0 and keep looping while index + val at index does not meet either goal.
//    At each iteration:
//        if frog has already visited that index, then return -1;
//        otherwise, set new index to sum of that index and value at that index.
//        Increment count variable.
// Return the count variable.

function solution(a) {
  let numJumps = 1
  let visited = {}
  let i = 0
  while (i + a[i] < a.length && i + a[i] >= 0) {
    if (visited[i] > 1) return -1
    else {
      visited[i] = (visited[i] || 0) + 1
      i += a[i]
      numJumps++
    }
  }
  return numJumps
}
