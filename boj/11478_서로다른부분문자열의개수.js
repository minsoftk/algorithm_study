const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  let hash = new Map();
  for (let len = 1; len <= input.length; len += 1) {
    for (let i = 0; i < input.length; i += 1) {
      hash.set(input.slice(i, i + len), (hash.get(input[i]) || 0) + 1);
    }
  }
  return [...hash.keys()].length;
}

console.log(solution(input));
