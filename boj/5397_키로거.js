const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  return input
    .map((logger) => {
      let leftStack = [];
      let rightStack = [];
      for (ch of logger) {
        if (ch === '<') {
          if (leftStack.length > 0) {
            rightStack.push(leftStack.pop());
          }
        } else if (ch === '>') {
          if (rightStack.length > 0) {
            leftStack.push(rightStack.pop());
          }
        } else if (ch === '-') {
          leftStack.pop();
        } else {
          leftStack.push(ch);
        }
      }

      return [...leftStack, ...rightStack.reverse()].join('');
    })
    .join('\n');
}

console.log(solution(input));
