// 7 kyu
// Money Match: Double or Nothing
// My roommate and I occasionally make wagers on if we can beat each other in Super Smash Bros. Being the competitor I am, I can't take a loss without getting a chance at redemption. Often times, this manifests in the form of a "Double or nothing" bet. Rather than paying up, the wager will instead be doubled, and an additional round will be played.
// ...This consistently results in me losing more money than I initially wagered.
// Given the amount of cash on hand, the initial wager, and the number of rounds played, return the amount of money that I'll have left after our gam(bl)ing session has concluded.
// If I can't afford to pay up, return "I'll pay you back later" instead ;)

// -parameters: 1. given amount of cash, 2. a wager amount, and 3. number of losses. after each loss, wager is doubled. if losses ends before wager exceeds cash at hand, return the statement.
// if player has enough cash, continue with the doubling of wager, until losses is counted down to 0.

// -return how much cash leftover after wagering or if cash is less than 0, return string

// -Examples:
// (11, 2, 3) --> 3
// (50, 5, 3) --> 30
// (66, 1, 7) --> 2
// (10, 2, 4) --> "I'll pay you back later"

// -pseudocode: while loop. condition is as long as losses is greater than 1. if only 1 loss or 1 loss left, no need to execute while loop becase while loop is essentially only going to double the wager and deduct one loss count (working backwards kinda)
// if loss is greater than 1, double the wager and see if player has enough cash to cover that wager
// if at any point, i do not have enough cash to cover the wager, return the string. 
// if i do have enough, double wager and deduct loss (decrement). continue with while loop.

function doubleOrNothing(cash, wager, losses){
    while(losses > 1){
        if (cash - wager * 2 < 0) return "I'll pay you back later";
        wager *= 2;
        losses--;
    }
    return cash - wager;
}