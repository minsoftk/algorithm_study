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
			if (i < len && this.heap[i][1] > this.heap[i + 1][1]) i++;
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

// 시작 정점으로부터 목적지 노드까지 최소비용, 최단 거리를 구할때 사용된다.
// 하나의 정점에서 출발했을 때 다른 모든 정점으로의 최단 경로를 구하는 알고리즘.

function solution(N, road, K) {
	let answer = 0;
	let minH = new minHeap(); // min heap 생성
	let graph = Array(N + 1); // 간선을 저장할 2차원 배열 생성(인접 리스트)
	for (let i = 0; i < graph.length; i++) graph[i] = Array(); // 빈 공간을 생성
	let dist = Array(N + 1).fill(1e9); // distance를 저장할 배열

	// road에서의 각각 값을 인접 리스트로 값을 넣어준다.
	for (let [a, b, c] of road) {
		graph[a].push([b, c]);
	}

	dist[1] = 0; // 시작점인 1번을 0으로 설정. 사용할 일이 없음.
	minH.insert([1, 0]); // 시작점을 minheap에 넣어준다.

	// min Heap의 size가 0보다 크다면 계속 loop 실행
	while (minH.size() > 0) {
		let tmp = minH.get(); // min heap의 root를 빼온다. (1,10 : 연결된 노드중 1번의 10의 값으로 최소값을 가지고 있다.)
		let now = tmp[0]; // 현재 정점의 정보를 now에 저장한다.
		let nowCost = tmp[1]; // 현재 정점의 Cost 값을 저장한다.

		// 우리는 최소 비용을 반환한다. 따라서 현재 Cost가 dist보다 크다면 continue로 넘어간다.
		if (nowCost > dist[now]) continue;

		// 위에서 tmp에 간선을 하나 뺐으므로, 남은 인접 그래프들을 검색한다.
		// graph[now]는 1과 연결된 2와 3을 가지고 있다.
		// 현재 Cost와 + 연결된 cost 값이 연결된 노드의 distance[next]보다 작다면
		for (let [next, cost] of graph[now]) {
			if (nowCost + cost < dist[next]) {
				// 새로운 Cost 값을 입력해준다.
				dist[next] = nowCost + cost;
				// 해당 노드를 넣어준다. 반복하면서 cost가 작은 값을 먼저 찾는다.
				minH.insert([next, dist[next]]);
			}
		}
	}
	// 만약 목적지 K값의 distance가 초기값이라면, 경로로 가는 방법이 없다.
	if (dist[K] === 1e9) answer = -1;
	else answer = dist[K];
	return answer;
}
console.log(
	solution(
		6,
		[
			[1, 2, 12],
			[1, 3, 4],
			[2, 1, 2],
			[2, 3, 5],
			[2, 5, 5],
			[3, 4, 5],
			[4, 2, 2],
			[4, 5, 5],
			[6, 4, 5],
		],
		5
	)
);
//14
