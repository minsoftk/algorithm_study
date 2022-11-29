const { emit } = require('process');

const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const lists = [];
for (let i = 0; i < input.length; i += 2) {
  lists.push([input[i], input[i + 1]]);
}

function solution(input) {
  const data = Array(15).fill(0); // row 층 col 호수
  for (let i = 0; i < 15; i += 1) data[i] = Array(15).fill(0);
  for (let i = 0; i < 15; i += 1) data[0][i] = i;

  for (let i = 1; i < 15; i += 1) {
    for (let j = 1; j < 15; j += 1) {
      data[i][j] = data[i - 1][j] + data[i][j - 1];
    }
  }

  return input
    .map((elem) => {
      const [k, n] = elem;
      return data[k][n];
    })
    .join('\n');
}

console.log(solution(lists));
