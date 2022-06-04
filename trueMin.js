// True Min

// The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

// Note: This min function need not handle more than two arguments.

// function min(a, b){
//   return (a<b)?a:b;
// }

// ----------------------
// Parameters: two arguments, which can be a number, NaN, undefined, Infinity, or null
// Treat null as 0. Treat Infinity as a number.
// Return NaN if either argument is NaN or undefined. Otherwise return the lesser value (null values are treated as 0)
// Examples:
// min(1.5, 2.5)                -->     1.5
// min(2.5, 1.5)                -->     1.5
// min(1.5, 1.5)                -->     1.5
// min(2.5, 2.5)                -->     2.5
// min(1.5, -2.5)               -->     -2.5
// min(-2.5, 1.5)               -->     -2.5
// min(1.5, -1.5)               -->     -1.5
// min(0, -2.5)                 -->     -2.5
// min(1.5, 0)                  -->     0
// min(0, 0)                    -->     0
// min(1.5, Infinity)           -->     1.5
// min(-1.5, Infinity)          -->     -1.5
// min(Infinity, Infinity)      -->     Infinity
// min(1.5, -Infinity)          -->     -Infinity
// min(-1.5, -Infinity)         -->     -Infinity
// min(-Infinity, -Infinity)    -->     -Infinity
// min(null, 2.5)               -->     0
// min(2.5, null)               -->     0
// min(null, -2.5)              -->     -2.5
// min(-2.5, null)              -->     -2.5
// min(null, null)              -->     0
// min(undefined, 2.5)          -->     NaN
// min(2.5, undefined)          -->     NaN
// min(undefined, -2.5)         -->     NaN
// min(-2.5, undefined)         -->     NaN
// min(undefined, undefined)    -->     NaN
// Pseudocode:
// First, we must understand the following:
// isNaN(Infinity)     -->  false
// 10 < Infinity       -->  true
// isNaN(null)         -->  false
// null<10             -->  true
// isNaN(NaN)          -->  true
// NaN<10              -->  false
// isNaN(undefined)    -->  true
// undefined<10        -->  false
// Note that null is being implicitly converted into 0 when doing math operations (see null<10)
// Note that undefined and NaN do no undergo same treatment as null (undefined<10 and NaN<10)
// So, if either a or b is NaN, then immediately return NaN.
// Because isNaN(null) is false, and because all NaN situations are caught by above line, 
// using an unary + symbol on the return value from the expression, (a<b)?a:b, will produce a numeric value
// Return entire expression

function min(a, b){
    return (isNaN(a)||isNaN(b)) ? NaN : +((a<b)?a:b);
}