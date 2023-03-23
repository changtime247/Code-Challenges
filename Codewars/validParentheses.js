// 7 kyu
// Valid Parentheses
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100
// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.
// Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

// Given a string consisting of only "(" and/or ")"
// Return boolean indicating whether the string is a valid set of parentheses (i.e. no unclosed parentheses)
// Ex:
// validParentheses("()"), true
// validParentheses("((()))"), true
// validParentheses("()()()"), true
// validParentheses("(()())()"), true
// validParentheses("()(())((()))(())()"), true
// validParentheses(""), true
// validParentheses(")("), false
// validParentheses("()()("), false
// validParentheses("((())"), false
// validParentheses("())(()"), false
// validParentheses(")()"), false
// validParentheses(")"), false
// If the length of arg-string is odd or first char is ")", then we can automatically return false.
// Create an empty array variable, stack.
// Iterate through arg-string:
//      if char is "(" then push onto stack;
//      if char is ")" pop stack
//      If char is ")" and stack is empty, we can return false

function validParentheses(parenStr) {
  if (parenStr.length % 2 == 1 || parenStr[0] == ')') return false
  let stk = []
  for (const char of parenStr) {
    if (char === '(') stk.push('(')
    else if (char === ')' && stk.length > 0) stk.pop()
    else return false
  }
  return stk.length == 0
}
