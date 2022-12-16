const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  const num = Number(input);
  let canvas = '';
  // let [blankMin, blankMax] = [0, 0];

  // let temp = num / 3;
  // blankMin = temp;
  // blankMax = temp * 2 - 1;

  for (let i = 0; i < num; i += 1) {
    for (let j = 0; j < num; j += 1) {
      printStar(i, j);
    }
    if (i !== num - 1) canvas += '\n';
    // canvas += '\n';
  }

  return canvas;

  function printStar(i, j) {
    if (i % 3 === 1 && j % 3 === 1) {
      canvas += ' ';
    } else {
      if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
        canvas += '*';
      } else {
        printStar(Math.floor(i / 3), Math.floor(j / 3));
      }
    }
  }
}

console.log(solution(input));
