const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((elem) => elem.split(' ').map(Number));

function solution(input) {
  function find(x) {
    if (x === parent[x]) return x;
    else {
      return (parent[x] = find(parent[x]));
    }
  }

  function union(x, y) {
    x = find(x);
    y = find(y);

    if (x > y) {
      parent[x] = y;
    } else {
      parent[y] = x;
    }
  }

  const [n, m] = input.shift();
  let parent = Array(n).fill(0);
  parent = parent.map((_, idx) => idx);

  let cycle = false;
  for (let i = 0; i < input.length; i += 1) {
    const [x, y] = input[i];

    if (find(x) === find(y)) {
      cycle = true;

      return i + 1;
    } else {
      union(x, y);
    }
  }
  if (cycle === false) return 0;
}

console.log(solution(input));
