//ONLY A PAIR PROGRAMMING EXERCISE!
// target = 7, nums = [2,3,1,2,4,3]
// [1, 1, 1, 1, 1, 1, 23] O(2n)
// currentSum = nums[start]
// digits = 0
// start = 0

// for i = 1; i < count(nums); i++ {

// 	if(currentSum >= target)
//   {
  
//   	if(i-start < digits)
//     {
    
//     	digits = i-start
      
//     }
    
//     currentSum -= nums[start]
    
//     start += 1
    
//     i -= 1
    
// 	} else {
  
// 	currentSum += nums[i]
  
//   	}

// 	}
  
//   return digit
  
// }

class Solution 
{
    func minSubArrayLen(_ target: Int, _ nums: [Int]) -> Int 
    {
        var digits = 0
        var start = 0
        var currentSum = 0

        for i in 0...nums.count - 1
        {
            if(nums[i] >= target || nums[0] >= target)
            {
                return 1
            }

            currentSum += nums[i]

            while(currentSum >= target)
            {
                if(digits == 0)
                {
                    digits = i - start + 1
                }

                digits = min(digits, i - start + 1)
                currentSum -= nums[start]
                start += 1
            }
        }

        return digits
    }
}