// 7 kyu
// Kooka-Counter
// A family of kookaburras are in my backyard.
// I can't see them all, but I can hear them!
// How many kookaburras are there?
// Hint
// The trick to counting kookaburras is to listen carefully
// The males sound like HaHaHa...
// The females sound like hahaha...
// And they always alternate male/female
// Examples
// ha = female => 1
// Ha = male => 1
// Haha = male + female => 2
// haHa = female + male => 2
// hahahahaha = female => 1
// hahahahahaHaHaHa = female + male => 2
// HaHaHahahaHaHa = male + female + male => 3

// Given a string consisting of 'ha' (female), 'Ha' (male), or a combination of a series one or both.
// Note: male and females alternate and no bird will get to "go" again after another.
// Return a number indicating how many birds there are.
// Ex:
// kookaCounter(""), 0
// kookaCounter("hahahahaha"), 1
// kookaCounter("hahahahahaHaHaHa"), 2
// kookaCounter("HaHaHahahaHaHa"), 3
// Create a counter to tally up the number of birds.
// Iterate through the consonants only:
//      Increment counter if current iteration is different bird from previous iteration.

var kookaCounter = function (laughing) {
  let alt = laughing[0]
  return !laughing
    ? 0
    : laughing.split`a`.reduce((a, c) => {
        if (c && alt !== c) {
          a++
          alt = c
        }
        return a
      }, 1)
}
