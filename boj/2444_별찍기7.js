const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const n = +require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')[0];

function solution() {
  const total = n * 2 - 1;
  const mid = parseInt(total / 2);
  let res = '';

  let cnt = 1;
  for (let i = 0; i < n * 2; i += 1) {
    let [left, right] =
      i <= mid ? [mid - i, mid + i] : [cnt, total - 1 - cnt++];

    // console.log(total, cnt);
    // console.log('left,right:', left, right);
    for (let j = 0; j <= right; j += 1) {
      if (j >= left && j <= right) {
        process.stdout.write('*');
      } else {
        // res += ' ';
        process.stdout.write(' ');
      }
    }
    process.stdout.write('\n');
  }
}

solution();
