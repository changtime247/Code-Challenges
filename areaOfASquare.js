// 8 kyu
// Area of a Square
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// ----------------------
// parameters: given an arc length value (quarter circle)
// return area of the square that encloses the circle. 
// Examples
// 2     -->  1.62
// 0     -->  0
// 14.05 -->  80
// pseudocode: from quarter arc get circumference. get radius. radius squared. use toFixed to get only up to hundredth decimal place

function squareArea(arc){
    let radius = (arc*4)/Math.PI/2;
    return +(radius**2).toFixed(2);
}