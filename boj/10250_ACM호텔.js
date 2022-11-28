const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...a] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const lists = a.map((item) => item.split(' ').map(Number));

function solution(lists) {
  return lists
    .map((list) => {
      const [h, w, n] = list;
      const floor = n % h === 0 ? h : n % h;
      const room = Math.ceil(n / h);

      return `${floor}${room < 10 ? `${room}`.padStart(2, '0') : `${room}`}`;
    })
    .join('\n');
}

console.log(solution(lists));
