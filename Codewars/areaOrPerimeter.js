// 8 kyu
// Area or Perimeter

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// ----------------------
// parameters: given two nums representing length and width of a four-sided polygon
// return area if it's a square and perimeter if it's a rectangle
// examples
// areaOrPerimeter(4 , 4)   -->  16
// areaOrPerimeter(6 , 10)  -->  32
// pseudocode: check if rectangle or square by checking if length and width are equal. 
// if equal return product of num
// else return sum of double length and double width

const areaOrPerimeter = function(l , w) {
    return l===w?l*l:(2*l)+(2*w)
};