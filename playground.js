//longest substring of k distinct characters
let inputString = "AAAHHHHIIBBBCCCCCCCCCCTTTTTTTTTT";
let longestKSubstring = (string, k) => {
  let map = {};
  let maxLength = 0;
  let uniqueCharCount = 0;
  let left = 0;

  for (right = 0; right < string.length; right++) {
    if (!map[string[right]]) {
      map[string[right]] = 0;
    }

    map[string[right]]++;

    if (map[string[right]] == 1) {
      uniqueCharCount++;
    }

    while (uniqueCharCount > k) {
      map[string[left]]--;

      if (map[string[left]] == 0) {
        uniqueCharCount--;
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

console.log(longestKSubstring(inputString, 2));
