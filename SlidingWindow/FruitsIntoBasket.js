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

var totalFruit = function (fruits) {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let map = {};

  //mapping out our types and the times they occur
  while (end < fruits.length) {
    if (!map[fruits[end]]) {
      map[fruits[end]] = 1;
    } else {
      map[fruits[end]]++;
    }

    //if we have more than two types
    while (Object.keys(map).length > 2) {
      //remove the oldest element
      map[fruits[start]]--;
      if (map[fruits[start]] === 0) {
        delete map[fruits[start]];
      }
      //increment start
      start++;
    }

    //end - start + 1 is the length of the sub array 
    //and therefor it is equal to the amount of fruits we collected
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
  }

  return maxLength;
};

console.log(totalFruit([1, 2, 3, 2, 2]));
