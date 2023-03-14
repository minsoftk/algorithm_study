const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = first.trim().split(' ').map(Number);

let arr = last.slice();

function solution() {
  // let check = Array(m).fill(0);
  // for (let i = 0; i < S.length; i++) {
  //   for (let j = 0; j < checkstr.length; j++) {
  //     let temp = S[i].substr(0, checkstr[j].length);
  //     if (check[j] > 0) continue;
  //     if (temp === checkstr[j]) {
  //       check[j] = 1;
  //     }
  //   }
  // }
  // let cnt = 0;
  // for (let x of check) {
  //   if (x === 1) cnt += 1;
  // }
  // return cnt;
}

console.log(solution(n, m, S, checkstr));
