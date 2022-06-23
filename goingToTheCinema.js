// 7 kyu
// Going to the cinema

// My friend John likes to go to the cinema. He can choose between system A and system B.

// System A : he buys a ticket (15 dollars) every time
// System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price,
// then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
// Example:
// If John goes to the cinema 3 times:

// System A : 15 * 3 = 45
// System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
// John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

// The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

// ceil(price of System B) < price of System A.
// More examples:
// movie(500, 15, 0.9) should return 43
//     (with card the total price is 634, with tickets 645)
// movie(100, 10, 0.95) should return 24
//     (with card the total price is 235, with tickets 240)

// ----------------------
// Parameters: Given three numbers: cost of movie card (which unlocks progressively discounted price), cost of movie cost, price in percent after discount
// Return when the cost of the movie card will pay itself off and be "cheaper"
// Examples:
// movie(500, 15, 0.9)      -->     43
// movie(100, 10, 0.95)     -->     24
// Pseudocode:
// Create a variable set to 1, representing the number of tickets purchased.
// Use a while loop.
// As long as the cost of all tickets purchased is less than or equal to the cost of card + all discounted tickets purchased,
// add one to the variable.
// Round up for the latter cost when comparing.
// Return the variable.

function movie(card, ticket, perc) {
  let i = 1
  while (ticket * i <= Math.ceil(card + perc ** i * ticket)) {
    card += perc ** i * ticket
    i++
  }
  return i
}
