// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character.
// You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

let characterReplacement = (string, k) => {
  let map = {};
  let start = 0;
  let maxLength = 0;
  let maxCount = 0;
  for (let end = 0; end < string.length; end++) {
    if (!map[string[end]]) {
      map[string[end]] = 0;
    }
    map[string[end]]++;
    maxCount = Math.max(maxCount, map[string[end]]);
    if (end - start + 1 - maxCount > k) {
      map[string[start]]--;
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

console.log(characterReplacement("AABABBA", 1));
