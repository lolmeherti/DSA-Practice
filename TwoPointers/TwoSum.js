// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//two pointers solution
var twoSum = function(nums, target) {
    let leftPointer = 0;
    let rightPointer =  nums.length - 1;

    while(leftPointer < rightPointer)
    {
        if(nums[leftPointer] + nums[rightPointer] == target)
        {
            return [leftPointer, rightPointer];
        } 
        
        if(nums[leftPointer] + nums[rightPointer])
        {
            rightPointer -= 1;
        } else {
            leftPointer += 1;
        }
    }

    return [];
};


//old but good solution//
// var twoSum = function(nums, target) {
//     let previousValues = {};

//     for(let index = 0; index<nums.length; index++)
//     {
//         let missingValue = target - nums[index];

//         console.log(`current value: ${nums[index]}`);
//         console.log(`missing value: ${missingValue}`);

//         if(missingValue in previousValues)
//         {
//             return [previousValues[missingValue], index];
//         } else {
//             previousValues[nums[index]] = index;
//         }

//         console.log(previousValues);
//     }

//     return [];
// };

console.log(twoSum([2,7,11,15], 9));