const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((elem) => elem.split(' ').map(Number));

function solution(input) {
  return input
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return a[1] - b[1];
    })
    .map((elem) => elem.join(' '))
    .join('\n');
}

console.log(solution(input));
