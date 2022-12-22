const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  const r = +input;
  return [(r * r * Math.PI).toFixed(6), (2 * r * r).toFixed(6)].join('\n');
}

console.log(solution(input));
