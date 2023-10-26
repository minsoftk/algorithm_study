const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, w, l] = input[0].split(' ').map(Number); //n:트럭개수, w: 다리길이, l: 다리최대하중
  const trucks = input[1].split(' ').map(Number);

  let answer;
  let bridge = [];
  let time = 0;
  let truckWeight = 0;
  let idx = 0;
  while (true) {
    if (trucks.length === 0 && truckWeight === 0) break;

    // 트럭으로 가득찬 경우 pop
    if (bridge.length === w) {
      const weight = bridge.shift();
      truckWeight -= weight;
    }

    if (bridge.length < w && truckWeight + trucks[idx] <= l) {
      const truck = trucks.shift();
      bridge.push(truck);
      truckWeight = truckWeight + truck;
    } else {
      bridge.push(0);
    }

    time += 1;
  }

  return time;
}

console.log(solution(input));
