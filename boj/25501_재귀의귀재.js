const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function recursion(s, l, r, cnt) {
  if (l >= r) return [1, cnt];
  else if (s[l] != s[r]) return [0, cnt];
  else return recursion(s, l + 1, r - 1, cnt + 1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1, 1);
}

function solution(input) {
  const arr = input;
  return input.map((elem) => isPalindrome(elem).join(' ')).join('\n');
}

console.log(solution(input));
