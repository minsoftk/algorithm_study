const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [totalPrice, n, ...items] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function div(input) {
  let temp = input;
  let res = 0;
  while (temp > 0) {
    res += temp % 10;
    temp = Math.floor(temp / 10);
  }
  return input + res;
}

function solution() {
  let checkArray = new Array(10001).fill(0);
  checkArray.forEach((_, idx) => (checkArray[idx] = idx));
  for (let i = 1; i <= 10000; i += 1) {
    checkArray[div(i)] = 0;
  }

  return checkArray.filter((item) => item !== 0).join('\n');
}

console.log(solution());
