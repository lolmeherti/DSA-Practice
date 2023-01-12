//longest substring length with k distinct characters

let inputString = "AAAHHHHIIBBBCCCCCCCCCCTTTTTTTTTT";
longestSubstring = (string, k) => {
  // Initialize an empty map to store the frequency of each character in the window
  let map = {};
  // Initialize left pointer at the beginning of the string
  let left = 0;
  // Initialize maxLength as 0
  let maxLength = 0;
  // Initialize a count of unique characters in the window
  let uniqueCharCount = 0;

  // Iterate over the string with the right pointer
  for (let right = 0; right < string.length; right++) {
    // If the character is not already in the map
    if (!map[string[right]]) {
      // Initialize it with a value of 0
      map[string[right]] = 0;
    }
    // Increment the count of the current character
    map[string[right]]++;
    // If the current character is first seen in the window
    if (map[string[right]] == 1) {
      // increment the count of unique characters
      uniqueCharCount++;
    }
    // When the number of unique characters in the window exceeds k
    while (uniqueCharCount > k) {
      // Decrement the count of the character at the left pointer
      map[string[left]]--;
      // If the count of the character becomes 0
      if (map[string[left]] == 0) {
        // decrement the count of unique characters
        uniqueCharCount--;
      }
      // move the left pointer
      left++;
    }
    // Update the maximum length substring
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
console.log(longestSubstring(inputString, 2));
