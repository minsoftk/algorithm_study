const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, last] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

function solution(first, last) {
  const [hour, min] = first.split(' ').map(Number);
  const cost = last;
  const [costHour, costMin] = [Math.floor(cost / 60), cost % 60];

  let resHour = hour + costHour;
  const resMin = min + costMin;

  if (min + costMin >= 60) resHour += 1;

  return `${resHour % 24} ${resMin % 60}`;
}

console.log(solution(first, last));
