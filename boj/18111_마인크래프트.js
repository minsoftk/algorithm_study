const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const inputs = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const [n, m, b] = inputs[0].split(' ').map(Number);
  inputs.shift();
  const map = inputs.map((elem) => elem.split(' ').map(Number));

  let answer = [];
  for (let height = 256; height >= 0; height -= 1) {
    let time = 0;
    let blockCnt = b;
    let isValid = true;
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < m; j += 1) {
        // 각각의 경우가 아닌 전체 block수로 판단해야 함.
        if (map[i][j] > height) {
          blockCnt += map[i][j] - height;
          time += (map[i][j] - height) * 2;
          // console.log('블록제거', map[i][j], '에서', height, '만큼');
        } else if (map[i][j] < height) {
          blockCnt -= height - map[i][j];
          time += height - map[i][j];
          // console.log('블럭쌓기', map[i][j], '에서', height, '만큼');
        }
      }
    }
    if (blockCnt < 0) isValid = false;
    if (isValid) answer.push([time, height]);
  }

  answer.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });

  return answer[0].join(' ');
}

console.log(solution(inputs));
