const { start } = require('repl');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const num = a.split(' ').map(Number);

// function solution(input) {
//   const [n, m] = num;

//   let minCnt = 1e9;

//   for (let i = 0; i < n - 7; i += 1) {
//     for (let j = 0; j < m - 7; j += 1) {
//       const cnt = repaintChessCnt(i, j);
//       if (minCnt > cnt) minCnt = cnt;
//     }
//   }
//   return minCnt;

//   function repaintChessCnt(x, y) {
//     const arr = input.map((elem) => elem.split(''));

//     let startColor = arr[x][y];
//     let otherColor = arr[x][y] === 'W' ? 'B' : 'W';

//     let startColorcnt = 0;
//     let otherColorcnt = 0;

//     for (let i = x; i < x + 8; i += 1) {
//       for (let j = y; j < y + 8; j += 1) {
//         if (
//           ((i + j) % 2 === 0 && arr[i][j] !== startColor) ||
//           ((i + j) % 2 === 1 && arr[i][j] !== otherColor)
//         ) {
//           startColorcnt += 1;
//         }

//         if (
//           ((i + j) % 2 === 0 && arr[i][j] !== otherColor) ||
//           ((i + j) % 2 === 1 && arr[i][j] !== startColor)
//         ) {
//           otherColorcnt += 1;
//         }
//       }
//     }

//     if (startColorcnt > otherColorcnt) return otherColorcnt;
//     else return startColorcnt;
//   }
// }

// console.log(solution(input));



function solution(input) {
	const [n, m] = num;
	const map = input.map((item) => item.split(''));

	function countColor(i, j, color) {
		let paintCnt = 0;

		for (let row = i; row < i + 8; row += 1) {
			for (let col = j; col < j + 8; col += 1) {
				if (map[row][col] !== color) {
					paintCnt += 1;
				}
				if (col !== j + 7) color = color === 'B' ? 'W' : 'B';
			}
		}
		return paintCnt;
	}

	let result = 1e9;
	for (let i = 0; i < n; i += 1) {
		for (let j = 0; j < m; j += 1) {
			if (i + 8 <= n && j + 8 <= m) {
				result = Math.min(result, countColor(i, j, 'B'), countColor(i, j, 'W'));
			}
		}
	}

	return result;
}

console.log(solution(input));
