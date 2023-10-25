const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

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

    if (x !== y) {
      parent[y] = x;
      number[x] += number[y];
    }
  }

  let parent = {};
  let number = {};
  let idx = 0;
  let answer = [];

  for (let i = 0; i < n; i += 1) {
    const cnt = Number(input[idx++]);
    parent = {};
    number = {};
    let arr = [];
    for (let j = 0; j < cnt; j += 1) {
      arr.push(input[j + idx]);
    }
    idx += cnt;

    arr = arr.map((a) => a.split(' '));
    arr.forEach((elem) => {
      const [a, b] = elem;
      if (!parent.hasOwnProperty(a)) {
        parent[a] = a;
        number[a] = 1;
      }
      if (!parent.hasOwnProperty(b)) {
        parent[b] = b;
        number[b] = 1;
      }
      union(a, b);
      answer.push(number[find(a)]);
    });
  }

  return answer.join('\n');
}

console.log(solution(input));
