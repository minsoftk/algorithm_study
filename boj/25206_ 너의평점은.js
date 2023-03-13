const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const score = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

function solution() {
  let totalHakjum = 0;
  const res = input
    .map((elem) => {
      const [_, hakjum, grade] = elem.split(' ');
      if (grade === 'P') return -1;
      else {
        totalHakjum += +hakjum;
        return +hakjum * score[grade];
      }
    })
    .filter((elem) => elem !== -1);

  return (res.reduce((acc, cur) => acc + cur, 0) / totalHakjum).toFixed(6);
}

console.log(solution());
