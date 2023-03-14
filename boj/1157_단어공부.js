const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('');

input = input.map((ch) => {
  return ch.toUpperCase();
});

function solution(input) {
  let hash = new Map();
  input.forEach((ch) => {
    hash.set(ch, (hash.get(ch) || 0) + 1);
  });

  let maxVal = 0;
  let maxKey = '';
  for (let [key, val] of hash) {
    if (val > maxVal) {
      maxVal = val;
      maxKey = key;
    }
  }

  let cnt = 0;
  for (let [key, val] of hash) {
    if (maxVal === val) cnt += 1;
  }

  if (cnt > 1) return '?';
  return maxKey;
}

console.log(solution(input));
