const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = first.trim().split(' ').map(Number);

function solution() {
  const [mainString, checkString] = [
    last.slice(0, n),
    last.slice(n, last.length),
  ];

  let hash = new Map();
  mainString.forEach((elem) => {
    for (let i = 1; i <= elem.length; i += 1) {
      hash.set(elem.slice(0, i), 1);
    }
  });

  let cnt = 0;
  checkString.forEach((elem) => {
    const hashVal = hash.get(elem);
    if (hashVal) cnt += 1;
  });
  return cnt;
}

console.log(solution());
