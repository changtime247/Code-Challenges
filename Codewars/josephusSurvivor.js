// 5 kyu
// Josephus Survivor
// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.
// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:
// n=7, k=3 => means 7 people in a circle
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!
// The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.
// Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.

// Given two integers:
//    n, the length of an array from 1 to n (value of 1 at index 0) and
//    k, every kth element is removed until only one value remains in array.
// Return the remaining value
// Ex:
// josephusSurvivor(7,3), 4
// josephusSurvivor(11,19), 10
// josephusSurvivor(1,300), 1
// josephusSurvivor(14,2), 13
// josephusSurvivor(100,1), 100
// Following illustration helps:
// Let's say we start with this array [1,2,3,4,5,6,7].
// Remove value at idx 2 [1,2,4,5,6,7] => 3 is counted out
// Remove value at idx 4 [1,2,4,5,7] => 6 is counted out
// Remove value at idx 1 (b/c 6 % arr.length of 5 = 1) [1,4,5,7] => 2 is counted out
// Remove value at idx 3 (b/c 3 % arr.length of 4 = 3) [1,4,5] => 7 is counted out
// Remove value at idx 2 (b/c 5 % arr.length of 3 = 2) [1,4] => 5 is counted out
// Remove value at idx 0 (b/c 4 % arr.length of 2 = 0) [4]
// The value to splice out increments by k-1 from 0 (b/c 0 based index) % arr.length (since idx to splice out may increase past length of array)

function josephusSurvivor(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1)
  let c = 0
  while (arr.length > 1) {
    c = (c + k - 1) % arr.length
    arr.splice(c, 1)
  }
  return arr[0]
}
