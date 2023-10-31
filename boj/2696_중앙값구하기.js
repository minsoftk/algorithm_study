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
    const arr = input.slice(idx + 1, idx + 1 + nextIdx);

    const temp = arr.join(' ').split(' ').map(Number);
    // console.log('temp:', temp);

    // 중앙값 개수
    const resultNum = Math.ceil(num / 2);
    answer.push(resultNum);

    // 중앙값 계산
    let result = 0;
    let resultArray = [];

    // console.log('resultNum, temp:', i, resultNum, temp);
    for (let j = 0; j < temp.length; j += 1) {
      if (resultArray.length === 10) {
        answer.push(resultArray);
        resultArray = [];
      }
      result += temp[j];
      // if (j === 2 && ) {
      // console.log('result:', result);
      // }
      if (i === 2) {
        console.log('result:', j + 1, result);
      }
      if ((j + 1) % 2 !== 0) {
        resultArray.push(Math.ceil(result / (j + 1)));
      }
    }
    answer.push(resultArray);

    idx += 1 + nextIdx;
  }

  console.log('answer:', answer);
  // return answer.map((elem) => elem.map(el=> el.join(' ')).join('\n');
}

console.log(solution(input));
