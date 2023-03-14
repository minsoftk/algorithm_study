const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
input.shift();

function solution(input) {
  return input
    .map((elem) => {
      const dp = Array(+elem).fill(0);
      [dp[1], dp[2], dp[3]] = [1, 1, 1];
      for (let i = 4; i <= +elem; i += 1) {
        dp[i] = dp[i - 2] + dp[i - 3];
      }
      return dp[+elem];
    })
    .join('\n');
}

console.log(solution(input));
