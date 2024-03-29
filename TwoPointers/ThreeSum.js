// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// [-4,-1,-1,0,1,3]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

const threeSum = function(nums) {
  let result = []
      nums = nums.sort(function(a, b) {
      return a - b;
    });
  for(let targetIndex = 0; targetIndex < nums.length - 2; targetIndex++) {
      if(nums[targetIndex] === nums[targetIndex - 1]) {
        continue
      }
      let target = 0 - nums[targetIndex] //
      let start = targetIndex + 1
      let end = nums.length - 1
      while(start !== end) {
          if(nums[start] + nums[end] === target) {
                result.push([nums[targetIndex], nums[start], nums[end]])
               end--
                while (start < end && nums[start] === nums[start - 1]) {
                  start++;
              }

              while (start < end && nums[end] === nums[end + 1]) {
                  end--;
              }
          } else if(nums[start] + nums[end] < target) {
            start++
          } else {
            end--
          }
      }
    }
    return result
};