// 7 kyu
// Simple Fun #347: Bulb Maze I

// You walk in a maze. You need to reach the exit through many rooms. These rooms are in a straight line.

// You can only walk in the dark. Otherwise, you will be caught by the enemy.

// Your trouble is that some rooms have light bulbs. If the light bulb is bright when you enter the room. You were caught by the enemy.

// Fortunately, the status of these bulbs (on/off) is aoto-switched every minute. So you have a chance to go through the maze.

// Task
// Let's us use a string map to represent these rooms， like this: "xo oxox".

// "x" means there is a bulb in the room, and its initial status is off;

// "o" means there is a bulb in the room, and its initial status is on;

// " "(space) means a room without bulb, it's always dark.

// Your task is to determine if you can go through the maze. Return true if you can, false otherwise.

// Note
// Your initial position is the most left, the exit position is the most right.

// Your moving speed is 1 minute per step. You can not stop before you start your moving until you reach the exit.

// Examples
// For map = "xo oxox". The output should be true.

// step 0 :  xo oxox
//           ^ <--------You are here
// step 1 :  ox xoxo
//            ^ <--------You are here
// step 2 :  xo oxox
//             ^ <--------You are here
// step 3 :  ox xoxo
//              ^ <--------You are here
// step 4 :  xo oxox
//               ^ <--------You are here
// step 5 :  ox xoxo
//                ^ <--------You are here
// step 6 :  xo oxox
//                 ^ <--------You are here
// step 7 :  ox xoxo
//                  ^ <--------You've go through the maze :)
// For map = "xo oxox". The output should be false.

// step 0 :  xo  oxox
//           ^ <--------You are here
// step 1 :  ox  xoxo
//            ^ <--------You are here
// step 2 :  xo  oxox
//             ^ <--------You are here
// step 3 :  ox  xoxo
//              ^ <--------You are here
// step 4 :  xo  oxox
//               ^ <--------You were caught by the enemy :(
// Happy Coding ^_^

// ----------------------
// Parameters: Given a string of x's, o's, and/or spaces, each character representing a room.
// x's mean that the room's light is off. o's mean that the room's light is on. Spaces mean that room's light stays off.
// Rooms, represented by x's and o's, will alternate to its opposite (x to o and o to x), after the player moves from one room to the next
// Return boolean value:
// True, if player can get through maze
// False, if player cannot.
// To get through maze, player must enter a room with light on
// Examples:
// bulbMaze("xo oxox")      -->     true
// bulbMaze("xo  oxox")     -->     false
// bulbMaze("xo ox xo")     -->     true
// bulbMaze("xooxxo")       -->     false
// bulbMaze("xxxxxx")       -->     false
// bulbMaze("oooooo")       -->     false
// bulbMaze("      ")       -->     true
// bulbMaze(" ox")          -->     true
// bulbMaze("xo")           -->     true
// Pseudocode: 
// Create variable and set it to 0, to represent the starting index of the player (as player will need to make it to last index of string)
// Split the string into an array, as we cannot change individual letters of a string
// While player index is less than length of array, 
// (1) perform a check to see if player entered an 'o' room (if player did, return false) and 
// (2) change lights (all x's to o's and o's to x's)
// Increment player index by 1
// Return true if player passed through entire while loop

function bulbMaze(maze){
    let playerIndex=0;
    let course=maze.split``
    while(playerIndex<maze.length){
        if(course[playerIndex]===`o`) return false;
        playerIndex++;
        course=course.map(r=>r==`x`?r=`o`:r==`o`?r=`x`:` `);
    }
    return true;
}