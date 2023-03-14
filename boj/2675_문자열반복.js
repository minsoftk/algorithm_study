const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...items] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const itemList = items.map((item) => item.split(' '));

function solution(itemList) {
  return itemList
    .map((item) => {
      let str = '';
      const [repeat, string] = item;
      const stringArray = string.split('');
      for (let i = 0; i < stringArray.length; i += 1) {
        for (let j = 0; j < Number(repeat); j += 1) {
          str += stringArray[i];
        }
      }
      return str;
    })
    .join('\n');
}

console.log(solution(itemList));
