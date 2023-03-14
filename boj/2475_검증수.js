const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  const arr = input.split('\n');
  arr.pop();

  return arr
    .map((num) => {
      if (num === num.split('').reverse().join('')) return 'yes';
      else return 'no';
    })
    .join('\n');
}

console.log(solution(input));
