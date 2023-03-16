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