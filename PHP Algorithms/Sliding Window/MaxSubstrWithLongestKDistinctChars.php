<?php
// Suppose we have a string; we have to calculate the length of the longest substring T that contains at most k distinct characters.

// So, if the input is like s = "eceba", k = 2, then the output will be 3 as T is "ece" which its length is 3.

function longestSubstrKDistinctChars($string, $k)
{

    $map = [];
    $maxSubstrLen = 0;
    $result = 0;

    for($i = 0; $i < strlen($string); $i++)
    {
        if(!isset($map[$string[$i]]))
        {
            $map[$string[$i]] = 1;
        } else {
            $map[$string[$i]] +=1;
        }

        if(count($map) > $k)
        {
            $firstKey = array_key_first($map);
            $maxSubstrLen -= $map[$firstKey];
            array_splice($map,0,1);
        }
        
        $maxSubstrLen += 1;
        $result = max($maxSubstrLen, $result);
        
    }
   echo $result;
}


longestSubstrKDistinctChars("eceba", 2);