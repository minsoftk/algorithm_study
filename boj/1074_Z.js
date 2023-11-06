const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs')
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, r, c] = input[0].split(' ').map(Number);

  let answer = 0;
  let result = 0;
  result = quater(Math.pow(2, n), 0, 0);
  return answer;

  function quater(n, x, y) {
    if (x === r && y === c) {
      answer = result;
      return;
    }
    if (r >= x && r < x + n && c >= y && c < y + n) {
      let size = parseInt(n / 2);

      quater(size, x, y);
      quater(size, x, y + size);
      quater(size, x + size, y);
      quater(size, x + size, y + size);
    } else result += n * n;
  }
}

console.log(solution(input));
