// 6 kyu
// 8 inch pizza equivalence

// How much bigger is a 16-inch pizza compared to an 8-inch pizza? A more pragmatic question is: How many 8-inch pizzas "fit" in a 16-incher?

// The answer, as it turns out, is exactly four 8-inch pizzas. For sizes that don't correspond to a round number of 8-inchers, you must round the number of slices (one 8-inch pizza = 8 slices), e.g.:

// how_many_pizzas(16) -> "pizzas: 4, slices: 0"
// how_many_pizzas(12) -> "pizzas: 2, slices: 2"
// how_many_pizzas(8) -> "pizzas: 1, slices: 0"
// how_many_pizzas(6) -> "pizzas: 0, slices: 5"
// how_many_pizzas(0) -> "pizzas: 0, slices: 0"
// Get coding quick, so you can choose the ideal size for your next meal!

// ----------------------
// Parameter: Given positive number, n, representing an n-inch pizza.
// Return a string, which tells how many 8 inch whole pie and 8 inch slices fit into a n inch pie. (8 slices in a pie)
// Examples:
// how_many_pizzas(16)  --> "pizzas: 4, slices: 0"
// how_many_pizzas(12)  --> "pizzas: 2, slices: 2"
// how_many_pizzas(8)   --> "pizzas: 1, slices: 0"
// how_many_pizzas(6)   --> "pizzas: 0, slices: 5"
// how_many_pizzas(0)   --> "pizzas: 0, slices: 0"
// Pseudocode:
// Calculate areas of two the pies, 8 inch and n inch.
// Divide area of n inch pie from area of 8 inch pie. Create variable, setting result as its value.
// To calculate slices, divide the remainder by 0.125 (which is 1/8). If no remainder, 0 slices.
// Return entire expression

function howManyPizzas(n) {
  let e = (n / 2) ** 2 / 16
  return `pizzas: ${Math.floor(e)}, slices: ${
    (n / 2) ** 2 % 16 ? Math.round(((e - ~~e) * 1000) / 125) : 0
  }`
}
