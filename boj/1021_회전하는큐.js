const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numArr = input[1].split(' ').map(Number);
function solution(input) {
  let answer = [];
  let queue = Array(n).fill(0);
  queue = queue.map((_, idx) => idx + 1);

  let cnt = 0;
  for (let i = 0; i < numArr.length; i += 1) {
    while (queue[0] !== numArr[i]) {
      const isInHalf = isInHalfRange(queue, numArr[i]);

      if (isInHalf) {
        queue = task(2, queue);
        cnt += 1;
      } else {
        queue = task(3, queue);
        cnt += 1;
      }
    }
    queue = task(1, queue);
  }

  return cnt;
}

function task(n, queue) {
  if (n === 1) {
    queue.shift();
    return queue;
  } else if (n === 2) {
    const front = queue.shift();
    return [...queue, front];
  } else if (n === 3) {
    const end = queue.pop();
    return [end, ...queue];
  }
}

function isInHalfRange(queue, findValue) {
  for (let i = 0; i < Math.round(queue.length / 2); i += 1) {
    if (queue[i] === findValue) return true;
  }
  return false;
}

console.log(solution(0));
