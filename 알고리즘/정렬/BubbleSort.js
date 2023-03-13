const arr = Array(10).fill(0);

for (let i = 0; i < arr.length; i += 1) {
  arr[i] = Math.floor(Math.random(0, 1000) * 1000 + 1);
}

/**
 * get Array and return bubble Sorted Array
 * @param {Array} arr
 * @return {Array}
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let swap = false;
    for (let j = 0; j <= arr.length - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) break;
  }

  return arr;
}

console.log(bubbleSort(arr));
