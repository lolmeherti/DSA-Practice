//finding smallest subarray greater than or equal to target

//input array
let array = [5, 1, 2, 1, 9, 6, 5, 3, 2];

let smallestSubArray = (nums, targetSum) => {
  let minWindowSize = nums.length; //init at array length because initially we assume it might just take the whole array to make the sum
  let currentWindowSum = 0;
  let windowStart = 0;
  let found = false;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    //keep adding the numbers to the current sum
    currentWindowSum += nums[windowEnd];

    //when my current sum reaches or is greater than target
    while (currentWindowSum >= targetSum) {
      minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1); //take the smaller window size
      currentWindowSum -= nums[windowStart]; //eliminate nums until the while loop condition is no longer met
      windowStart++; //slide the window ahead
      found = true;
    }
  }

  if (!found) {
    return 0;
  }

  return minWindowSize;
};

console.log(smallestSubArray(array, 8));
