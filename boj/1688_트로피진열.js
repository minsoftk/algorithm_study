const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  let answer = [];
  let left = input.slice(1);
  let right = input.slice(1).reverse();

  answer.push(count(left));
  answer.push(count(right));

  return answer.join('\n');
}

function count(arr) {
  let cnt = 0;
  let min = arr[0];
  arr.forEach((elem) => {
    if (min < elem) {
      cnt += 1;
      min = elem;
    }
  });
  return cnt + 1;
}

console.log(solution(input));
