const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((elem) => elem.split(' ').map(Number));

function solution(input) {
  input.pop();
  return input
    .map((elem) => {
      const [a, b] = elem;
      if (b > a && b % a === 0) return 'factor';
      else if (a > b && a % b === 0) return 'multiple';
      else return 'neither';
    })
    .join('\n');
}

console.log(solution(input));
