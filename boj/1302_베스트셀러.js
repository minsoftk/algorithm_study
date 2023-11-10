const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, ...arr] = input;

  let hash = new Map();
  arr.forEach((elem) => hash.set(elem, (hash.get(elem) || 0) + 1));

  return [...hash].sort((a, b) => {
    if (b[1] === a[1]) return a[0] < b[0] ? -1 : 1;
    return b[1] - a[1];
  })[0][0];
}

console.log(solution(input));
