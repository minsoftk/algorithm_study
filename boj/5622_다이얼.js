const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  const dial = {
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z'],
  };

  let res = 0;
  input.split('').forEach((ch) => {
    const temp = Object.entries(dial).filter((dialData) =>
      dialData[1].includes(ch)
    );
    res += Number(...temp[0]) + 1;
  });
  return res;
}

console.log(solution(input));
