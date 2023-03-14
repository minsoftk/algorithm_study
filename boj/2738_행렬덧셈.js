const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);

function solution(input) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 1; i <= n; i += 1) {
    arr1.push(input[i].split(' ').map(Number));
    arr2.push(input[i + n].split(' ').map(Number));
  }

  let result = Array.from(Array(n), () => Array(m).fill(0));

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return result.map((elem) => elem.join(' ')).join('\n');
}

console.log(solution(input));
