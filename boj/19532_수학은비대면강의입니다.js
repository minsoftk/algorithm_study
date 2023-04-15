const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')[0];

function solution(input) {
  const [a, b, c, d, e, f] = input.split(' ').map(Number);
  for (let x = -999; x < 1000; x += 1) {
    for (let y = -999; y < 1000; y += 1) {
      if (a * x + b * y === c && d * x + e * y === f) {
        return `${x} ${y}`;
      }
    }
  }
}

console.log(solution(input));
