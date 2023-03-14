const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  let num = +input;

  let temp = 666;
  let answer = 0;
  while (num) {
    if (temp.toString().includes('666')) {
      num--;
      answer = temp;
    }
    temp += 1;
  }
  return answer;
}

console.log(solution(input));
