const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, ...b] = require('fs').readFileSync(filePath).toString().trim().split('\n');
tse;