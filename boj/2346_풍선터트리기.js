const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 백준 메모리 초과 문제
function solution(input) {
  const arr = input.split(' ').map(Number);
  let balloon = Array.from({ length: n }, (_, index) => index + 1);
  balloon = balloon.map((num, idx) => [num, arr[idx]]);

  let answer = [];

  while (balloon.length > 0) {
    const [balloonNum, moveCnt] = balloon.shift();
    answer.push(balloonNum);

    if (moveCnt > 0 && balloon.length > 0) {
      for (let i = 0; i < moveCnt - 1; i += 1) {
        const front = balloon.shift();
        balloon = [...balloon, front];
      }
      // const front = balloon.slice(0, moveCnt - 1);
      // const end = balloon.slice(moveCnt - 1, balloon.length);

      // balloon = [...end, ...front];
    } else if (balloon.length > 0) {
      let absMoveCnt = Math.abs(moveCnt);
      for (let i = 0; i < absMoveCnt; i += 1) {
        const end = balloon.pop();
        balloon = [end, ...balloon];
      }
      // const front = balloon.slice(0, balloon.length - absMoveCnt);
      // const end = balloon.slice(balloon.length - absMoveCnt, balloon.length);

      // balloon = [...end, ...front];
    }
  }

  return answer.join(' ');
}

console.log(solution(input));
