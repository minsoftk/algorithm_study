// 준겸이는 모험가이다. 모험을 떠나기 위해서는 철저한 사전 준비를 갖추어야 한다.

// 준겸이는 모험을 떠나기 전 $N$종류의 물약을 모두 구매하려고 한다. 물약 상점에 들른 준겸이는 각 물약이 $1$번부터 $N$번까지 번호가 매겨져 있다는 것을 알아냈다. 그런데, 물약 상점에서는 오늘 특별한 이벤트를 하고 있었다. 특정 물약을 구매하면, 어떤 다른 물약들을 할인해준다는 것이었다.

// 원래 $i$번째 물약의 가격은 동전 $c_i$개이다. 만약 $i$번째 물약을 구매하면, $p_i$종류의 다른 물약의 가격이 내려간다.

// 할인은 중첩된다. 예를 들어 $1$번 물약을 구매하면 $3$번 물약의 가격이 동전 $1$개만큼 할인되고, $2$번 물약을 구매하면 역시 $3$번 물약의 가격이 동전 $2$개만큼 할인된다고 하자. 그러면 두 물약을 모두 구매하고 나서 $3$번 물약을 구매할 때 동전 $3$개만큼의 할인을 받을 수 있다. 단, 물약의 가격이 내려가더라도 $0$ 이하로 내려가지는 않는다. 예를 들어, 원래 가격이 동전 $5$개인 물약이 동전 $4$개를 넘는 만큼 할인되더라도 가격은 동전 $1$개가 된다.

// 준겸이는 신나서 물약을 구매하려다가, 물약을 구매하는 순서가 중요하다는 사실을 깨달았다. 준겸이를 위해 물약을 가장 싸게 샀을 때 그 비용을 알려주자.

// 4
// 10 15 20 25
// 2
// 3 10
// 2 20
// 0
// 1
// 4 10
// 1
// 1 10

const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const n = input[0].trim().split(' ').map(Number);
const value = input[1].trim().split(' ').map(Number);
const num = Number(input[2].trim());
const sales = input
	.slice(3, 3 + num)
	.map((e) => e.trim().split(' ').map(Number));

const test = input
	.slice(3 + num, input.length)
	.map((e) => e.trim().split(' ').map(Number));
console.log('here ', test);

const nested = Array(20);
for (let i = 0; i < nested.length; i++) {
	nested[i] = Array();
}
let idx = 0;
while (idx < test.length) {
	if (test[idx][0] === 0) {
		idx += 1;
	} else {
		let temp = test[idx][0];
		idx += 1;
		let arr = test[idx];
		nested[temp].push(arr);
		idx += 1;
	}
}

function solution(n, value, num, sales, nested) {}

console.log(solution(n));
