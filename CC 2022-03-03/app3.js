// 8 kyu
// Is the date today
// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.
// Make sure that your function does not return a false positive by only checking the day.

// ----------------------
// parameters: given a arbitrary date
// return: if today's date is the same as the given parameter
// pseudocode: simple solution with toDateString(), which makes the date look like this:
// Wed Jul 28 1993

function isToday(date) {
    return new Date().toDateString() === date.toDateString();
}