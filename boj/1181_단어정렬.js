const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let set = new Set();
  input.forEach((elem) => set.add(elem));

  return [...set]
    .sort((a, b) => {
      if (a.length === b.length) return a > b ? 1 : -1;
      else return a.length - b.length;
    })
    .join('\n');
}

console.log(solution(input));
