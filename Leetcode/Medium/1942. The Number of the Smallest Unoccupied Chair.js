/*
1942. The Number of the Smallest Unoccupied Chair
There is a party where n friends numbered from 0 to n - 1 are attending. There is an infinite number of chairs in this party that are numbered from 0 to infinity. When a friend arrives at the party, they sit on the unoccupied chair with the smallest number.

For example, if chairs 0, 1, and 5 are occupied when a friend comes, they will sit on chair number 2.
When a friend leaves the party, their chair becomes unoccupied at the moment they leave. If another friend arrives at that same moment, they can sit in that chair.

You are given a 0-indexed 2D integer array times where times[i] = [arrivali, leavingi], indicating the arrival and leaving times of the ith friend respectively, and an integer targetFriend. All arrival times are distinct.

Return the chair number that the friend numbered targetFriend will sit on.

Example 1:
Input: times = [[1,4],[2,3],[4,6]], targetFriend = 1
Output: 1
Explanation: 
- Friend 0 arrives at time 1 and sits on chair 0.
- Friend 1 arrives at time 2 and sits on chair 1.
- Friend 1 leaves at time 3 and chair 1 becomes empty.
- Friend 0 leaves at time 4 and chair 0 becomes empty.
- Friend 2 arrives at time 4 and sits on chair 0.
Since friend 1 sat on chair 1, we return 1.

Example 2:
Input: times = [[3,10],[1,5],[2,6]], targetFriend = 0
Output: 2
Explanation: 
- Friend 1 arrives at time 1 and sits on chair 0.
- Friend 2 arrives at time 2 and sits on chair 1.
- Friend 0 arrives at time 3 and sits on chair 2.
- Friend 1 leaves at time 5 and chair 0 becomes empty.
- Friend 2 leaves at time 6 and chair 1 becomes empty.
- Friend 0 leaves at time 10 and chair 2 becomes empty.
Since friend 0 sat on chair 2, we return 2.

Constraints:
n == times.length
2 <= n <= 104
times[i].length == 2
1 <= arrivali < leavingi <= 105
0 <= targetFriend <= n - 1
Each arrivali time is distinct.
*/

/*
Given an array of arrays, each with two numbers, representing the ith friend's arrival-time and leave-time.
Also given a number for target friend.
Return which chair the target friend will sit on.
(So starting from earliest to latest arrival-time each friend sits. Also, starting from earliest to latest leave-time each friend leaves.)
Ex:
smallestChair([[1,2],[2,3]], 1), 0
smallestChair([[4,5],[6,8],[8,10],[1,8]], 2), 0
smallestChair([[1,2],[2,10],[3,10],[4,10],[5,10],[6,10],[7,10],[8,10],[9,10],[10,11]], 8), 7
smallestChair([[33,35],[26,29],[9,28],[4,31],[8,10],[32,34],[15,24],[27,39],[14,36],[1,14],[25,39],[5,27],[6,15],[2,38],[19,36],[24,34],[3,26]], 0), 3
Create an array to track all friends' arrival time and leave time, as separate entries.
Create a map to track which chair each friend is sitting on.
Create an array to store available chairs.
Iterate through argument array to track all arrival and leave times.
The tracking-all-events array should be sorted ascending by time (if arrival and leave same, leave-times precede).
Iterate through the tracking-all-events array.
    If arrival, assign chair (starting from 0).
    Return chair assigned to target friend.
    If leave, chair is freed up for next friend.
*/

/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function (times, targetFriend) {
  let events = [],
    nextChair = 0,
    availableChairs = []
  let friendToChair = new Map()

  times.forEach((time, i) => {
    events.push([time[0], 'arrive', i], [time[1], 'leave', i])
  })

  events.sort((a, b) => a[0] - b[0] || (a[1] === 'leave' ? -1 : 1))

  for (let [time, type, friendIndex] of events) {
    if (type === 'arrive') {
      let chair = availableChairs.length ? availableChairs.shift() : nextChair++
      friendToChair.set(friendIndex, chair)
      if (friendIndex === targetFriend) return chair
    } else {
      availableChairs.push(friendToChair.get(friendIndex))
      availableChairs.sort((a, b) => a - b)
    }
  }
}
