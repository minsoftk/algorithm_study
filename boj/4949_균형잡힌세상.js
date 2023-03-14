const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const inputs = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  inputs.pop();
  return inputs
    .map((string) => {
      const arr = string.split('');

      let stack = [];
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === '(' || arr[i] === '[') {
          stack.push(arr[i]);
        } else if (arr[i] === ']') {
          const head = stack[stack.length - 1];
          if (head === '[') stack.pop();
          else return 'no';
        } else if (arr[i] === ')') {
          const head = stack[stack.length - 1];
          if (head === '(') stack.pop();
          else return 'no';
        }
      }

      if (stack.length === 0) return 'yes';
      else return 'no';
    })
    .join('\n');
}

console.log(solution(inputs));
