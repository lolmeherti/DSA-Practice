// Description
// Given a string S, find the length of the longest substring T that contains at most k distinct characters.

// Example
// Example 1:

// Input: S = "WORLD" and k = 4
// Output: 4
// Explanation: T = "WORL" or "ORLD"

// longestSubstring(S, k):
// 	stringsEncountered = {}
//   maxSubstring = 0
//   currentSubstringLength = 0
//   leftMostIndex = 0
  
//   for(i = 0; i < S.length; i++) {
//   	if(stringsEncountered.contains(S[i])) {
//     	stringsEncountered[S[i]] += 1
//     } else {
//     	stringsEncountered[S[i]] = 1
//     }
    
//     currentSubstringLength += 1
    
//     //triggers when we have more than 3 distinct characters inside our hashmap
//     while(Object.keys(stringsEncountered).length > k) {
    
//     currentSubstringLength -= 1
//     stringsEncountered[S[leftMostIndex]] -= 1
//     if(stringsEncountered[S[leftMostIndex]] === 0) {
//     	Object.DELETE stringsEncountered[S[leftMostIndex]]
//     }
    
//     leftMostIndex += 1
//     }

//    maxSubstring = Math.max(maxSubstring, currentSubstringLength)
//   }
// 	return maxSubstring
