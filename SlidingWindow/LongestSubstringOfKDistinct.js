//longest substring length with k distinct characters

let inputString = "AAAHHHHIIBBBCCCCCCCCCTTTTTTTTTT";

// longestSubstring = (string, k) => {
//   let map = {};
//   let currentWindowlength = 0;
//   let start_window = 0,
//     maxLength = 1;
//   for (let index = 0; index < string.length; index++) {
//     let char = string[index];
//     map[char] = index;
//     if (Object.keys(map).length > k) {
//       start_window = Math.min.apply(null, Object.values(map));
//       delete map[string[start_window]];
//       start_window++;
//     }

//     console.log(map);

//     currentWindowlength = index - start_window + 1;
//     maxLength = Math.max(currentWindowlength, maxLength);
//   }
//   return maxLength;
// };

// console.log(longestSubstring(inputString, 2));

longestSubstring = (string, k) => {
  let map = {};
  let distinctChars = [];
  let currentLength = 0;
  let maxLength = 1;

  for (let index = 0; index < string.length; index++) {
    if (!map[string[index]]) {
      distinctChars.push(string[index]);
      map[string[index]] = 1;
    } else {
      map[string[index]] += 1;
    }
  }

  for (let index = 0; index < distinctChars.length; index++) {
    currentLength += map[distinctChars[index]];
    if (index >= k - 1) {
      maxLength = Math.max(maxLength, currentLength);
      console.log(currentLength);
      currentLength -= map[distinctChars[index - (k - 1)]];
      currentLength;
    }
  }

  return maxLength;
};

console.log(longestSubstring(inputString, 3));
