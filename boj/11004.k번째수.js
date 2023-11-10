const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs')
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, k] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  arr.sort((a, b) => a - b);

  return arr[k - 1];
}

console.log(solution(input));

/** 병합정렬 */
function solution2(input) {
  const [n, k] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  return mergeSort(arr)[k - 1];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));

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

console.log(solution2(input));
