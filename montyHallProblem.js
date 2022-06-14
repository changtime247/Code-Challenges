// 7 kyu
// Monty Hall Problem

// The Monty Hall problem is a probability puzzle base on the American TV show "Let's Make A Deal".

// In this show, you would be presented with 3 doors: One with a prize behind it, and two without (represented with goats).

// After choosing a door, the host would open one of the other two doors which didn't include a prize, and having been shown a false door, however the math proves that you significantly increase your chances, from 1/3 to 2/3 by switching.ask the participant if he or she wanted to switch to the third door. Most wouldn't. One would think you have a fifty-fifty chance of winning after

// Further information about this puzzle can be found on https://en.wikipedia.org/wiki/Monty_Hall_problem.

// In this program you are given an array of people who have all guessed on a door from 1-3, as well as given the door which includes the price. You need to make every person switch to the other door, and increase their chances of winning. Return the win percentage (as a rounded int) of all participants.

// ----------------------
// Parameters: Given an integer reprsenting the correct door number. And given an array of integers representing the door number guess of each contestant
// Integers in parameter can only be 1, 2 or 3, representing doors behind which can be a goat or a prize (note only one prize per attempt)
// Return an integer representing the percentage of wins, IF all the contestants who chose the wrong door were to switch to the other door (after the host has revealed a losing door)
// Examples:
// montyHall(1, [3,3,2,3,3,2,2,3,2,2,1,1,1,1])      -->     71
// montyHall(2, [3,3,2,3,3,2,2,3,2,2,1,1,1,1])      -->     64
// montyHall(3, [3,3,2,3,3,2,2,3,2,2,1,1,1,1])      -->     64
// Pseudocode:
// All contestants who chose the right door the first time around will ultimately switch to the wrong door.
// Conversely, all contestants who chose the wrong door the first time around will ultimately switch to the right door.
// Since we are given the right door number and an array of door number guesses, filter the array for integers not equal to the correct door number.
// Divide that by the total number of contestants.
// Turn fraction into percentage. Round and return.

function montyHall(correctDoorNumber, participantGuesses) {
    return Math.round( (participantGuesses.filter(x=> x !== correctDoorNumber).length / participantGuesses.length ) * 100);
}