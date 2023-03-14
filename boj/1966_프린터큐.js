const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const arr = [];
  for (let i = 0; i < 2 * +n; i += 2) {
    arr.push([
      input[i].split(' ').map(Number),
      input[i + 1].split(' ').map(Number),
    ]);
  }

  return arr
    .map((elem) => {
      let [n, target] = elem[0];
      const queue = elem[1];

      if (queue.length === 1) return 1;

      let cnt = 0;
      for (let i = 0; i < n; i += 1) {
        let max = Math.max(...queue);

        // console.log('tesatmp1', target);
        while (queue[0] !== max) {
          let front = queue.shift();
          queue.push(front);
          target -= 1;
          // console.log('tesatmp2', target);
          if (target === -1) target = queue.length - 1;
          // console.log('tesatmp3', target);
        }
        // if (target === -1) target = queue.length - 1;
        if (target === 0) return cnt + 1;

        // console.log(queue, target);
        queue.shift();
        target -= 1;
        cnt += 1;

        // while (queue[0] === max) {
        //   queue.shift();
        //   cnt += 1;
        //   console.log(target);
        //   console.log(queue);
        //   target -= 1;
        //   if (target === 0) return cnt;
        //   if (target < 0) target = queue.length - 1;
        // }
      }
    })
    .join('\n');
}

console.log(solution(input));
