const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
input.shift();

function solution() {
  const res = Array(n).fill(0);
  res.forEach((elem, idx) => (res[idx] = idx + 1));

  input.map((elem) => {
    const [before, after] = elem.split(' ').map(Number);
    const temp = res[before - 1];

    res[before - 1] = res[after - 1];
    res[after - 1] = temp;
  });

  return res.join(' ');
}

console.log(solution());
