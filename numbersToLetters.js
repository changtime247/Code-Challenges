// 7 kyu
// Numbers to Letters
// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.
// All inputs will be valid.

// ----------------------
// Parameter: Given an array of numbers in string format.
// The numbers correspond to a letter
// ('1' is 'z', '2' is 'y', '3' is 'x'... '26' is 'a'. Also, '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.)
// Return a string derived from those numbers.
// Examples:
// switcher(['24', '12', '23', '22', '4', '26', '9', '8'])                   -->   'codewars
// switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4'])   -->   'btswmdsbd kkw'
// switcher(['4', '24'])                                                     -->   'wc'
// Pseudocode:
// Iterate through array of strings, converting each string into its corresponding alphabet character (incl. '!', '?', ' ').
// Return the corresponding string.

function switcher(x) {
  const ltrs = 'abcdefghijklmnopqrstuvwxyz'
  const reverseLtrs = ltrs.split``.reverse()
  return x.reduce(
    (a, k) =>
      (a =
        a +
        `${
          k == 27 ? '!' : k == 28 ? '?' : k == 29 ? ' ' : reverseLtrs[k - 1]
        }`) && a,
    ''
  )
}
