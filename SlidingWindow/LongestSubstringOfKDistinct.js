//longest substring length with k distinct characters

let inputString = "AAAHHHHIBCCCCCCCCCTTTTTTTTTTT";

longestSubstring = (string, k) => {
  let map = {};
  let currentWindowlength = 0;
  let start_window = 0,
    maxLength = 1;
  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    map[char] = index;
    if (Object.keys(map).length > k) {
      start_window = Math.min.apply(null, Object.values(map));
      delete map[string[start_window]];
      start_window++;
    }
    currentWindowlength = index - start_window + 1;
    maxLength = Math.max(currentWindowlength, maxLength);
  }
  return maxLength;
};

console.log(longestSubstring(inputString, 2));
