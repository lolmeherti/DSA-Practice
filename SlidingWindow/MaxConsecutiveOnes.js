// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
// https://leetcode.com/problems/max-consecutive-ones-iii/
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

let longestOnes = (string,k) =>
{

    let windowStart = 0;
    let maxCount = 0;
    let map = {};
    let maxLength = 0;

    for(windowEnd = 0; windowEnd<string.length; windowEnd++)
    {
        if(!map[string[windowEnd]])
        {
            map[string[windowEnd]] = 1;
        } else {
            map[string[windowEnd]]++;
        }

        //whichever character occured the most amount of times
        maxCount  = Math.max(maxCount, map[string[windowEnd]]);

        //the formula is: my current window size - whichever char occured the most. this gives me the count of the operations i had to make
        //which cant be greater than k
        if(windowEnd - windowStart + 1 - maxCount > k)
        {
            //take out the char at the start
            map[string[windowStart]]--;
            //move the start up by one
            windowStart++;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

let inputString = [1,1,1,0,0,0,1,1,1,1,0], k=2;

console.log(longestOnes(inputString, k));