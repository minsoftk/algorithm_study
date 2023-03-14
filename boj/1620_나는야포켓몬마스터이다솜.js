const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, m] = a.split(' ').map(Number);

  let hashName = new Map();
  let hashNum = new Map();

  for (let i = 0; i < n; i += 1) {
    hashNum.set(i + 1, input[i]);
    hashName.set(input[i], i + 1);
  }

  let answer = [];
  for (let i = n; i < n + m; i += 1) {
    if (input[i][0].charCodeAt() >= 48 && input[i][0].charCodeAt() <= 57) {
      answer.push(hashNum.get(+input[i]));
    } else {
      answer.push(hashName.get(input[i]));
    }
  }
  return answer.join('\n');
}

console.log(solution(input));
