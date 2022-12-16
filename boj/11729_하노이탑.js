const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  // num : 원반의 개수
  // from : 출발지 기둥 번호
  // to : 목적지 기둥 번호
  // other : 나머지 기둥 번호
  const num = +input;
  let answer = [];
  let count = 0;

  Hanoi(num, '1', '2', '3');
  // console.log(answer, count);
  return [count, answer.map((element) => element.join(' ')).join('\n')].join(
    '\n'
  );

  function Hanoi(num, from, other, to) {
    if (num === 1) {
      move(num, from, to);
      return;
    } else {
      // 받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 곳으로 재귀적으로 이동
      Hanoi(num - 1, from, to, other);
      // 맨 아래 원반을 목적지로 이동시킴
      move(num, from, to);
      //다른 곳으로 옮겼던 원반들을 그 위에 얹음
      Hanoi(num - 1, other, from, to);
    }
  }

  function move(num, start, to) {
    // console.log(`${num}번 원반을 ${start}에서 ${to}로 이동`);
    answer.push([start, to]);
    count += 1;
  }
}

console.log(solution(input));
