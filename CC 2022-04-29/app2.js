// 7 kyu
// Slot Machine Calculator

// It's casino time and you're playing on a slot machine with 5 winning lines and 15 fields. Winning lines

// 1 -----    4 \   /         |
// 2 -----       \ /         / \ 
// 3 -----        |       5 /   \
// All winning lines are read from left to right that means, this is a winning line:

// [[" "," ","A"," "," "],
// [" ","A"," "," "," "],
// ["A"," "," "," "," "]]
// This is NOT a winning line:

// [[" "," ","A","A","A"],
// [" "," "," "," "," "],
// [" "," "," "," "," "]]
// You now should implement a method called "calculateWin" therefore you need a win table:

// 3 in a row --> 50 points
// 4 in a row --> 150 points
// 5 in a row --> 300 points
// and your input will be a list of three lists representing the three rows with symbols. E.g.

// [["Q","K","A","A","A"],
// ["10","A","Q","9","J"],
// ["A","A","A","J","K"]]
// this example would result in a result of 100 points because of row 3 and 5 beeing placed with 3 A's.

// Valid input symbols are:

// "9","10","J","Q","K","A"

// ----------------------
// parameters: given an array consisting of 3 arrays
// return the total amount of points the array is worth, after calculating the winning line(s)
// examples:

// [ ['Q', 'K', 'A', 'A', 'A' ],
//   ['10', 'A', 'Q', '9', 'J' ],         -->          100
//   ['A', 'A', 'A', 'J', 'K' ] ]    

// [ ['Q', 'Q', 'Q', 'Q', 'Q' ],
//   ['10', 'Q', 'Q', 'Q', 'A' ],         -->          600
//   ['Q', 'A', 'A', 'J', 'Q' ] ]    

// [ ['10', '10', '10', 'Q', 'Q' ],
//   ['9', '9', '9', '9', 'A' ],          -->          500
//   ['K', 'K', 'K', 'K', 'K' ] ]

// [ [ 'Q', '9', 'K', 'A', '10' ],
//   [ '10', 'J', '9', 'J', 'K' ],        -->            0
//   [ 'A', 'K', 'A', 'Q', 'K' ] ]

// [ [ 'Q', 'A', 'K', 'J', '10' ],
//   [ 'J', 'K', 'K', 'K', 'J' ],         -->          150
//   [ 'K', 'J', 'A', 'Q', 'J' ] ]

// pseudocode: there are only so many possible lines to start checking for winning combinations
// in total there are 5 lines
// create 5 variables to represent that and also a variable containing those variables together as an array
// create a helper function to calculate the number of points one line of a possible winning combination
// in the main function, feed each line into the helper function
// create a variable to hold the points
// after each line feed, have that variable accumulate the points after each iteration
// return total points

function calculateWin(lines){
    let totalPoints = 0,
        line1 = lines[0],
        line2 = lines[1],
        line3 = lines[2],
        line4 = [line1[0],line2[1],line3[2], line2[3], line1[4]],
        line5 = [line3[0],line2[1],line1[2], line2[3], line3[4]],
        allPossibleLines = [line1, line2, line3, line4, line5];
    for(const subarr of allPossibleLines){
        totalPoints += calculateConsecutives(subarr)
    }
    return totalPoints;
}

function calculateConsecutives(arr){
    let points = 0;
    if(arr[0] === arr[1] && arr[1] === arr[2]) points += 50;
    if(arr[3] === arr[0] && points===50) points += 100;
    if(arr[4] === arr[0] && points===150) points += 150;
    return points;
}