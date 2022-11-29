const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let set = new Set([...input.split(' ').map(Number)]);
  let hash = new Map();

  const arr = [...set].sort((a, b) => a - b);

  arr.forEach((elem, idx) => hash.set(elem, idx));

  return input
    .split(' ')
    .map(Number)
    .map((elem) => hash.get(elem))
    .join(' ');
}

console.log(solution(input));
