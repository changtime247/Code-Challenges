// 7 kyu
// Drone Fly-By
// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.
// In this kata we will recreate that stunt... sort of.
// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
// Return the resulting lamps string. See example tests for more clarity.

// ----------------------
// Parameter: Given two strings:
// one representing a series of lamps that are off and
// the other, the path to be taken by the drone, where 'T' is the drone.
// Return
// Examples:
// flyBy('xxxxxx', '====T'), 'ooooox'
// flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'
// flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'
// Pseudocode:
// If the drone length is greater than or equal to the lamps length, all the lamps will be turned on.
// Otherwise, if the drone length is less than lamps length, some lamps will be on and some off.
// Check length of drone length. Whatever the value is, turn that amount of lamps on.
// Return.

function flyBy(lamps, drone) {
  return drone.length >= lamps.length
    ? ''.padStart(lamps.length, 'o')
    : lamps.slice(drone.length).padStart(lamps.length, 'o')
}
