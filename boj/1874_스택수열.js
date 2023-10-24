const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let asdArr = Array(+n).fill(0);
  asdArr = asdArr.map((_, idx) => (asdArr[idx] = idx + 1));
  const inputArr = input.map(Number);

  // let stack = [];
  // let answer = [];

  // let numIdx = 0;
  // let inputIdx = 0;
  // let test;
  // while (numIdx < numArr.length) {
  //   if (inputArr[inputIdx] !== numArr[numIdx]) {
  //     stack.push(numArr[numIdx]);
  //     // console.log('1 +', numArr[numIdx]);
  //     answer.push('+');
  //   } else {
  //     let temp = inputArr[inputIdx]; // 초기값 4를 저장
  //     // console.log('2 +', inputArr[inputIdx]);
  //     stack.push(temp); // 4 push
  //     answer.push('+');
  //     inputIdx += 1; // input Arr index 증가 , 3을 가르킴.

  //     let test = stack.pop();
  //     // console.log('3 -', test);
  //     answer.push('-');

  //     if (
  //       temp > inputArr[inputIdx] &&
  //       stack[stack.length - 1] !== inputArr[inputIdx]
  //     ) {
  //       return 'NO';
  //     } else if (
  //       temp > inputArr[inputIdx] &&
  //       stack[stack.length - 1] === inputArr[inputIdx]
  //     ) {
  //       while (
  //         stack.length > 0 &&
  //         stack[stack.length - 1] === inputArr[inputIdx]
  //       ) {
  //         let test = stack.pop();
  //         // console.log('4 -', test);
  //         answer.push('-');
  //         inputIdx += 1;
  //         temp = inputArr[inputIdx];
  //       }
  //     }
  //   }
  //   numIdx += 1;
  // }
  // return answer.join('\n');

  console.log(asdArr, inputArr);
  let stack = [];
  let inputIdx = 0;
  let asdIdx = 0;
  let answer = [];

  for (let i = 0; i < inputArr.length; i += 1) {
    while (
      asdIdx < asdArr.length &&
      stack[stack.length - 1] !== inputArr[inputIdx]
    ) {
      stack.push(asdArr[asdIdx]);
      answer.push('+');
      asdIdx += 1;
    }

    if (stack[stack.length - 1] === inputArr[inputIdx]) {
      const end = stack.pop();
      answer.push('-');
      inputIdx += 1;
    } else {
      return 'NO';
    }
  }
  return answer.join('\n');
}

console.log(solution(input));
