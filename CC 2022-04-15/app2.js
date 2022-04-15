// 7 kyu
// ATM

// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

// ----------------------
// parameters: a certain number, n, given. n will be greater than or equal to one and less than or equal to 1500
// determine number of banknotes it will take to give out n in specified denominators. 
// objective is to minimal amount of banknotes
// important to note that lowest denomination value is 10. no singles given out.
// return the minimal number of banknotes it'll take
// test for this first: return -1 if n does not end in a 0. (meaning the ones digit)
// examples:
// solve(770)      -->     4
// solve(550)      -->     2
// solve(10)       -->     1
// solve(1250)     -->     4
// solve(125)      -->     -1
// solve(666)      -->     -1
// solve(42)       -->     -1
// pseudocode: return -1 immediately if n modulo 10 is not 0
// set up count for each denomination of banknotes "cashed out". initial count is 0 b/c nothing has been cashed out yet
// using a loop spit count number of banknotes need to cash out n
// the order of the loop is highest to lowest denomination value (start from 500 and work towards the 10 incrementally)
// subtract from n and add one to count of the denomination value subtracted from n
// return sum of all counts (represents number of banknotes handed out)

function solve(n) {
    if(n%10!==0) return -1
    let fivHundoCount = 0, 
        twoHundoCount = 0,
        oneHundoCount = 0,
        fiftyCount    = 0,
        twentyCount   = 0,
        tenCount      = 0;
    while(n>0){
        if(n>=500){
            fivHundoCount++;
            n-=500;
        } else if(n>=200){
            twoHundoCount++;
            n-=200;
        } else if(n>=100){
            oneHundoCount++;
            n-=100;
        } else if(n>=50){
            fiftyCount++;
            n-=50;
        } else if(n>=20){
            twentyCount++;
            n-=20;
        } else{ // meaning n>10
            tenCount++;
            n-=10;
        }
    }
    return fivHundoCount + twoHundoCount + oneHundoCount + fiftyCount + twentyCount + tenCount;
}