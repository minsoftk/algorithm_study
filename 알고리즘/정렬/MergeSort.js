const arr = Array(10).fill(0);

for (let i = 0; i < arr.length; i += 1) {
  arr[i] = Math.floor(Math.random() * 1000 + 1);
}

/**
 * get Array sorted by QuickSort
 * @param {Array} arr
 * @return {Array}
 */
function MergeSort(arr) {
  return mergeSplit(arr);

  function mergeSplit(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    const [left, right] = [arr.slice(0, mid), arr.slice(mid, arr.length)];
    return merge(mergeSplit(left), mergeSplit(right));
  }

  function merge(left, right) {
    const arr = [];
    let lp = 0,
      rp = 0;

    while (lp < left.length && rp < right.length) {
      if (left[lp] > right[rp]) {
        arr.push(right[rp++]);
      } else if (left[lp] <= right[rp]) arr.push(left[lp++]);
    }
    while (lp < left.length) {
      arr.push(left[lp++]);
    }
    while (rp < right.length) {
      arr.push(right[rp++]);
    }

    return arr;
  }
}

console.log(MergeSort(arr));
