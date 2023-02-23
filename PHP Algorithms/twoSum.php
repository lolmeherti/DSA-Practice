<?php

// You are given an array of integers. 
// Write a function that returns the indices of the two numbers that add up to a given target.
// $nums = [2, 7, 11, 15, 17];
// $target = 9;
// result: [0, 1] // because nums[0] + nums[1] = 2 + 7 = 9

function twoSum($nums, $target)
{
    $valuesSeen = [];
    
    for($i = 0; $i < count($nums); $i++)
    {
        $missingNumber = $target - $nums[$i];

        if(isset($valuesSeen[$missingNumber]))
        {
            return [$valuesSeen[$missingNumber], $i];
        } else {
            $valuesSeen[$nums[$i]] = $i;
        }
    }

    return -1;
}


print_r(twoSum([2, 3, 11, 15, 7], 9));