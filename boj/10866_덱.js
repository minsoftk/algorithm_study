const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

class Deck {
  constructor() {
    this.deck = [];
  }

  push_front(data) {
    this.deck = [data, ...this.deck];
  }
  push_back(data) {
    this.deck.push(data);
  }
  pop_front() {
    let temp = this.deck.shift();
    if (temp) return temp;
    else return -1;
  }
  pop_back() {
    let temp = this.deck.pop();
    if (temp) return temp;
    else return -1;
  }
  size() {
    return this.deck.length;
  }
  empty() {
    if (this.deck.length === 0) return 1;
    else return 0;
  }
  front() {
    if (this.deck.length === 0) {
      return -1;
    } else return this.deck[0];
  }
  back() {
    if (this.deck.length === 0) {
      return -1;
    } else return this.deck[this.deck.length - 1];
  }
}

function solution(input) {
  const commands = input.map((elem) => elem.split(' '));

  const deck = new Deck();

  let answer = commands.map((element) => {
    switch (element[0]) {
      case 'push_front':
        return deck.push_front(element[1]);
        break;
      case 'push_back':
        return deck.push_back(element[1]);
        break;
      case 'pop_front':
        return deck.pop_front();
        break;
      case 'pop_back':
        return deck.pop_back();
        break;
      case 'front':
        return deck.front();
        break;
      case 'back':
        return deck.back();
        break;
      case 'size':
        return deck.size();
        break;
      case 'empty':
        return deck.empty();
        break;
    }
  });

  return answer.filter((elem) => elem !== undefined).join('\n');
}

console.log(solution(input));
