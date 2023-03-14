const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [totalPrice, n, ...items] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const itemList = items.map((elem) => elem.split(' ').map(Number));

function solution(totalPrice, n, itemList) {
  const res = itemList
    .map(([price, cnt]) => price * cnt)
    .reduce((prev, cur) => prev + cur, 0);

  if (res === Number(totalPrice)) return 'Yes';
  return 'No';
}

console.log(solution(totalPrice, n, itemList));
