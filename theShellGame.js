// 6 kyu
// The Shell Game

// "The Shell Game" involves cups upturned on a playing surface, with a ball placed underneath one of them. The index of the cups are swapped around multiple times. After that the players will try to find which cup contains the ball.

// Your task is as follows. Given the cup that the ball starts under, and list of swaps, return the location of the ball at the end. Cups are given like array/list indices.

// For example, given the starting position 0 and the swaps [(0, 1), (1, 2), (1, 0)]:

// The first swap moves the ball from 0 to 1
// The second swap moves the ball from 1 to 2
// The final swap doesn't affect the position of the ball.
// So

// swaps = [[0,1], [1,2], [1, 0]]
// find_the_ball(0, swaps) == 2
// There aren't necessarily only three cups in this game, but there will be at least two. You can assume all swaps are valid, and involve two distinct indices.

// ----------------------
// Parameters: Given (1) a number, representing where the ball will be initially (the starting index) and
// (2) an array of subarrays, each containing a pair of integers, representing a swap move (order is oldest to newest)
// Return the index of ball's location after all valid swaps have been performed.
// Examples:
// find_the_ball(0,[[0,1],[2,1],[0,1]])                                      -->  2
// find_the_ball(0,[[0,2],[1,0]])                                            -->  2
// find_the_ball(1,[[0,2],[1,0]])                                            -->  0
// find_the_ball(0,[[0,9],[9,3],[3,7],[7,8],[8,2],[4,5]])                    -->  2
// find_the_ball(1,[[0,9],[9,3],[3,7],[7,8],[8,2],[4,5]])                    -->  1
// find_the_ball(2,[[0,9],[9,3],[3,7],[7,8],[8,2],[4,5]])                    -->  8
// find_the_ball(3,[[0,9],[9,3],[3,7],[7,8],[8,2],[4,5]])                    -->  9
// find_the_ball(0,[[0,1],[1,2],[2,0],[0,1],[1,2],[2,1],[2,0],[0,2]])        -->  1
// Pseudocode:
// Iterate through the array, performing each valid swap (switch start value by reassigning it to the other integer of the pair)
// For a swap to be valid, the sub-array must contain the index number of the ball paired with a different integer.

find_the_ball = function (start, swaps) {
  let b = start
  swaps.forEach((sa) =>
    b === sa[0] ? (b = sa[1]) : b === sa[1] ? (b = sa[0]) : b
  )
  return b
}
