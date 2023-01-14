// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

let longestSubstringOfUniqueCharacters = (string) => {
  let leftPointer = 0;
  let rightPointer = 0;
  let maxLength = 0;
  let charSet = new Set();

  while (rightPointer < string.length) {
    if (!charSet.has(string[rightPointer])) {
      charSet.add(string[rightPointer]);
      maxLength = Math.max(maxLength, charSet.size);
      rightPointer++;
    } else {
      charSet.delete(string[leftPointer]);
      leftPointer++;
    }
  }

  return maxLength;
};

console.log(longestSubstringOfUniqueCharacters("aab"));
