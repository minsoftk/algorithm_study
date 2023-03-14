const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const num = +n;

  return input
    .map((elem) => {
      const [x, y, r, x2, y2, r2] = elem.split(' ').map(Number);
      let d = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));
      if (d === 0 && r === r2) return -1;
      else if (d === 0 && r !== r2) return 0;

      // 외접
      if (d < r + r2 && d > Math.abs(r - r2)) return 2;
      else if (d === r + r2 || d === Math.abs(r - r2)) return 1;
      else return 0;
    })
    .join('\n');
}

console.log(solution(input));
