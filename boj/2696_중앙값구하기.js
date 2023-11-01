const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let answer = [];
  let idx = 0;

  for (let i = 0; i < n; i += 1) {
    const num = Number(input[idx]);
    const nextIdx = Math.ceil(num / 10);
    let arr = input.slice(idx + 1, idx + 1 + nextIdx);

    arr = arr.join(' ').split(' ').map(Number);

    // 중앙값 개수
    const resultNum = Math.ceil(num / 2);
    answer.push(resultNum);

    // 중앙값 계산
    let resultArray = [];
    let tempArray = [];
    for (let j = 0; j < arr.length; j += 1) {
      tempArray.push(arr[j]);
      if ((j + 1) % 2 === 1) {
        tempArray.sort((a, b) => a - b);
        resultArray.push(tempArray[Math.floor(tempArray.length / 2)]);
      }
    }

    answer.push(resultArray.join(' '));

    idx += 1 + nextIdx;
  }

  return answer.join('\n');
}

console.log(solution(input));
