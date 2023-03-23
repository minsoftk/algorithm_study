const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')[0];

function solution(input) {
  let hash = new Map();
  input
    .split('')
    .sort()
    .forEach((elem) => hash.set(elem, (hash.get(elem) || 0) + 1));

  const data = [...hash];
  const len = [...hash.values()].reduce((prev, cur) => prev + cur, 0);
  const oneChar = [...hash].filter((elem) => elem[1] % 2 === 1);

  if (len % 2 === 0) {
    // 짝수인 경우
    if (oneChar.length > 0) return "I'm Sorry Hansoo";

    let left = '',
      right = '';
    for (let [key, val] of data) {
      for (let j = 0; j < Math.floor(val / 2); j += 1) {
        left = left + key;
        right = key + right;
      }
    }

    return left + right;
  } else {
    // 홀수인 경우
    if (oneChar.length > 1 || oneChar.length === 0) return "I'm Sorry Hansoo";

    // 가운데 값 설정
    let mid = oneChar[0][0];
    let left = '',
      right = '';
    hash.set(oneChar[0][0], hash.get(oneChar[0][0]) - 1);
    for (let [key, val] of data) {
      for (let j = 0; j < Math.floor(val / 2); j += 1) {
        left = left + key;
        right = key + right;
      }
    }
    return left + mid + right;
  }
}

console.log(solution(input));
