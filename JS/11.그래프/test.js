class minHeap {
	constructor() {
		this.heap = [];
		this.heap.push([Number.MIN_SAFE_INTEGER, 0]);
	}
	insert([a, b]) {
		this.heap.push([a, b]);
		this.upheap(this.heap.length - 1);
	}
	upheap(pos) {
		let tmp = this.heap[pos];
		while (tmp[1] < this.heap[parseInt(pos / 2)][1]) {
			this.heap[pos] = this.heap[parseInt(pos / 2)];
			pos = parseInt(pos / 2);
		}
		this.heap[pos] = tmp;
	}
	get() {
		if (this.heap.length === 2) {
			return this.heap.pop();
		}
		let res;
		res = this.heap[1];
		this.heap[1] = this.heap.pop();
		this.downheap(1, this.heap.length - 1);
		return res;
	}
	downheap(pos, len) {
		let tmp, i;
		tmp = this.heap[pos];
		while (pos <= parseInt(len / 2)) {
			i = pos * 2;
			if (i < len && this.heap[i][1] < this.heap[i + 1][1]) i++;
			if (tmp[1] <= this.heap[i][1]) break;
			this.heap[pos] = this.heap[i];
			pos = i;
		}
		this.heap[pos] = tmp;
	}
	size() {
		return this.heap.length - 1;
	}
	top() {
		return this.heap[1];
	}
}
function solution(N, road, K) {
	let answer = 0;
	let minH = new minHeap();
	let distance = Array(N + 1).fill(1e9);
	let graph = Array(N + 1);
	for (let i = 0; i < graph.length; i++) {
		graph[i] = Array();
	}

	for (let [a, b, c] of road) {
		graph[a].push([b, c]);
		graph[b].push([a, c]);
	}

	minH.insert([1, 0]);
	distance[1] = 0;
	while (minH.size() > 0) {
		let [now, time] = minH.get();
		if (time > distance[now]) continue;
		for (let [next, nextTime] of graph[now]) {
			if (time + nextTime < distance[next]) {
				distance[next] = time + nextTime;
				minH.insert([next, distance[next]]);
			}
		}
	}

	for (let x of distance) {
		if (x <= K) answer++;
	}
	return answer;
}

console.log(
	solution(
		5,
		[
			[1, 2, 1],
			[2, 3, 3],
			[5, 2, 2],
			[1, 4, 2],
			[5, 3, 1],
			[5, 4, 2],
		],
		3
	)
); // 4
