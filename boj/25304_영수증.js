const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [...students] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(students) {
  const checkArr = new Array(31).fill(false);
  const number = [];
  students.forEach((student) => (checkArr[student] = true));
  checkArr.forEach((check, idx) => {
    if (idx !== 0 && check === false) number.push(idx);
  });

  number.sort((a, b) => a - b);
  return number.join('\n');
}

console.log(solution(students));
