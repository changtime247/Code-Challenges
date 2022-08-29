// 7 kyu
// Card game: twenty-one
// You have three input arguments -> actually cards -> actually strings :)
// Let's play the game 'Twenty-one' creating a function that returns:
// 'twenty-one' ---> if the sum of cards equals 21
// 'more' ---> if the sum of cards more than 21
// 'less' ---> if the sum of cards less than 21
// One nuance - we have lost spades cards of our deck and now it look like (preloaded as deck) that:
// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥'];
// A few games:
// ('3♣', 'J♦', 'Q♥') -> 'less' // 3 + 2 + 3 < 21
// ('7♣', '7♦', '7♥') -> 'twenty-one' // 7 + 7 + 7  == 21
// ('10♣', 'Q♣','9♦') -> 'more' // 10 + 3 + 9 > 21
// Some details:
// the result does not depend on suit
// ace can be only 11 points
// points of J,Q,K are 2,3,4
// More details here: https://en.wikipedia.org/wiki/Blackjack

// ----------------------
// Parameters: Given three strings (each representing a card value and a suit (e.g. 'J♣'))
// Rules:
// 1. A value is 11 points
// 2. J,Q,K values are 2,3,4, respectively
// Also, there is one deck of cards and all the spades are missing. Suit is irrelevant.
// Return one of these three strings according to the combined value of the cards given: 'less', 'twenty-one' or 'more'.
// Examples:
// twentyOne('3♣','Q♣','Q♣')  --> 'less'
// twentyOne('7♣','7♦','7♥')  --> 'twenty-one'
// twentyOne('10♣','Q♣','9♦') --> 'more'
// twentyOne('9♣','9♦','Q♣')  --> 'twenty-one'
// twentyOne('A♣','4♦','Q♥')  --> 'less'
// Pseudocode: Create an object that acts as a reference of card value and numeric 'game' value key-value pairs.
// For each card, check if the value has a reference in newly created object.
// If so, assign the value held in key-value pair.
// If not, leave value as it is (e.g. 2 will be left as 2)
// Take sum of the three values and check if greater or less than or equal to 21 and return corresponding string.

function twentyOne(card1, card2, card3) {
  let ref = { 1: 10, J: 2, Q: 3, K: 4, A: 11 }

  let total = [card1[0], card2[0], card3[0]].reduce((sum, v) => {
    if (ref[v]) v = ref[v]
    sum += +v
    return sum
  }, 0)
  return total < 21 ? 'less' : total > 21 ? 'more' : 'twenty-one'
}
