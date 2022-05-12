// 8 kyu
// A Strange Trip to the Market
// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."
// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!
// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.
// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty".

// ----------------------
// parameters: given an arbitrary string and three key phrases "tree fiddy", "3.50", and "three fifty"
// return: boolean if string includes any one of key phrases
// examples:
// "Your girlscout cookies are ready to ship. Your total comes to tree fiddy" --> true
// "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance." --> false
// pseudocode: set key phrases to respective variables. see if string includes any one of the variables. return datatype is boolean

function isLockNessMonster(s) {
    let a = "tree fiddy",
        b = "3.50",
        c = "three fifty";
    return s.includes(a) || s.includes(b) || s.includes(c);
}