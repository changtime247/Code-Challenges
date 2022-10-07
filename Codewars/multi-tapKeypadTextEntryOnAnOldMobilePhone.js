// 6 kyu
// Multi-tap Keypad Text Entry on an Old Mobile Phone
// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.
// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------
// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.
// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.
// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.
// For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).
// Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)

// Parameter: Given a string, a text msg on a 90's cell phone. 
// Return the number of keystrokes it takes to type out that string.
// Press the '2' keypad once for 'A', twice for 'B', thrice for 'C' and four times for '2'.
// And so on for the '3' keypad, '4' keypad...
// Examples:
// presses('LOL')                         -->  9
// presses('HOW R U')                     -->  13
// presses('WHERE DO U WANT 2 MEET L8R')  -->  47
// Pseudocode: 
// Assign each type-able character a value, which is the number of keystrokes it takes to type that character.
// Iterate through each char of the argument, adding it to a count, which starts at 0.
// Return the count (num of keystrokes)

function presses(phrase) {
  let ltrs = 'abcdefghijklmnopqrstuvwxyz 1234567890'
  let kprs = '1231231231231231234123123411444445452'
  phrase = phrase.toLowerCase().split``
  let press = phrase.reduce((a, k, i, r) => {
    a += +kprs[ltrs.split('').indexOf(k)]
    return a
  }, 0)
}
