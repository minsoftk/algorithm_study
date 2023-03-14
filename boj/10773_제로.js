const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const inputs = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  inputs.shift();
  const arr = inputs.map(Number);
  let stack = [];

  arr.forEach((element) => {
    if (element !== 0) stack.push(element);
    else stack.pop();
  });

  return stack.reduce((prev, cur) => prev + cur, 0);
}

console.log(solution(inputs));
