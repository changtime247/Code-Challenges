// 7 kyu
// Array.prototype.reverse()
// The Array's reverse() method has gone missing! Re-write it, quick-sharp!
// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.
// Here's an example:
// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
// input;           // == [4, 3, 2, 1]  // items reordered in the original array

// ------------------
// Rewrite the array reverse prototype method.
// In order to reverse, start with first element and traverse to last element.
// While traversing, add each element to an array in reverse order

Array.prototype.reverse = function () {
  for (let i = 0; i < this.length / 2; i++) {
    let tmp = this[i]
    this[i] = this[this.length - i - 1]
    this[this.length - i - 1] = tmp
  }
  return this
}
