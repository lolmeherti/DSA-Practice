// Given a string s, find the length of the longest 
// substring without repeating characters.

// Example 1:

// Input: s = "abcafbcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function(string) {
  let uniqueChars = [];
  let maxStringLength = 0;
  let currentStringLength = 0;

  for (let end = 0; end < string.length; end++) {
    if (!uniqueChars.includes(string[end])) {
      //console.log(`pushing ${string[end]}`);
      uniqueChars.push(string[end]);
    } else {
      while (uniqueChars.includes(string[end])) {
        //console.log(`removing ${string[end]}`);
        uniqueChars.shift();
      }

      uniqueChars.push(string[end]);
    }

    currentStringLength = uniqueChars.length;

    if (maxStringLength < currentStringLength) {
      maxStringLength = Math.max(maxStringLength, currentStringLength);
    }
  }
  //console.log(uniqueChars);
  return maxStringLength;
};