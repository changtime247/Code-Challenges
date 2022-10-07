// 6 kyu
// Collatz
// A collatz sequence, starting with a positive integern, is found by repeatedly applying the following function to n until n == 1 :

// f(n)={
// n/2, if n is even
// 3n+1, if n is odd
// A more detailed description of the collatz conjecture may be found on Wikipedia.
// The Problem
// Create a function collatz that returns a collatz sequence string starting with the positive integer argument passed into the function, in the following form:
// "X0->X1->...->XN"
// Where Xi is each iteration of the sequence and N is the length of the sequence.

// Sample Input
// Input: 4
// Output: "4->2->1"
// Input: 3
// Output: "3->10->5->16->8->4->2->1"
// Don't worry about invalid input. Arguments passed into the function are guaranteed to be valid integers >= 1

// ----------------------
// Parameter: Given a positive integer.
// Return a string with all the integers from the steps from collatz sequence on argument.
// Examples:
// collatz(1)      -->     '1'
// collatz(2)      -->     '2->1'
// collatz(3)      -->     '3->10->5->16->8->4->2->1'
// collatz(4)      -->     '4->2->1'
// collatz(72)     -->     '72->36->18->9->28->14->7->22->11->34->17->52->26->13->40->20->10->5->16->8->4->2->1'
// collatz(372)    -->     '372->186->93->280->140->70->35->106->53->160->80->40->20->10->5->16->8->4->2->1'
// Pseudocode:
// Create empty array.
// While n < 1, push n to empty array and check if odd or even and perform corresponding collatz operation.
// Push 1 to the array, join and return.

function collatz(n) {
  let steps = []
  while (n > 1) {
    steps.push(n)
    if (n % 2) {
      n = 3 * n + 1
    } else {
      n /= 2
    }
  }
  steps.push(1)
  return steps.join`->`
}
