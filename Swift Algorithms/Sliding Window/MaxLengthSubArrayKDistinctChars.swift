/*
 @param s: A string
 @param k: An integer
 @return: An integer
*/
import Foundation

func lengthOfLongestSubstringKDistinct(_ s: String, _ k: Int) -> Int 
{
   var stringsEncountered:[String:Int] = [:]
   var maxSubstring:Int = 0
   var currentSubstringLength:Int = 0
   var leftMostIndex:Int = 0
    var i = 0
    var stringToArray = Array(s)

     for char in stringToArray
    {
        if(stringsEncountered.keys.contains(String(char)))
        {
            stringsEncountered[String(char)] += 1
        } 
        else 
        {
            stringsEncountered[String(char)] = 1
        }

        currentSubstringLength += 1

        while(stringsEncountered.count > k)
        {
            currentSubstringLength -= 1
            stringsEncountered[stringToArray[leftMostIndex]] -= 1

            if(stringsEncountered[leftMostIndex] === 0)
            {
                stringsEncountered.removeValue(forKey: stringToArray[leftMostIndex])
            }

            leftMostIndex += 1
        }

        maxSubstring = max(currentSubstringLength, maxSubstring)
    }

    return maxSubstring
}

lengthOfLongestSubstringKDistinct("WORLD", 4)
