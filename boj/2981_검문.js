const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  let answer = [];
  let tempArr = input.slice(1);

  let gcd = Math.abs(tempArr[0] - tempArr[1]);

  for (let i = 1; i < tempArr.length - 1; i += 1) {
    gcd = getGcd(gcd, Math.abs(tempArr[i + 1] - tempArr[i]));
  }

  for (let i = 2; i <= gcd; i += 1) {
    if (gcd % i === 0) answer.push(i);
  }
  return answer.join(' ');
}

function getGcd(a, b) {
  while (b != 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

console.log(solution(input));
