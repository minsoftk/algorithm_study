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
	let graph = Array.from(Array(N + 1), () => Array());
	let dist = Array.from({ length: N + 1 }, () => 700000);
	for (let [a, b, c] of road) {
		graph[a].push([b, c]);
		graph[b].push([a, c]);
	}
	dist[1] = 0;
	minH.insert([1, 0]);
	while (minH.size() > 0) {
		let tmp = minH.get();
		let now = tmp[0];
		let nowCost = tmp[1];
		if (nowCost > dist[now]) continue;
		for (let [next, cost] of graph[now]) {
			if (nowCost + cost < dist[next]) {
				dist[next] = nowCost + cost;
				minH.insert([next, dist[next]]);
			}
		}
	}
	console.log(dist);
	for (let x of dist) {
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
