const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((elem) => {
    const [a, b] = elem.split(' ');
    return [Number(a), b];
  });

function solution(input) {
  const name = input.map((elem) => elem[1]);

  return input
    .sort((a, b) => {
      if (a[0] === b[0]) {
        return name.indexOf(a[1]) > name.indexOf(b[1]);
      }
      return a[0] - b[0];
    })
    .map((elem) => elem.join(' '))
    .join('\n');
}

console.log(solution(input));
