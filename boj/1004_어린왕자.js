const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const num = +n;
  let idx = 0;
  let answer = [];
  for (let i = 0; i < num; i += 1) {
    const [startX, startY, endX, endY] = input[idx++].split(' ').map(Number);
    const cnt = +input[idx++];
    let planets = new Map();

    // 행성정보 저장
    for (let j = 0; j < cnt; j += 1) {
      planets.set(idx, input[idx++].split(' ').map(Number));
      // planet.push(input[idx++]);
    }

    // 출발점, 도착점을 포함하는 행성 구하기
    let haveStartPoint = 0;
    let haveEndPoint = 0;
    [...planets.values()].forEach((planet) => {
      const [x, y, r] = planet;

      // 출발점과 행성 중심과의 거리 d
      const startDistance = Math.sqrt(
        Math.pow(startX - x, 2) + Math.pow(startY - y, 2)
      );
      const endDistance = Math.sqrt(
        Math.pow(endX - x, 2) + Math.pow(endY - y, 2)
      );

      if (!(startDistance < r && endDistance < r)) {
        if (startDistance < r) {
          haveStartPoint += 1;
        }

        if (endDistance < r) {
          haveEndPoint += 1;
        }
      }
    });
    answer.push(haveStartPoint + haveEndPoint);
  }
  return answer.join('\n');
}

console.log(solution(input));
