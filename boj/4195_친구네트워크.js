const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let idx = 0;
  let answer = [];
  for (let i = 0; i < n; i += 1) {
    const cnt = Number(input[idx++]);
    let arr = [];
    for (let j = 0; j < cnt; j += 1) {
      arr.push(input[j + idx]);
    }
    idx += cnt;

    console.log('arr:', arr);
    let first = arr[0].split(' ')[0];
    let set = new Set();
    set.add(first);
    let hash = new Map();
    for (let i = 0; i ) {
      const [a, b] = elem.split(' ');
      hash.set(a, b);
      hash.set(b, a);
      set.add(a);
      set.add(b);
      // console.log('hash:', hash);
      answer.push(set.size);
    }
  }
  // console.log('answer:', answer);
}

console.log(solution(input));
