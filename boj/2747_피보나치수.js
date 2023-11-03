const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs')
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split('\n')[0];

const n = +input;
const temp = Array(n + 1).fill(false);
function solution(input) {
  temp[0] = 0;
  temp[1] = 1;
  return fibo(n);

  function fibo(n) {
    if (temp[n] !== false) return temp[n];
    return (temp[n] = fibo(n - 1) + fibo(n - 2));
  }
}

console.log(solution(input));
