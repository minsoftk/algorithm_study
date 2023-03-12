const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [nm, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution() {
  const [n, m] = nm.split(' ').map(Number);
  const res = Array(n).fill(0);
  input.forEach((elem) => {
    const [i, j, k] = elem.split(' ').map(Number);
    for (let x = i - 1; x < j; x += 1) {
      res[x] = k;
    }
  });
  return res.join(' ');
}

console.log(solution());
