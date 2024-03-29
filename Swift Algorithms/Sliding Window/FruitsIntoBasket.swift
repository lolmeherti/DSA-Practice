// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

 

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].



// // [3,3,3,1,2,1,1,2,3,3,4] - DOES NOT WORK CURRENTLY

// 	/**
//  * @param {number[]} fruits
//  * @return {number}
//  */
// var totalFruit = function(fruits) 
// {

//     let currentFruits= new Map();
//     let maxFruitsCount = 0;
//     let currentFruitsCount = 0;
    
//     if(fruits.length <=2)
//     {
//       return fruits.length
//     }
    
//     for (let right = 0; right <= fruits.length; right++)
//     {
//         if(!currentFruits.has(fruits[right]))
//         {
//             currentFruits.set(fruits[right], right);
//         }
        
//         if(currentFruits.size > 2)//this is a temporary magic number, means fruits types
//         {
// 						currentFruits.delete(currentFruits.keys().next().value);
//         }
        
//         currentFruitsCount = right - currentFruits.get(currentFruits.keys().next().value) + 1;
      
//     		maxFruitsCount = Math.max(maxFruitsCount, currentFruitsCount);
//     }
    
//     return maxFruitsCount
// };

var totalFruit = function(fruits) 
{

    let currentFruits= new Map();
    let maxFruitsCount = 0;
    let left = 0;
    
    if(fruits.length <=2)
    {
      return fruits.length
    }
    
    for (let right = 0; right < fruits.length; right++)
    {
        currentFruits.set(fruits[right], right);
        if(currentFruits.size > 2)//this is a temporary magic number, means fruits types
        {
          const lowestIndex = smallest(currentFruits);
          left = currentFruits.get(lowestIndex) + 1
          currentFruits.delete(lowestIndex);
        }
          maxFruitsCount = Math.max(maxFruitsCount, right - left + 1);
    }
    
    return maxFruitsCount
};
const smallest = (map) => [...map].reduce((a, b) => a[1] < b[1] ? a : b)[0];






















