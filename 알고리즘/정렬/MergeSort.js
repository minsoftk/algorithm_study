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

/**
 * 각각의 split 된 배열을 직접 나열해주는 함수. 위의 함수는 한단계 더 추상화가 되어있다.
 * @param {} arr
 * @returns
 */
function merge_sort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = merge_sort(arr.slice(0, mid));
  const right = merge_sort(arr.slice(mid, arr.length));

  let leftIdx = 0,
    rightIdx = 0,
    idx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      arr[idx] = left[leftIdx++];
    } else {
      arr[idx] = right[rightIdx++];
    }
    idx += 1;
  }
  if (leftIdx === left.length) {
    while (rightIdx < right.length) {
      arr[idx] = right[rightIdx++];
      idx += 1;
    }
  } else if (rightIdx === right.length) {
    while (leftIdx < left.length) {
      arr[idx] = left[leftIdx++];
      idx += 1;
    }
  }
  return arr;
}

console.log(merge_sort(arr));
