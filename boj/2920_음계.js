const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  const arr = input.split(' ').map(Number);

  let start = arr[0];
  if (start !== 1 && start !== 8) return 'mixed';

  if (start === 1) {
    for (let i = 0; i < 8; i += 1) {
      if (arr[i] === start) {
        start += 1;
      } else return 'mixed';
    }
    return 'ascending';
  } else if (start === 8) {
    for (let i = 0; i < 8; i += 1) {
      if (arr[i] === start) {
        start -= 1;
      } else return 'mixed';
    }
    return 'descending';
  }
}

console.log(solution(input));
