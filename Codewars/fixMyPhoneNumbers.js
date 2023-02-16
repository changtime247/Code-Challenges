// 7 kyu
// Fix My Phone Numbers!
// Oh thank goodness you're here! The last intern has completely ruined everything!
// All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!
// The Format
// Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.
// However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!
// For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.
// The Task
// Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".

// Given a string that may include a valid phone number (valid phone numbers must start with a 0 and contain exactly 11 integers)
// If valid phone number is within string, return the phone number. Else return 'Not a phone number'.
// Create an empty string variable.
// Iterate through argument-string and concatenated integers to string variable.
// After iterating, if string variable contains valid phone number, return that phone number.
// Otherwise, return 'Not a phone number'.

function isItANum(str) {
  const poss = str.split``.reduce(
    (a, c) => (parseFloat(c) == c ? (a += c) : a),
    ''
  )
  if (poss[0] === '0' && poss.length === 11) return poss
  else return 'Not a phone number'
}
