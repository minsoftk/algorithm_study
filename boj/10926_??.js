const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

function solution() {
  return input + '??!';
}

console.log(solution());
