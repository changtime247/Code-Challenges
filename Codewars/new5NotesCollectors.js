// 7 kyu
// New £5 notes collectors!
// The new £5 notes have been recently released in the UK and they've certainly became a sensation! Even those of us who haven't been carrying any cash around for a while, having given in to the convenience of cards, suddenly like to have some of these in their purses and pockets. But how many of them could you get with what's left from your salary after paying all bills? The programme that you're about to write will count this for you!
// Given a salary and the array of bills, calculate your disposable income for a month and return it as a number of new £5 notes you can get with that amount. If the money you've got (or do not!) doesn't allow you to get any £5 notes return 0.
// £££ GOOD LUCK! £££

// ------------------
// Given two arguments: income (given as a number) and expenses (given as an array of numbers)
// Return the number of £5 bills you can get for that month given the arguments. Return 0, if unable to get any.
// Examples:
// getNewNotes(2000, [500, 160, 400]), 188
// getNewNotes(1260, [500, 50, 100]), 122
// getNewNotes(3600, [1800, 350, 460, 500, 15]), 95
// getNewNotes(1995, [1500, 19, 44]), 86
// getNewNotes(2300, [590, 1500, 45, 655, 150]), 0
// getNewNotes(5300, [1190, 1010, 1045, 55, 10, 19, 55]), 383
// Get sum of expenses and subtract from salary
// If non-positive number, return 0.
// Otherwise, return the difference divided by 5 (whole number).

function getNewNotes(salary, bills) {
  const disposableIncome = salary - bills.reduce((a, c) => (a += c), 0)
  return disposableIncome <= 0 ? 0 : ~~(disposableIncome / 5)
}
