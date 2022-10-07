// 8 kyu
// Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. 
// The input values are always positive.

// ----------------------
// parameters: given 3: distance (miles) to the pump, mpg of vehicle, and fuel (gallons) left.
// return whether or not the vehicle will make it to the next gas station
// Examples (input -> output)
// (50, 25, 2) --> true
// (100, 50, 1) --> false
// pseudocode: multiply fuel left with mpg. if product is greater than distance or equal, return true. else false.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump
};