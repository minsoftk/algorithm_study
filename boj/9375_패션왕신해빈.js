const { cursorTo } = require('readline');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let idx = 0;
  let answer = [];
  for (let i = 0; i < +n; i += 1) {
    const num = +input[idx];
    const arr = input.slice(idx + 1, idx + 1 + num);
    idx += num + 1;

    let hash = new Map();
    arr.forEach((element) => {
      const [item, category] = element.split(' ');
      hash.set(category, (hash.get(category) || 0) + 1);
    });

    let res =
      [...hash.values()]
        .map((elem) => {
          return +elem + 1;
        })
        .reduce((prev, cur) => prev * cur, 1) - 1;

    answer.push(res);
  }

  return answer.join('\n');
}

console.log(solution(input));
