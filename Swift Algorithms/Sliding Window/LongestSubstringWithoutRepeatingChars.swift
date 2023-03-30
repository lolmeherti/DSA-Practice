// Given a string s, find the length of the longest 
// substring without repeating characters.

// Example 1:

Input: s = "abcafbcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

lengthOfLongestSubstring(s) {
  charsEncountered = {}
  currentLengthOfSubstring = 0
  maxLengthOfSubstring = 0
  left = 0
  
	for(i; i < s.length; i++) {
		if(charsEncouhntered[s[i]] === undefined) {
    	charsEncouhntered[s[i]] = 1
    } else {
    	charsEncouhntered[s[i]] += 1
    }
    
    currentLengthOfSubstring += 1
    
    while(charsEncouhntered[s[i]] > 1) {
    	charsEncouhntered[s[left]] -= 1
      currentLengthOfSubstring -= 1
      if (charsEncountered[s[left]] === 0) {
        delete charsEncountered[s[left]]
      }
      left += 1
    }
    
    maxLengthOfSubstring = Math.max(maxLengthOfSubstring, currentLengthOfSubstring)
  }
  
  return maxLengthOfSubstring
}