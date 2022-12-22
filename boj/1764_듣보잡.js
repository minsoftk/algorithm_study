const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, m] = a.split(' ').map(Number);
  let noHear = new Map();
  let noSee = new Map();

  for (let i = 0; i < n; i += 1) {
    noHear.set(input[i], 1);
  }
  for (let i = n; i < n + m; i += 1) {
    noSee.set(input[i], 1);
  }

  let noHearSee = [];
  let noHearArr = [...noHear.keys()];
  noHearArr.forEach((elem) => {
    if (noSee.get(elem)) noHearSee.push(elem);
  });
  return [noHearSee.length, ...noHearSee.sort()].join('\n');
}

console.log(solution(input));
