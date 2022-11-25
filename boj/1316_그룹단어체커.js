const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  const croaRegex = [/c=/g, /c-/g, /dz=/g, /d-/g, /lj/g, /nj/g, /s=/g, /z=/g];

  let inputString = input;

  croaRegex.forEach((regex) => {
    inputString = inputString.replace(regex, ' ');
  });

  return inputString.length;
}

console.log(solution(input));
