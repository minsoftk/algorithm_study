const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const num = +n;
  const arr = input.map((elem) => elem.split(' ').map(Number));

  let hash = new Map();
  for (let i = 0; i < arr.length; i += 1) {
    hash.set(arr[i][0], (hash.get(arr[i][0]) || 0) + arr[i][1]);
  }
  let width = hash.get(4);
  let height = hash.get(2);

  let other = 1e9;
  let memo = new Map();
  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];
    const next = arr[(i + 1) % arr.length];
    const nextnext = arr[(i + 2) % arr.length];
    const nextnextnext = arr[(i + 3) % arr.length];

    if (current[0] === nextnext[0] && next[0] === nextnextnext[0]) {
      other = next[1] * nextnext[1];
    }
  }

  return (hash.get(2) * hash.get(4) - other) * num;
}

console.log(solution(input));
