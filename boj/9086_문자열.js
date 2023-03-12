const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.shift();

function solution() {
  const res = [];
  input.map((elem) => {
    res.push(elem[0] + elem[elem.length - 1]);
  });

  return res.join('\n');
}

console.log(solution());
