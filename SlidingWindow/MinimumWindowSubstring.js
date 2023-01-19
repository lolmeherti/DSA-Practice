// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

let minWindow = (s, t) => {
  let currentString = "";
  let matchedChars = [];
  let minString = "";

  for (let sIndex = 0; sIndex < s.length; sIndex++) {
    currentString = currentString.concat(s[sIndex]);
    if (!matchedChars[s[sIndex]] && t.includes(s[sIndex])) {
      matchedChars.push(s[sIndex]);
    }

    while (matchedChars.length === t.length) {
      if (minString.length === 0 || currentString.length < minString.length) {
        minString = currentString;
      }

      let removedChar = currentString[0];
      currentString = currentString.substring(1);
      if (t.includes(removedChar)) {
        matchedChars.splice(matchedChars.indexOf(removedChar), 1);
      }
    }
  }
  console.log(minString);
  return minString;
};

minWindow("ADOBECODEBANC", "ABC");
