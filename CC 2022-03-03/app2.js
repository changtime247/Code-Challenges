// 8 kyu
// Points of Reflection
// "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

// Task
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.
// This kata was inspired by the Hackerrank challenge Find Point

// ----------------------
// parameters: two points given of a cartesian coordinate plane. 
// return: reflect P about Q (or, Q is the midpoint between P and the point we are trying to return)
// examples: 
// [0,0],      [1,1]),      -->  [2, 2]);
// [2, 6],     [-2, -6]),   -->  [-6, -18]);
// [10, -10],  [-10, 10]),  -->  [-30, 30]);
// [1, -35],   [-12, 1]),   -->  [-25, 37]);
// [1000, 15], [-7, -214]), -->  [-1014, -443]);
// [0, 0],     [0, 0]),     -->  [0, 0]);
// pseudocode: delta y and delta x from p to q will the delta y and delta x from q to point in question
// add the delta y and delta x to Q's y coordinate and Q's x coordinate to return the 3rd point
// return 3rd point in (x, y) format.

function symmetricPoint(p, q) {
    const changeInX = q[0]-p[0];
    const changeInY = q[1]-p[1];
    return [q[0]+changeInX, q[1]+changeInY];
}