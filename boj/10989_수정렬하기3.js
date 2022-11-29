const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const sortArray = input.sort((a, b) => a - b);

  const frequencyHash = new Map();
  sortArray.forEach((element) => {
    frequencyHash.set(element, (frequencyHash.get(element) || 0) + 1);
  });

  const avg = Math.round(
    Math.round(
      Number(
        (
          sortArray.reduce((prev, cur) => prev + cur, 0) / sortArray.length
        ).toFixed(1)
      )
    )
  );
  const middleValue = sortArray[Math.floor(sortArray.length / 2)];

  const frequencyArr = [...frequencyHash];
  const frequencyValue =
    frequencyArr.length !== 1
      ? frequencyArr.sort((a, b) => a[0] - b[0])[1][0]
      : frequencyArr[0][0];
  const len = Math.abs(sortArray[sortArray.length - 1] - sortArray[0]);

  return [avg, middleValue, frequencyValue, len].join('\n');
}

console.log(solution(input));
