const { tmpdir } = require('os');
const { start } = require('repl');

const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, k] = input[0].split(' ').map(Number);

let cnt = 0;
let target = -1;
function solution(input) {
  const arr = input[1].split(' ').map(Number);

  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + end) / 2;

  merge_sort(arr, start, end);

  if (cnt < k) return -1;
  else if (target === -1) return -1;
  return target;
}

function merge_sort(arr, startIdx, endIdx) {
  if (startIdx < endIdx) {
    let mid = Math.floor((startIdx + endIdx) / 2);
    merge_sort(arr, startIdx, mid);
    merge_sort(arr, mid + 1, endIdx);
    return merge(arr, startIdx, mid, endIdx);
  }
}

function merge(arr, startIdx, mid, endIdx) {
  let i = startIdx;
  let j = mid + 1;

  let idx = 0;
  let tempArr = [];
  while (i <= mid && j <= endIdx) {
    if (arr[i] <= arr[j]) {
      tempArr.push(arr[i++]);
    } else {
      tempArr.push(arr[j++]);
    }
  }

  while (i <= mid) {
    tempArr.push(arr[i++]);
    // tempArr[idx++] = arr[i++];
    // console.log('tempArr2', tempArr);
  }

  while (j <= endIdx) {
    tempArr.push(arr[j++]);
    // console.log('tempArr3', tempArr);
  }

  i = startIdx;
  idx = 0;
  let temp;
  while (i <= endIdx) {
    cnt += 1;
    temp = tempArr[idx];
    arr[i++] = tempArr[idx++];
    if (cnt === k) {
      target = temp;
    }
  }
}

console.log(solution(input));

// function merge_sort(input, left, mid, right) {
//   if (input.length < 2) {
//     return input;
//   }

//   let mid = Math.floor(input.length / 2);
//   let left = input.slice(0, mid);
//   let right = input.slice(mid);
//   merge_sort(left);
//   merge_sort(right);
//   let arr;
//   arr = [];
//   return merge(merge_sort(left), merge_sort(right));
// }

// function merge(left, right) {
//   const res = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       res.push(left[leftIndex++]);
//     } else {
//       res.push(right[rightIndex++]);
//     }
//   }

//   return res.concat(left.slice(leftIndex), right.slice(rightIndex));
// }
