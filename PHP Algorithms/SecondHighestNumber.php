<?php

// Problem: Given an array of integers, find the second highest element in the array.

// For example, if the input array is [5, 7, 1, 8, 4, 3], the output should be 7.

// Use the systematic approach we just discussed to solve this problem. Good luck!


$inputArray = [5, 7, 1, 8, 4, 3];

function findSecondHighest($array)
{
    $highestNumber = $array[0];
    $secondHighestNumber = 0;

    for($i = 1; $i < count($array); $i++)
    {

        if($array[$i] > $highestNumber)
        {
            $secondHighestNumber = $highestNumber;
        }

        $highestNumber = max($highestNumber, $array[$i]);
    }

    return $secondHighestNumber;
}

echo findSecondHighest($inputArray);