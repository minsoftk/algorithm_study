const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, lists, v] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(n, lists, v) {
  const listArr = lists.split(' ');
  return listArr.filter((item) => item === v).length;
}

console.log(solution(n, lists, v));
