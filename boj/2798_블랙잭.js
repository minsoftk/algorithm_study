const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, m, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .join(' ')
  .split(' ')
  .map(Number);

function solution() {
  input.sort((a, b) => a - b);
  // console.log(input);
  let max = -1;
  for (let i = 0; i < input.length - 2; i += 1) {
    for (let j = i + 1; j < input.length - 1; j += 1) {
      for (let k = j + 1; k < input.length; k += 1) {
        let total = input[i] + input[j] + input[k];
        // console.log(input[i], input[j], input[k], total);
        if (total <= m && total > max) {
          max = total;
        }
      }
    }
  }
  return max;
}

console.log(solution(input));
