const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let [[n], n_arr, [m], m_arr] = input.map((elem) =>
    elem.split(' ').map(Number)
  );

  let check = Array(10000001).fill(0);
  let minusCheck = Array(10000001).fill(0);
  n_arr.forEach((element) => {
    if (element < 0) minusCheck[element] = 1;
    else check[element] = 1;
  });

  return m_arr
    .map((elem) => {
      if (elem < 0) {
        return minusCheck[elem] === 1 ? 1 : 0;
      } else {
        return check[elem] === 1 ? 1 : 0;
      }
    })
    .join(' ');
}

console.log(solution(input));
