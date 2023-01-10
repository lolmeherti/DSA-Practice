//Sliding Window
let array = [5, 3, 9, 2, 1, 6, 5, 3, 2];

//max sum of X nums

let maxSum = (nums, windowSize) => {
  // Initialize variables to track the maximum sum and the current sum
  let maxSumFound = 0;
  let currentSum = 0;

  // Iterate through the remaining elements in the array
  for (let index = 0; index < nums.length; index++) {
    currentSum += nums[index];

    //the first time i reach my window size, start calculating max sum
    //first run: currentSum = [5,3] = [8]
    if (index >= windowSize - 1) {
      //come in here with windowSize amount of numbers and decide which is the max sum
      maxSumFound = Math.max(maxSumFound, currentSum);

      //then subtract the left most value and carry on
      currentSum -= nums[index - (windowSize - 1)];
    }
  }

  return maxSumFound;
};

let res = maxSum(array, 2);
console.log(res);
