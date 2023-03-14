const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, m] = a.split(' ').map(Number);

  let A = input[0].split(' ').map(Number);
  let B = input[1].split(' ').map(Number);

  let hashA = new Map();
  let hashB = new Map();

  A.forEach((element) => {
    hashA.set(element, 1);
  });
  B.forEach((element) => {
    hashB.set(element, 1);
  });

  let A_B = [...hashA.keys()].filter((elem) => {
    if (hashB.get(elem)) return false;
    else return true;
  });
  let B_A = [...hashB.keys()].filter((elem) => {
    if (hashA.get(elem)) return false;
    else return true;
  });

  return A_B.length + B_A.length;
}

console.log(solution(input));
