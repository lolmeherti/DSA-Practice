let arrayToSort = [9, 5, 2, 6];

function quickSort(arrayToSort) {
  if (arrayToSort.length < 2) {
    return arrayToSort;
  }

  let pivotIndex = Math.floor(arrayToSort.length / 2);
  let pivot = arrayToSort[pivotIndex];
  let left = [];
  let right = [];
  for (let i = 0; i < arrayToSort.length; i++) {
    let number = arrayToSort[i];
    if (number > pivot) {
      right.push(number);
    } else if (number < pivot) {
      left.push(number);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

let res = quickSort(arrayToSort);

console.log(res);
