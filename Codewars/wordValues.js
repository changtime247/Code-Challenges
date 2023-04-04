// 7 kyu
// Word values
// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.
// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.
// nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.
// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.
// Input will only contain lowercase characters and spaces.

// Given an array of strings containing only lowercase letters and/or spaces.
// Return an array of numbers corresponding to the value of each string multiplied by its index (1-based)
// Value of each char of each string depends on the char's position in alphabet (a = 1, b = 2...)
// Ex:
// wordValue(["codewars","abc","xyz"]), [88,12,225]
// wordValue(["abc abc","abc abc","abc","abc"]), [12,24,18,24]
// Iterate through arg-array,
//      reduce the string value to a number by subtracting 96 from unicode value.

function wordValue(a) {
  return a.map((s, i) => {
    return (
      (i + 1) *
      s.split``.reduce((a, c) => {
        let unicode = c.charCodeAt(0)
        if (unicode >= 97 && unicode <= 122) a += unicode - 96
        return a
      }, 0)
    )
  })
}
