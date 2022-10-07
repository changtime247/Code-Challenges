// 6 kyu
// Clocky Mc Clock-Face
// Story
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.
// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!
// What a bunch of cheapskates!
// Can you do it?
// Kata
// Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.
// Examples
// 12:00 = 0 degrees
// 03:00 = 90 degrees
// 06:00 = 180 degrees
// 09:00 = 270 degrees
// 12:00 = 360 degrees
// Notes
// 0 <= angle <= 360
// Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.
// 3 o'clock is 03:00, not 15:00
// 7 minutes past midnight is 12:07
// 7 minutes past noon is also 12:07

// ----------------------
// Parameter: Given a positive number.
// Return a string with format in "HH:MM", reprsenting the time (irrespective of AM or PM)
// Examples:
// whatTimeIsIt(0)                  --> "12:00"
// whatTimeIsIt(90)                 --> "03:00"
// whatTimeIsIt(180)                --> "06:00"
// whatTimeIsIt(270)                --> "09:00"
// whatTimeIsIt(360)                --> "12:00"
// whatTimeIsIt(56.20979078863159)  --> "01:52"
// whatTimeIsIt(264.36057923826496) --> "08:48"
// Pseudocode:
// Important notes: There are 360 degrees in 12 hours, meaning every hour is 30 degrees (or every minute is 1/2 degree).
// This clock does not tell difference between AM and PM.
// First, calculate hours by simply recording the integer portion of the quotient from dividing the angle by 30.
// Second, calculate minutes by taking the remainder and dividing it by multiplying it by 60 (since we are going from fractional hours to minutes).
// Third, return corresponding template literal with logic to format string in "HH:MM" format.

var whatTimeIsIt = function (angle) {
  let hrs = Math.trunc(angle / 30),
    mins = Math.floor(((angle / 30 - hrs) * 60).toFixed(2))
  return `${hrs === 0 ? 12 : hrs < 10 ? '0' + hrs : hrs}:${
    mins < 10 ? '0' + mins : mins
  }`
}
