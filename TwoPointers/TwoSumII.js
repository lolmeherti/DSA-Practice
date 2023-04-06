/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let start = 0;
let end = nums.length - 1;
while(start !== end) {
    const currentSum = nums[start] + nums[end]
    if(currentSum === target) {
      return [start + 1, end + 1]
  }
  if(currentSum > target) {
      end -= 1
  } else {
      start += 1
  }
}
    return []
};