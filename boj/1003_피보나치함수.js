const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const inputs = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  inputs.shift();
  inputs.map(Number);

  return inputs
    .map((elem) => {
      fibo = [
        [1, 0],
        [0, 1],
      ];
      for (let i = 2; i <= elem; i += 1) {
        fibo[i] = [
          fibo[i - 1][0] + fibo[i - 2][0],
          fibo[i - 1][1] + fibo[i - 2][1],
        ];
      }
      return fibo[elem].join(' ');
    })
    .join('\n');
}

console.log(solution(inputs));

// https://junghyeonsu.tistory.com/198
