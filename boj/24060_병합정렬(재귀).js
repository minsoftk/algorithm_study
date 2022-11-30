const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function merge_sort(input) {
  let start = 0;
  let end = input.length - 1;

  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    merge_sort(A, start, mid); // 전반부 정렬
    merge_sort(A, mid + 1, end); // 후반부 정렬
    merge(input, start, mid, end); // 병합
  }
}

function merge(input, start, mid, end) {
  let [i, j, t] = [start, mid + 1, 1];
  while (i <= mid && j <= end) {
    if (input[i] <= input[j]) {
      let temp;
    }
  }
}

function solution(input) {
  const arr = input;
  merge_sort(input);
}

console.log(solution(input));
