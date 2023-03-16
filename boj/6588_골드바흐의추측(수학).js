const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

input.pop();

const dp = Array(1000000).fill(-1);
dp[1] = 0;
dp[2] = 0;

function solution() {
  const WRONG = "Goldbach's conjecture is wrong.";

  return input
    .map((elem) => {
      const num = +elem;
      for (let b = num; b >= num / 2; b -= 1) {
        const a = num - b;
        if (isOddPrime(b) && isOddPrime(a)) {
          return `${num} = ${a} + ${b}`;
        }
      }
      return WRONG;
    })
    .join('\n');
}

function isOddPrime(num) {
  if (num % 2 === 0) {
    dp[num] = 0;
    return false;
  }
  if (dp[num] >= 0) return dp[num];

  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      dp[num] = 0;
      return false;
    }
  }
  dp[num] = 1;
  return true;
}

console.log(solution());

// for (let i = 0; i < input.length - 1; i++) {
// 	for (let j = input[i]; j >= 1; j--) {
// 		let flag = true;
// 		ans = 0;

// 		for (let k = 2; k * k <= input[i]; k++) {
// 			if (j <= 1 || input[i] - j <= 1) {
// 				flag = false;
// 			}

// 			// input[i] - j 에서는 k와 같은 경우가 존재하기 때문에 해당 경우를 생각해줘서 작성
// 			if (j % k === 0 || (input[i] - j > k && (input[i] - j) % k === 0)) {
// 				flag = false;
// 			}
// 		}

// 		if (flag) {
// 			ans = Math.max(ans, j);
// 			break;
// 		}
// 	}

// 	if (ans < 0) console.log(WRONG);
// 	else console.log(`${input[i]} = ${input[i] - ans} + ${ans}`);
