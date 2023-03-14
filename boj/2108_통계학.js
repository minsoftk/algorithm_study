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
    sortArray.reduce((prev, cur) => prev + cur, 0) / sortArray.length
  );

  const middleValue = sortArray[Math.floor(sortArray.length / 2)];

  const frequencyArr = [...frequencyHash].sort((a, b) => b[1] - a[1]);

  let frequencyCnt = frequencyArr[0][1];
  let res = [];
  frequencyArr.forEach((element) => {
    if (element[1] === frequencyCnt) res.push(element[0]);
  });

  res.sort((a, b) => a - b);

  let frequencyValue = 0;
  if (res.length > 1) frequencyValue = res[1];
  else frequencyValue = res[0];

  // const len = Math.abs(sortArray[sortArray.length - 1] - sortArray[0]);
  const len = sortArray[sortArray.length - 1] - sortArray[0];

  return [avg, middleValue, frequencyValue, len].join('\n');
}

console.log(solution(input));
