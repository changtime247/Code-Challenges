// 7 kyu
// Simple Interest and Compound Interest

// Simple interest on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and the number of time periods (n).

// Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.

// Given a principal p, interest rate r, and a number of periods n, return an array [ total owed under simple interest, total owed under compound interest ]

// Notes:

// Round all answers to the nearest integer
// Principal will always be an integer between 0 and 9999
// interest rate will be a decimal between 0 and 1
// number of time periods will be an integer between 0 and 50
// Examples
// interest(100, 0.1,  1)  =  [110, 110]
// interest(100, 0.1,  2)  =  [120, 121]
// interest(100, 0.1, 10)  =  [200, 259]

// ----------------------
// Parameters: Given three numbers, representing loan principal amount, interest (as decimal), and number of cycles or periods, in that order
// Return an array of two integers:
// at index 0: the simple interest total (which takes into account the interest accruing only on the principal loan amount)
// at index 1: the compound interest total (which takes into account the interest accruing on the principal loan amount AND any interest accrued from previous periods)
// Examples:
// interest(100, 0.1,  1)
// --> [110, 110]
// interest(100, 0.1,  2)
// --> [120, 121]
// interest(100, 0.1, 10)
// --> [200, 259]
// interest(567, 0.9947799011067167, 39)
// --> [22565, 281505849927474]
// interest(5495, 0.20666008242161826, 41)
// --> [52054, 12160473]
// interest(9547, 0.32898147855234994, 45)
// --> [150882, 3453175897]
// interest(2635, 0.30725539544138436, 36)
// --> [31781, 40715199]
// Pseudocode: 
// Create two variables: the first for simple interest total loan amount and the second for compound interest total loan amount.
// Initialize both as the initial principal loan amount
// Use one while loop to calculate total for both. Decrementing by one, while the cycle number is greater than 0, 
// everytime the simple interest is added, it will only ever increase by the interest accrued on original principal amount (never the case where interest accrues interest)
// but the compound interest increases by being multiplied by (1.0 + interest rate) at each iteration (interest will also eventually accrue interest)
// Once the while loop stops, round both variables to return an array of two integers

function interest(P,r,n) {
    let simp = P;
    let comp = P;
    while(n>0){
        simp += (P*r);
        comp *= (1+r);
        n--;
    }
    return [Math.round(simp),Math.round(comp)];
}