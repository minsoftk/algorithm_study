const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  const [first, last] = input
    .split(' ')
    .map((elem) => elem.split('').reverse().join(''));

  return first > last ? first : last;
}

console.log(solution(input));
