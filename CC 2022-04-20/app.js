// 8 kyu
// Grader

// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"

// Examples:
// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"

// ----------------------
// parameters: grade given, as a floating number
// return grade equivalent
// examples:
// grader(0.7)  -->  "C"
// grader(0.9)  -->  "A"
// grader(0.6)  -->  "D"
// pseudocode: starting with one end of the score spectrum, the highest for example, set up series of conditional statements
// if score is greater than 1, return F. Else if score is greater than or equal to 0.9, return A. And so on until,
// if score is not greater than or equal to 0.6 (the last conditional statement), then return F.

function grader(score) {
    return (
        score > 1.0 ? "F" :
        score >= 0.9 ? "A" :
        score >= 0.8 ? "B" :
        score >= 0.7 ? "C" :
        score >= 0.6 ? "D" : "F"
    )
}