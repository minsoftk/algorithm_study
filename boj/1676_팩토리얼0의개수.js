const { cursorTo } = require('readline');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  let hash = new Map();
  for (let i = 1; i <= input; i += 1) {
    if (i % 2 === 0 || i % 5 === 0) {
      let temp = i;
      while (temp % 2 === 0 || temp % 5 === 0) {
        if (temp % 2 === 0) {
          temp /= 2;
          hash.set(2, (hash.get(2) || 0) + 1);
        } else if (temp % 5 === 0) {
          temp /= 5;
          hash.set(5, (hash.get(5) || 0) + 1);
        }
      }
    }
  }
  if ([...hash.values()].length < 2) return 0;
  return Math.min(...hash.values());
}

console.log(solution(input));
