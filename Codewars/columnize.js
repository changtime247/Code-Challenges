// 6 kyu
// Columnize
// You are given an array of strings that need to be spread among N columns. Each column's width should be the same as the length of the longest string inside it.
// Separate columns with " | ", and lines with "\n"; content should be left-justified.
// Examples:
// {"1", "12", "123", "1234", "12345", "123456"} should become:
// 1
// 12
// 123
// 1234
// 12345
// 123456
// for 1 column,
//
// 1     | 12
// 123   | 1234
// 12345 | 123456
// for 2 columns,
//
// 1     | 12     | 123 | 1234
// 12345 | 123456
// for 4 columns.

// Given an array of strings, items, and an integer, n.
// Return a string that is formatted to these specs:
//  1. the string should be a "table"
//  2. rows are separated by a new line
//  3. values on a row are separated by the pipe-character
//  4. the length of any given value should be equal to the length of that value's column's longest value.
// Ex:
// columnize(["1", "12", "123", "1234", "12345", "123456"], 1)                  -->     "1     \n12    \n123   \n1234  \n12345 \n123456"
// columnize(["1", "12", "123", "1234", "12345", "123456"], 3)                  -->     "1    | 12    | 123   \n1234 | 12345 | 123456"
// columnize(["1", "12", "123", "1234", "12345", "123456"], 5)                  -->     "1      | 12 | 123 | 1234 | 12345\n123456"
// columnize(["1", "12", "123", "1234", "12345", "123456"], 999)                -->     "1 | 12 | 123 | 1234 | 12345 | 123456"
// columnize(["", "12", "123", "", "12345", ""], 2)                             -->     "      | 12\n123   |   \n12345 |   "
// columnize(["", "", "", ""], 2)                                               -->     " | \n | "
// columnize(["1          ", "12", "123", "1234", "12345", "      "], 2)        -->     "1           | 12    \n123         | 1234  \n12345       |       "
// columnize(["", "12", "123", "", "12345", ""], 2)                             -->     "      | 12\n123   |   \n12345 |   "
// Iterate through items to get the length to which the values of a given column should be calibrated.
// Create an empty array to hold all the rows.
// Create another empty array to hold the values with a row.
// Iterate through the items to fill the row with values set to the specified length of that column.
//      If the row is full (i.e. row length is equal to n),
//          then push that row to the main array and reset the row to an empty array.

function columnize(items, n) {
  let lengths = Array(Math.min(items.length, n)).fill(0)
  items.forEach((v, i) => {
    lengths[i % n] = Math.max(lengths[i % n], v.length)
  })

  let mainArr = []
  let subArr = []
  while (items.length > 0) {
    let item = items.shift()
    let currIdx = subArr.length

    if (item.length != lengths[currIdx]) {
      item = item.padEnd(lengths[currIdx], ' ')
    }
    subArr.push(item)

    if (subArr.length == n || items.length == 0) {
      mainArr.push(subArr.join(' | '))
      subArr = []
    }
  }
  return mainArr.join('\n')
}
