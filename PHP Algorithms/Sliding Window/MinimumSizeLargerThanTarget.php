<?php
// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

function minimumSizeSubArrayLargerThanTarget(array $nums,int $target) : int
{
    if(empty($nums))
    {
        return -1;
    }

    if(count($nums) < 2 && $nums[0] >= $target)
    {
        return 1;
    }

    $currentSum = 0;
    $numsForSum = 0;
    $start = 0;
    $result = PHP_INT_MAX;

    for($i = 0; $i < count($nums); $i++)
    {
        $currentSum += $nums[$i];
        $numsForSum++;
        
        while($currentSum >= $target)
        {
            $result = min($result, $numsForSum);
            $numsForSum--;
            $currentSum -= $nums[$start];
            $start++;
        }
    }

    return $result == PHP_INT_MAX ? 0 : $result;
}

$targetInput = 15;
$numsInput = [5,1,3,5,10,7,4,9,2,8];
print_r(minimumSizeSubArrayLargerThanTarget($numsInput, $targetInput));