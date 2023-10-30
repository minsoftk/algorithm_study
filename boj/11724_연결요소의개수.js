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
  let parent = Array(n + 1).fill(0);
  parent = parent.map((_, idx) => idx);

  let cycle = false;
  for (let i = 0; i < input.length; i += 1) {
    const [x, y] = input[i];
    union(x, y);
  }
  const set = new Set();
  for (let i = 1; i < parent.length; i += 1) {
    set.add(find(i));
  }
  return set.size;
}

console.log(solution(input));
