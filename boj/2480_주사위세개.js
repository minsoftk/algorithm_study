const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  const [x, y, z] = input;

  let hash = new Map();
  let double = 0;
  let max = 0;
  input.forEach((elem) => {
    if (max < elem) max = elem;
    if (hash.get(elem) > 0) double = elem;
    hash.set(elem, (hash.get(elem) || 0) + 1);
  });

  if (hash.size === 3) return max * 100;
  else if (hash.size === 2) return 1000 + double * 100;
  return 10000 + max * 1000;
}

console.log(solution(input));
