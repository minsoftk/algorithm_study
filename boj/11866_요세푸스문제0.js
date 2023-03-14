const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  const [n, m] = input.split(' ').map(Number);

  let arr = Array(n).fill(0);
  arr = arr.map((_, idx) => (arr[idx] = idx + 1));

  let idx = m - 1;
  let answer = [];
  while (arr.length > 1) {
    let temp = arr.splice(idx, 1);
    answer.push(...temp);
    idx = (idx + m - 1) % arr.length;
  }
  answer.push(arr[0]);
  return `<${answer.join(', ')}>`;
}

console.log(solution(input));
