// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// ----------------------
// parameters: two strings (only three choices though)
// essentially returning 1, 0 or -1 (in the form of a statement)
// Examples:
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!
// pseudocode: go through each possibility from POV of player1 winning by comparing the string value of both players. player 2 wins otherwise.

const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!'  ;
    if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
    if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
    return 'Player 2 won!';
};