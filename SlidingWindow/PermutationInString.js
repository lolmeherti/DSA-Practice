// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

let checkInclusion = (string1, string2) => {
  let endIndexS1 = string1.length - 1;
  let matched = 0;

  for (let index = 0; index < string2.length; index++) {

    console.log(`string 1 char: ${string1[endIndexS1]}`);
    console.log(`string 2 char: ${string2[index]}`);

    if (string1[endIndexS1] == string2[index]) {
      endIndexS1--;
      matched++;
    } else {
      matched = 0;
    }

    if (matched == string1.length) {
      return true;
    }
  }

  return false;
};

console.log(checkInclusion("ab", "ab"));
