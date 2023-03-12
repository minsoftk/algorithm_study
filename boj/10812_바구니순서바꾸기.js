const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = input.shift().split(' ').map(Number);

function solution() {
  let arr = Array(n).fill(0);
  arr.forEach((_, idx) => (arr[idx] = idx + 1));
  input.forEach((elem) => {
    const [startIdx, endIdx, midIdx] = elem
      .split(' ')
      .map((elem) => (elem -= 1));

    const front = arr.slice(startIdx, midIdx);
    const back = arr.slice(midIdx, endIdx + 1);
    const reverse = back.concat(front);

    let idx = 0;
    for (let i = startIdx; i <= endIdx; i += 1) {
      arr[i] = reverse[idx++];
    }
  });

  return arr.join(' ');
}

console.log(solution());
