// 7 kyu
// Narcissistic Numbers

// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

// ----------------------
// parameters: arbitrary number given
// return boolean value true if the number given is equal to the sum of the individual digits raised to the power of the length of the given number
// examples:
// 153                -->    true
// 1                  -->    true
// 435                -->    false
// 370                -->    true
// 324                -->    false
// 371                -->    true
// 4328               -->    false
// 407                -->    true
// 3248               -->    false
// 1634               -->    true
// 8208               -->    true
// 9474               -->    true
// 54748              -->    true
// 92727              -->    true
// 93084              -->    true
// 548834             -->    true
// 1741725            -->    true
// 4210818            -->    true
// 9800817            -->    true
// 234229983          -->    false
// 9926315            -->    true
// 24678050           -->    true
// 88593477           -->    true
// 11513221922401     -->    false
// 146511208          -->    true
// 472335975          -->    true
// 26548238692458     -->    false
// 912985153          -->    true
// 534494836          -->    true
// 4679307774         -->    true
// pseudocode: first turn number into a string so that it can be split into individual digits
// reduce the array of digits to the sum of the individual digits raised to the power of however many digits n has.
// see if two are equal and return

function isNarcissistic(n){
    return n==n.toString().split('').reduce((a,b)=>a+(b**n.toString().length),0)
}