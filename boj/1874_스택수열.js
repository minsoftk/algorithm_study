const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let numArr = Array(+n).fill(0);
  numArr = numArr.map((_, idx) => (numArr[idx] = idx + 1));
  const inputArr = input.map(Number);

  console.log(numArr, inputArr);

  let stack = [];
  let answer = [];

  let numIdx = 0;
  let inputIdx = 0;
  let test;
  while (numIdx < numArr.length) {
    if (inputArr[inputIdx] !== numArr[numIdx]) {
      stack.push(numArr[numIdx]);
      // console.log('1 +', numArr[numIdx]);
      answer.push('+');
    } else {
      let temp = inputArr[inputIdx]; // 초기값 4를 저장
      // console.log('2 +', inputArr[inputIdx]);
      stack.push(temp); // 4 push
      answer.push('+');
      inputIdx += 1; // input Arr index 증가 , 3을 가르킴.

      let test = stack.pop();
      // console.log('3 -', test);
      answer.push('-');

      if (
        temp > inputArr[inputIdx] &&
        stack[stack.length - 1] !== inputArr[inputIdx]
      ) {
        return 'NO';
      } else if (
        temp > inputArr[inputIdx] &&
        stack[stack.length - 1] === inputArr[inputIdx]
      ) {
        while (
          stack.length > 0 &&
          stack[stack.length - 1] === inputArr[inputIdx]
        ) {
          let test = stack.pop();
          // console.log('4 -', test);
          answer.push('-');
          inputIdx += 1;
          temp = inputArr[inputIdx];
        }
      }
    }
    numIdx += 1;
  }
  return answer.join('\n');
}

console.log(solution(input));
