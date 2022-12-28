const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((elem) => elem.split(' ').map(Number));

function solution(input) {
  return input
    .map((elem) => {
      let [a, b] = elem.sort((a, b) => a - b);
      let tempA = a;
      let tempB = b;

      while (tempB != 0) {
        let r = tempA % tempB;
        tempA = tempB;
        tempB = r;
      }
      return (a * b) / tempA;
    })
    .join('\n');
}

console.log(solution(input));
