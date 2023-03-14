const arr = Array(10).fill(0);

for (let i = 0; i < arr.length; i += 1) {
  arr[i] = Math.floor(Math.random() * 1000 + 1);
}

/**
 * get Array sorted by QuickSort
 * @param {Array} arr
 * @return {Array}
 */
function MergeSort(arr) {}

console.log(QuickSort(arr));
