// 6 kyu
// Free pizza
// In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: if you already made at least 5 orders of at least 20 dollars, you get a free 12 inch pizza with 3 toppings of your choice.
// However, the rewards system may change in the future. Your manager wants you to implement a function that, given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward.
// Customers in the dictionary are represented as:
// { 'customerName' : [list_of_order_values_as_integers] }

// Given an object of customer name - customer orders as key-value pairs.
// Also, given a reward threshold, as two integers, that the orders need to meet (i.e. minimum number of orders and minimum price of each order)
// Return an array of all the names of the customers who qualify for a reward.
// Example 1:
// pizzaRewards({
//    'John Doe': [22, 30, 11, 17, 15, 52, 27, 12],
//    'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
// }, 5, 20), ['Jane Doe']
// Example 2:
// pizzaRewards({
//    'Joey Bonzo': [22, 67, 53, 29],
//    'Jennifer Bonzo': [51, 19]
// }, 2, 50), ['Joey Bonzo']
// Create variable initialized to an empty array.
// Iterate through object items and if item meets criteria, add customer's name to array.

function pizzaRewards(customers, minOrders, minPrice) {
  return Object.entries(customers).reduce((a, c) => {
    if (c[1].filter((val) => val >= minPrice).length >= minOrders) a.push(c[0])
    return a
  }, [])
}
