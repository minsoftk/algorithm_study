const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const arr = input.map((elem) => elem.split(' ').map(Number));
  arr.pop();
  return arr
    .map((elem) => {
      elem.sort((a, b) => a - b);
      if (
        Math.pow(elem[0], 2) + Math.pow(elem[1], 2) ===
        Math.pow(elem[2], 2)
      ) {
        return 'right';
      } else return 'wrong';
    })
    .join('\n');
}

console.log(solution(input));
