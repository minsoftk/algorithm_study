const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs')
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split('\n');

const [n, ...arr] = input.map(Number);
let temp;
let operators = [];
function solution(input) {
  const answer = [];
  for (let i = 0; i < n; i += 1) {
    temp = arr[i];
    operators = [];
    dfs([], temp - 1);

    for (let operator of operators) {
      let str = '';
      for (let j = 1; j <= temp; j += 1) {
        if (j === temp) {
          str += j;
        } else {
          str += j + operator.shift();
        }
      }

      // console.log(
      //   eval(str.replaceAll(' ', '')),
      //   eval(str.replaceAll(' ', '')) === 0
      // );

      if (eval(str.replaceAll(' ', '')) === 0) {
        answer.push(str);
      }
    }
    answer.push(' ');
  }
  return answer.join('\n');

  function dfs(arr, n) {
    if (arr.length === n) {
      operators.push(arr.slice());
      return;
    } else {
      arr.push(' ');
      dfs(arr, n);
      arr.pop();

      arr.push('+');
      dfs(arr, n);
      arr.pop();

      arr.push('-');
      dfs(arr, n);
      arr.pop();
    }
  }
}

console.log(solution(input));
