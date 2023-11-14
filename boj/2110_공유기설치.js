const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs')
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split('\n');
let [n, c] = input[0].trim().split(' ').map(Number);
let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i].trim()));
}

function solution(n, c, arr) {
  arr.sort((a, b) => a - b);

  let start = 1;
  let end = arr[arr.length - 1];
  let result = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let value = arr[0];
    let cnt = 1;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= value + mid) {
        value = arr[i];
        cnt += 1;
      }
    }

    // m개 이상의 공유기를 설치할 수 있는 경우
    if (cnt >= c) {
      start = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }

  return result;
}
console.log(solution(n, c, arr)); // 200
