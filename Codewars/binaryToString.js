// 7 kyu
// Password Check - Binary to String
// A wealthy client has forgotten the password to his business website, but he has a list of possible passwords. His previous developer has left a file on the server with the name password.txt. You open the file and realize it's in binary format.
// Write a script that takes an array of possible passwords and a string of binary representing the possible password. Convert the binary to a string and compare to the password array. If the password is found, return the password string, else return false;
// decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => 'password123'
// decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false
// decodePass(['password456', 'pass1', 'test12'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false

// Given an array of random strings, representing possible passwords. Array may or may not contain the correct password.
// Also given the correct password as a series of space-delimited binary numbers (each representing a letter of the correct password).
// If the string is in the array, return the string. Else, return the boolean value false.
// Convert binary string (i.e. base 2 number) to series of base 10 numbers. Convert result to letters, forming the correct password.
// Iterate through the arg-array to check if correct password is contained in it.

function decodePass(passArr, bin) {
  return (
    passArr.find(
      (pw) =>
        pw === String.fromCharCode(...bin.split` `.map((b) => parseInt(b, 2)))
    ) || false
  )
}
