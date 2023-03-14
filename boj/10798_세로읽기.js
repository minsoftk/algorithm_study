const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution() {
  let hash = new Map();
  for (let i = 0; i < input.length; i += 1) {
    for (let j = 0; j < input[i].length; j += 1) {
      const key = `${j}`;
      hash.set(key, (hash.get(key) || '') + input[i][j]);
    }
  }
  return [...hash.values()].join('');
}

console.log(solution());
