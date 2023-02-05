// 6 kyu
// Find the Nexus of the Codewars Universe
// Not to brag, but I recently became the nexus of the Codewars universe! My honor and my rank were the same number. I cried a little.
// Complete the method that takes a hash/object/directory/association list of users, and find the nexus: the user whose rank is the closest is equal to his honor. Return the rank of this user. For each user, the key is the rank and the value is the honor.
// If nobody has an exact rank/honor match, return the rank of the user who comes closest. If there are several users who come closest, return the one with the lowest rank (numeric value). The hash will not necessarily contain consecutive rank numbers; return the best match from the ranks provided.
// Example
//          rank    honor
// users = {  1  =>  93,
//           10  =>  55,
//           15  =>  30,
//           20  =>  19,    <--- nexus
//           23  =>  11,
//           30  =>   2 }

// Given an object of rank-honors as key-values.
// Return the value of the key-value pair that has a difference of 0 (if none, then whichever is closes to 0).
// Ex: nexus({"1":3,"3":3,"5":3}),3)
// Create a new object.
// Iterate through all possible arg-object entries. At each iteration:
//      if the difference is smaller than new object's difference, re-set the new object to contain iteration's key-value pair.
// Return the key of key-value pair of the new object.

function nexus(users) {
  let nexus = { difference: Number.MAX_SAFE_INTEGER }
  for (const rank in users) {
    const diff = Math.abs(+rank - +users[rank])
    if (diff < nexus.difference) {
      nexus.difference = diff
      nexus.info = { rank }
    }
  }
  return +nexus.info.rank
}
