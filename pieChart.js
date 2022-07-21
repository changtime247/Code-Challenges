// 6 kyu
// Pie Chart
// We are to draw a pie chart! Our parameter shall be given in JSON.
// The goal of this kata is to return a JSON containing each key with it corresponding angle to two decimal places when necessary.
// Example
// Parameter {"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4} should return a JSON like {"Hausa":72,"Yoruba":90,"Igbo":108,"Efik":18,"Edo":72}
// Parameter {"English": 4, "Polish" : 12, "Russian" : 10, "Spanish" : 2} should return a JSON like {"English":51.43,"Polish":154.29,"Russian":128.57,"Spanish":25.71}
// Parameter {"Android": 500, "iOS" : 270, "Microsoft" : 230} should return a JSON like {"Android":180,"iOS":97.2,"Microsoft":82.8}

// ----------------------
// Parameter: Given a JSON object.
// Return JSON object but with values changed from numeric values to numeric values whose sum is proportional to 360. 
// Examples:
// pieChart({"Hausa": "4", "Yoruba" : "5," "Igbo" : "6", "Efik" : 1, "Edo" : "4"}'))  -->  {"Hausa":"72","Yoruba":"90","Igbo":"108","Efik":"18","Edo":"72"})
// pieChart({"English": "4", "Polish" : "12", "Russian" : "10", "Spanish" : "2"}'))   -->  {"English":"51.42","Polish":"154.29","Russian":"128.57","Spanish":"25.71"})
// pieChart({"Android": "500", "iOS" : "270", "Microsoft" : "230"}'))                 -->  {"Android":"180","iOS":"97.2","Microsoft":"82.8"})
// Pseudocode:
// Convert from JSON to JS object. Convert from object to array. 
// Reduce array to get the sum of numeric values. Divide 360 by the sum to get proportion/ ratio. 
// Map array to change numeric values to numeric values that are proportional in relation to 360.
// Convert from array to object. Convert from JS object to JSON. Return JSON expression.

function pieChart(obj) {
  let arrayObjJS = Object.entries(JSON.parse(obj))
  const ratio = 360 / arrayObjJS.reduce((a, k) => (a += k[1]), 0)
  arrayObjJS.map((e) => (e[1] *= ratio))
  return JSON.stringify(Object.fromEntries(arrayObjJS))
}