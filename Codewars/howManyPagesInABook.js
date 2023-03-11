// 6 kyu
// How many pages in a book?
// Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.
// Task: Given the summary, find the number of pages n the book has.
// Example
// If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.
// Be aware that you'll get enormous books having up to 100.000 pages.
// All inputs will be valid.
// Here's the opposite kata, which is more complex (Paginating a huge book)

// Given an integer, summary, representing the length of the concatenated page numbers (as a string) of a book.
// Return what the last page number is (as a number)
// Ex:
// amountOfPages(5), 5
// amountOfPages(25), 17
// amountOfPages(1095), 401
// amountOfPages(185), 97
// amountOfPages(660), 256
// Create two variables, one to keep track of the page number and another to count the length of all the page numbers concatenated (as a string).
// While the count is less than the arg-integer (summary),
//      increment the page number
//      and add the length of the page number (as a string) to the count
// Return the last page number to be recorded.

function amountOfPages(summary) {
  let pageNum = 0
  let count = 0
  while (count < summary) {
    pageNum += 1
    count += pageNum.toString().length
  }
  return pageNum
}
