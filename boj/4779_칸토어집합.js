const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  return input
    .map((elem) => {
      const arr = Array(Math.pow(3, elem)).fill('-');
      return split(arr);
    })
    .join('\n');
}

function split(arr) {
  if (arr.length === 1) return arr;

  const term = arr.length / 3;
  for (let i = term; i <= term * 2 - 1; i += 1) {
    arr[i] = ' ';
  }
  const left = split(arr.slice(0, term));
  const mid = split(arr.slice(term, term * 2));
  const right = split(arr.slice(term * 2, arr.length));

  return left + mid + right;
}

console.log(solution(input));
