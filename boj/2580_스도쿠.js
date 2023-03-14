const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')[0];

function solution() {
  const [n, k] = input.split(' ').map(Number);

  let arr = [];
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) arr.push(i);
  }
  if (k > arr.length) return 0;
  else return arr[k - 1];
}

console.log(solution());
