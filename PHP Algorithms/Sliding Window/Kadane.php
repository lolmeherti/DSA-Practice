<?php
//kadanes algorithm, max subarray sum
function maxSubArray($nums) {
    $n = count($nums);
    if ($n == 0) {
        return 0;
    }
    $largestSum = $nums[0];
    $currentSum = $nums[0];
    for ($i = 1; $i < $n; $i++) {
        $currentSum = max($nums[$i], $currentSum + $nums[$i]);
        $largestSum = max($largestSum, $currentSum);
    }
    echo $largestSum;
}

$array = [-2,1,-3,4,-1,2,1,-5,4];
maxSubArray($array);



