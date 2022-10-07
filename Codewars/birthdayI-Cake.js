// 7 kyu
// Birthday I - Cake
// It's your birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (candles). Please note this is not reality, and your age can be anywhere up to 1000. Yes, you would look a mess.
// As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!
// When your friend jumps out of the cake, he/she will knock some of the candles to the floor. If the number of candles that fall is higher than 70% of total candles, the carpet will catch fire.
// You will work out the number of candles that will fall from the provided lowercase string (debris). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in the string, with the alphabetical position ("a" = 1, "b" = 2, etc.) of each odd indexed character to get the string's total.
// For example:
// "abc"  -->  "a" = 97, "b" = 2, "c" = 99  -->  total = 198
// If the carpet catches fire, return "Fire!", if not, return "That was close!".
// Notes
// if there are no candles to begin with, the carpet cannot catch fire;
// as this is not reality, you may have more candles falling from the cake than the total...

// ----------------------
// Parameters: Given an integer (age) and a string, which will be in lowercase.
// Each character of the string represents the number of candles that will fall from the cake.
// To figure out how many candles each char is 'worth' see below:
// each even indexed character in string has a value equal to the ASCII code
// each odd indexed character in string has a value equal to the alphabetical position ("a" = 1, "b" = 2, etc.)
// Return either 'That was close!' or 'Fire!'.
// Examples:
// cake(900, 'abcdef')      -->  'That was close!'
// cake(56, 'ifkhchlhfd')   -->  'Fire!'
// cake(256, 'aaaaaddddr')  -->  'Fire!'
// Pseudocode:
// Create a variable initialized to 0.
// Iterate through each char of the string.
// For each char, calculate value of char and add to newly created variable.
// Each even indexed char is worth its ASCII code equivalent.
// Each odd indexed char is worth its ABC position equivalent (a is first letter, b second, c third, so on...).
// After all iterations, if the sum found divided by age is not greater than 70%, then there is no fire.
// Return corresponding string statement.

function cake(x, y) {
  let fallen = y.split``.reduce((a, k, i) => {
    i % 2 ? (a += k.charCodeAt(0) - 96) : (a += k.charCodeAt(0))
    return a
  }, 0)
  return fallen / x <= 0.7 ? 'That was close!' : 'Fire!'
}
