const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.pop();

function solution() {
  return input
    .map((elem) => {
      let arr = [];
      for (let i = 1; i < +elem; i += 1) {
        if (+elem % i === 0) arr.push(i);
      }
      const res = arr.reduce((acc, cur) => acc + cur, 0);

      if (res === +elem) return `${+elem} = ${arr.join(' + ')}`;
      else return `${+elem} is NOT perfect.`;
    })
    .join('\n');
}

console.log(solution());
