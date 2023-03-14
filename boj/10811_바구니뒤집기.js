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
    const [a, b] = elem.split(' ').map(Number);
    const reverse = res.slice(a - 1, b).reverse();

    let idx = 0;
    for (let i = a - 1; i < b; i += 1) {
      res[i] = reverse[idx++];
    }
  });

  return res.join(' ');
}

console.log(solution());
