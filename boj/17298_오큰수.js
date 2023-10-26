const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const arr = input.split(' ').map(Number);

  let answer = Array(arr.length).fill(-1);
  let stack = []; // (x, x의 idx)

  for (let i = 0; i < arr.length; i += 1) {
    const x = arr[i];
    if (stack.length === 0) {
      stack.push([x, i]);
    } else if (stack[stack.length - 1][0] >= x) {
      stack.push([x, i]);
    } else {
      while (stack.length) {
        const [top, topIdx] = stack[stack.length - 1];
        if (top < x) {
          answer[topIdx] = x;
          stack.pop();
        } else break;
      }
      stack.push([x, i]);
    }
  }

  return answer.join(' ');
}

console.log(solution(input));
