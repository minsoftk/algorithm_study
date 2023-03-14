const arr = Array(4).fill(0);

for (let i = 0; i < arr.length; i += 1) {
  arr[i] = Math.floor(Math.random() * 1000 + 1);
}

/**
 * get Array and return bubble Sorted Array
 * @param {Array} arr
 * @return {Array}
 */
function insertionSort(arr) {
  // 5 3 2 4
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else break;
    }
  }

  return arr;
}

console.log(insertionSort(arr));
