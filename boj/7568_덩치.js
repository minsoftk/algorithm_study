const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((elem) => elem.split(' ').map(Number));

function solution(input) {
  const [num] = n;

  let scores = Array(input.length).fill(1);

  for (let i = 0; i < input.length - 1; i += 1) {
    for (let j = i + 1; j < input.length; j += 1) {
      if (i === j) continue;
      if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
        scores[i] += 1;
      } else if (input[i][0] > input[j][0] && input[i][1] > input[j][1]) {
        scores[j] += 1;
      }
    }
  }
  return scores.join(' ');
}

console.log(solution(input));
