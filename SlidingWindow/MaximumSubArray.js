//maximum subarray
let array = [-2, 1, -3, 4, 4];

let maximumSubarray = (nums) => {
  let maxSum = nums[0]; // initialize maxSum as the first element of the input array
  let currentSum = nums[0]; // initialize currentSum as the first element of the input array

  for (let index = 1; index < nums.length; index++) {
    if (currentSum < nums[index] && currentSum < 1) {
      // if currentSum is less than the current element and less than 1
      currentSum = nums[index]; // set currentSum to the current element
    } else {
      currentSum = currentSum + nums[index]; // otherwise, add the current element to currentSum
    }

    if (currentSum > maxSum) {
      // if currentSum is greater than maxSum
      maxSum = currentSum; // set maxSum to currentSum
    }
  }
  return maxSum; // return maxSum as the result
};

let res = maximumSubarray(array);
console.log(res);
