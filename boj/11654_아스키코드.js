const { count, timeStamp } = require('console');
const fs = require('fs');
const { isPrimitive } = require('util');
const { DefaultSerializer } = require('v8');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// let arr = input[1].trim().split(' ').map(Number);

function sol(c) {
	let temp = '' + c;
	return temp.charCodeAt(c);
}
console.log(sol(input));
