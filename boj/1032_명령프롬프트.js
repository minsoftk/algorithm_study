const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution() {
  let hash = new Map();
  let temp = input.pop();

  for (let i = 0; i < temp.length; i += 1) {
    hash.set(i, 1);
  }

  input.forEach((elem) => {
    const arr = elem.split('');
    for (let i = 0; i < arr.length; i += 1) {
      if (temp[i] !== arr[i]) hash.set(i, hash.get(i) - 1);
      else {
        hash.set(i, hash.get(i) + 1);
      }
    }
    temp = elem;
  });

  let result = temp.slice();
  return result
    .split('')
    .map((elem, idx) => {
      if (hash.get(idx) < n) {
        return '?';
      } else return elem;
    })
    .join('');
}

console.log(solution());
