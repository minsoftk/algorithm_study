const arr = Array(10).fill(0);

for (let i = 0; i < arr.length; i += 1) {
  arr[i] = Math.floor(Math.random() * 1000 + 1);
}

/**
 * get Array sorted by QuickSort
 * @param {Array} arr
 * @return {Array}
 */
function QuickSort(arr) {
  let pivot = arr[0];
  let left = [],
    right = [];

  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }

  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

console.log(QuickSort(arr));
