const { resourceLimits } = require('worker_threads');

const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function isPrime(input) {
  if (input === 1) return false;
  if (input === 2) return true;
  for (let i = 2; i * i <= input; i += 1) {
    if (input % i === 0) return false;
  }
  return true;
}

function solution(input) {
  return input
    .map((elem) => {
      let result = [];
      for (let i = 2; i < elem; i += 1) {
        if (isPrime(i) && isPrime(elem - i)) {
          result.push([i, Number(elem - i)]);
        }
      }
      let min = 1e9;
      let minIdx = 0;
      result.forEach((elem, idx) => {
        const diff = Math.abs(elem[0] - elem[1]);
        if (min > diff) {
          minIdx = idx;
          min = diff;
        }
      });

      return result[minIdx].join(' ');
    })
    .join('\n');
}

console.log(solution(input));
