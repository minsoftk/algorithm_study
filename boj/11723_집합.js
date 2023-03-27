const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [info, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let set = Array(21).fill(0);

  return input
    .map((elem) => {
      const [command, m] = elem.split(' ');
      const number = +m;
      if (command === 'add' && set[number] === 0) {
        set[number] = 1;
      } else if (command === 'remove' && set[number] === 1) {
        const idx = set.findIndex((el) => el === number);
        set[number] = 0;
      } else if (command === 'check') {
        if (set[number] === 1) return 1;
        else return 0;
      } else if (command === 'all') {
        set = set.map((elem) => 1);
      } else if (command === 'empty') {
        set = set.map((elem) => 0);
      } else if (command === 'toggle') {
        if (set[number] === 0) set[number] = 1;
        else set[number] = 0;
      }
    })
    .filter((elem) => elem !== undefined)
    .join('\n');
}

console.log(solution(input));
