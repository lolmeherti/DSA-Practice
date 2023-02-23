<?php

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, 
// where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. 
// nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

//halfway done

$arr1 = [1,2,3,0,0,0];
$arr2 = [2,5,6];

function mergeSortedArrays($nums1, $m, $nums2, $n)
{
    $m = $m;

    if($n == 0)
    {
        return $nums1;
    }

    for($i = 0; $i < count($nums1); $i++)
    {
        if($nums1[$i] >= $nums2[0])
        {
            array_pop($nums1);
            array_splice($nums1, $i, 0, $nums2[0]);
            array_shift($nums2);
            $m++;
        }
    }
    while(count($nums2) >= 1)
    {
        array_pop($nums1);
        array_splice($nums1, $m, 0, $nums2[0]);
        array_shift($nums2);
        $m++;
    }

    return $nums1;
}

print_r(mergeSortedArrays([1], 1, [], 0));