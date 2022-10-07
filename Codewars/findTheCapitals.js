// 7 kyu
// Find the Capitals
// Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.
// The method should return an array of sentences declaring the state or country and its capital.
// Examples
// state_capitals = [{state: 'Maine', capital: 'Augusta'}]
// capital(state_capitals)[0] // returns "The capital of Maine is Augusta"
// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
// capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"
// mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
// capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"

// ----------------------
// Parameter: Given an array of objects, each with two keys: (1) country or state AND (2) capital
// Return an array of strings, each declaring the capital and its country (or state)
// Examples:
// capital([{state: 'Maine', capital: 'Augusta'}])                                               -->  "The capital of Maine is Augusta"
// capital([{'country' : 'Spain', 'capital' : 'Madrid'}])                                        -->  "The capital of Spain is Madrid"
// capital([{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}])  -->  "The capital of Spain is Madrid"
// Pseudocode: Create an array to contain our string responses.
// Iterate through array of objects.
// For each object check for capital and country/state.
// Push to newly created array each string response from each iteration.
// Return array of strings.

const capital = (capitals) => capitals.map((e)=> `The capital of ${e.country || e.state} is ${e.capital}` )