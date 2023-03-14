const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const arr = input.split(' ').map(Number);
  let answer = [];
  for (let i = 1; i < arr.length; i += 1) {
    let gcd = getGcd(arr[0], arr[i]);
    answer.push(`${arr[0] / gcd}/${arr[i] / gcd}`);
  }
  return answer.join('\n');
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
