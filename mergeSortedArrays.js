//without overlap
let merge = (firstArray, secondArray) => {
  let lastIndex = firstArray.length - 1;

  if (firstArray.length == 0 || secondArray.length == 0) {
    return firstArray.concat(...secondArray);
  }

  if (firstArray[lastIndex] < secondArray[0]) {
    return firstArray.concat(...secondArray);
  }

  return secondArray.concat(...firstArray);
};

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// console.log(merge(arr2, arr1));

//with overlap its better to just use mergeSort
let mergeSortPrep = (firstArray, secondArray) => {
  return mergeSort(firstArray.concat(...secondArray));
};

let mergeSort = (nums) => {
  const half = nums.length / 2;

  // Base case or terminating case
  if (nums.length < 2) {
    return nums;
  }

  const left = nums.splice(0, half);
  return mergeLeftAndRight(mergeSort(left), mergeSort(nums));
};

let mergeLeftAndRight = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
  //if you want to avoid duplicates, return a set instead
};

console.log(mergeSortPrep(arr1, arr2));
