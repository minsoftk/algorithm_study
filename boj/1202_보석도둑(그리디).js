const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// console.log(input);
let [n, k] = input[0].trim().split(' ').map(Number);
// console.log(n, k);

class maxHeap {
	constructor() {
		this.heap = [];
		this.heap.push(1e9);
	}
	insert(val) {
		this.heap.push(val);
		this.upheap(this.heap.length - 1);
	}

	upheap(pos) {
		let tmp = this.heap[pos];
		// 부모 노드보다 클 경우
		while (tmp > this.heap[parseInt(pos / 2)]) {
			// insert에서 입력된 새로운 값의 idx에 부모노드의 값을 입력한다.
			// pos는 부모노드의 위치로 바뀐다.
			this.heap[pos] = this.heap[parseInt(pos / 2)];
			pos = parseInt(pos / 2);
		}
		// 부모노드보다 컸던 tmp값이 입력. 즉, 7-8  -> 8-7 과정
		this.heap[pos] = tmp;
	}
	get() {
		if (this.heap.length === 2) return this.heap.pop();
		if (this.heap.length === 1) return false;
		let res = this.heap[1];
		this.heap[1] = this.heap.pop();

		this.downheap(1, this.heap.length - 1); // pos는 마지막 부모까지만 내려가야 한다.
		return res;
	}
	downheap(pos, len) {
		let tmp = this.heap[pos],
			child;
		while (pos <= parseInt(len / 2)) {
			child = pos * 2;
			// 왼쪽 자식이 더 큰가 오른쪽 자식이 더 큰가
			// len보다는 작아야 한다.
			if (child < len && this.heap[child] < this.heap[child + 1]) child++;
			if (tmp >= this.heap[child]) break;
			this.heap[pos] = this.heap[child];
			pos = child;
		}
		this.heap[pos] = tmp;
	}
	size() {
		return this.heap.length - 1;
	}
}

let arr = input
	.slice(1, n + 1)
	.map((item) => item.trim().split(' ').map(Number));

let bags = input.slice(n + 1, n + k + 2).map((item) => Number(item.trim()));

arr.sort((a, b) => {
	if (a[1] === b[1]) return a[0] - b[0];
	else return a[0] - b[0];
});
bags.sort((a, b) => a - b);

let heap = new maxHeap();
let maxPrice = 0;
let idx = 0;
for (let i = 0; i < k; i++) {
	for (let j = idx; j < n; j++) {
		if (arr[j][0] <= bags[i]) {
			heap.insert(arr[j][1]);
			idx += 1;
		} else break;
	}

	if (heap.size() > 0) maxPrice += heap.get();
}
console.log(maxPrice);
// 10
