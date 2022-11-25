const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let res = 0;
  input.forEach((item) => {
    let len = item.split('').length;
    let hash = new Map();

    let isGroup = true;
    for (let i = 0; i < len; i += 1) {
      // hash에 값이 들어가 있고 앞 뒤 문자가 같지 않다면 그룹이 아니다.
      if (hash.get(item[i]) && i > 0 && item[i - 1] !== item[i])
        isGroup = false;
      hash.set(item[i], (hash.get(item[i]) || 0) + 1);
    }
    if (isGroup) res += 1;
  });
  return res;
}

console.log(solution(input));
