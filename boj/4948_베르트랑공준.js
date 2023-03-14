const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function isPrime(input) {
  if (input === 1) return false;
  for (let i = 2; i * i <= input; i += 1) {
    if (input % i === 0) return false;
  }
  return true;
}

function solution(input) {
  input.pop();
  return input
    .map((elem) => {
      // console.log('🚀 ~ .map ~ elem', elem);
      let cnt = 0;
      for (let i = elem + 1; i <= 2 * elem; i += 1) {
        // console.log('isprime', i, isPrime(i));
        if (isPrime(i)) cnt += 1;
      }
      return cnt;
    })
    .join('\n');
}

console.log(solution(input));
