const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((elem) => elem.split(' ').map(Number))[0];
// .map((elem) => elem.split(' ').map(Number));

function solution(input) {
  const sum = input.reduce((prev, cur) => prev + cur, 0);
  const sumArray = Array(sum + 1).fill(0);

  for (let i = 1; i <= input[0]; i += 1) {
    for (let j = 1; j <= input[1]; j += 1) {
      for (let k = 1; k <= input[2]; k += 1) {
        sumArray[i + j + k] += 1;
      }
    }
  }

  let max = -1;
  let answer = 1e9;
  for (let i = 0; i < sumArray.length; i += 1) {
    if (sumArray[i] > max) {
      max = sumArray[i];
      answer = i;
    } else if (sumArray[i] === max) answer = Math.min(i, answer);
  }
  return answer;
}

console.log(solution(input));
