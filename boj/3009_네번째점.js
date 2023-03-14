const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((elem) => elem.split(' ').map(Number));

function solution(input) {
  input.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  if (input[0][0] === input[1][0]) {
    return [
      input[2][0],
      input[2][1] === input[0][1] ? input[1][1] : input[0][1],
    ].join(' ');
  } else {
    return [
      input[0][0],
      input[0][1] === input[1][1] ? input[2][1] : input[1][1],
    ].join(' ');
  }
}

console.log(solution(input));
