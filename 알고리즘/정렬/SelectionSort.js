const arr = Array(10).fill(0);

for (let i = 0; i < arr.length; i += 1) {
  arr[i] = Math.floor(Math.random() * 1000 + 1);
}

/**
 * get Array and return bubble Sorted Array
 * @param {Array} arr
 * @return {Array}
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let min = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort(arr));
