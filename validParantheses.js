function isValid(s) {
  // Initialize an empty stack to store characters
  const stack = [];

  // Iterate through each character in the string
  for (const c of s) {
    // If the character is an opening parentheses, push the corresponding closing parentheses onto the stack
    if (c === "(") {
      stack.push(")");
    } else if (c === "{") {
      stack.push("}");
    } else if (c === "[") {
      stack.push("]");
    }
    // If the character is a closing parentheses, check whether it is the correct one by comparing it to the top element of the stack
    else if (stack.length === 0 || stack.pop() !== c) {
      // If the stack is empty or the top element is not the correct closing parentheses, return false
      return false;
    }
  }

  // If the loop completes, return true if the stack is empty (all opening and closing parentheses are correctly matched) or false if the stack is not empty (some unbalanced parentheses)
  return stack.length === 0;
}

console.log(isValid("(([]{}[]))"));