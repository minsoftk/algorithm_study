const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

class Queue {
  constructor() {
    this.queue = [];
  }

  push(data) {
    this.queue.push(data);
  }
  pop() {
    let temp = this.queue.shift();
    if (temp) return temp;
    else return -1;
  }
  size() {
    return this.queue.length;
  }
  empty() {
    if (this.queue.length === 0) return 1;
    else return 0;
  }
  front() {
    if (this.queue.length === 0) {
      return -1;
    } else return this.queue[0];
  }
  back() {
    if (this.queue.length === 0) {
      return -1;
    } else return this.queue[this.queue.length - 1];
  }
}

function solution(input) {
  const commands = input.map((elem) => elem.split(' '));

  const queue = new Queue();

  let answer = commands.map((element) => {
    switch (element[0]) {
      case 'push':
        return queue.push(element[1]);
        break;
      case 'front':
        return queue.front();
        break;
      case 'back':
        return queue.back();
        break;
      case 'pop':
        return queue.pop();
        break;
      case 'size':
        return queue.size();
        break;
      case 'empty':
        return queue.empty();
        break;
    }
  });

  return answer.filter((elem) => elem !== undefined).join('\n');
}

console.log(solution(input));
