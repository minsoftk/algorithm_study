const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const arr = input.map((elem) => {
    return elem.split(' ').map(Number);
  });

  let max = -1;
  let index;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (max < arr[i][j]) {
        max = arr[i][j];
        index = [i + 1, j + 1].join(' ');
      }
    }
  }
  return [max, index].join('\n');
}

console.log(solution(input));
