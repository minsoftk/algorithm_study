const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, arrN, m, arrM] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(n, arrN, m, arrM) {
  const nArray = arrN.split(' ');
  const mArray = arrM.split(' ');

  const check = Array(100001).fill(0);
  let answer = [];
  nArray.forEach((elem) => (check[elem] = 1));
  mArray.forEach((elem) => {
    if (check[elem] === 1) {
      answer.push(1);
    } else answer.push(0);
  });

  return answer.join('\n');
}

console.log(solution(n, arrN, m, arrM));
