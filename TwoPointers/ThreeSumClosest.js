// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


const threeSumClosest = function(nums, target) {
  	nums.sort((a, b) => a - b)
	let closestNum = nums[0] + nums[1] + nums[2]

	if(nums[0] === nums[nums.lenght - 1]) {
		return closestNum
  	}

	for(let targetIndex = 0; targetIndex < nums.length - 2; targetIndex++) {
	  if(nums[targetIndex] === nums[targetIndex - 1]) continue
	  let newTarget = target - nums[targetIndex]
	  let start = targetIndex + 1
	  let end = nums.length - 1
	  while(start !== end) {
		  const sum = nums[start] + nums[end]
		  if(sum === newTarget) return target
          
		  closestNum = Math.abs((nums[targetIndex] + sum - target)) < Math.abs((closestNum - target)) ? nums[targetIndex] + sum : closestNum
		  if(sum < newTarget) {
			start++
		  } else {
			end--
		  }
	  }
	}
	  return closestNum
};
