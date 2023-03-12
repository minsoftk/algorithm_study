const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = +require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')[0];

function solution(input) {
  const q = input / 4;
  let str = '';
  for (let i = 0; i < q; i += 1) {
    str += 'long ';
  }

  return (str += 'int');
}

console.log(solution(input));
