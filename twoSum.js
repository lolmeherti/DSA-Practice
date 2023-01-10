let twoSum = (target, nums) => 
{
    let previousValues = {};

    for (i=0; i<nums.length; i++)
    {  
        let neededValue = target - nums[i];

        if(neededValue in previousValues)
        {
            return [previousValues[neededValue], i];
        } else {
            previousValues[nums[i]] = i;
        }
    }

    return -1;
}

let res = twoSum(8, [5,3,2,1,9]);
console.log(res);