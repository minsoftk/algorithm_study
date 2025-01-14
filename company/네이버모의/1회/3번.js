// 리트코드 815번 문제

function solution(subway, S, E) {
	var answer = 0;
	let graph = Array.from({ length: 1001 }, () => Array());
	let transfer = []; // 환승 열차 번호
	let check = Array(1000001).fill(0);
	for (let i = 0; i < subway.length; i++) {
		for (let j = 0; j < subway[i].length - 1; j++) {
			for (let k = j + 1; k < subway[i].length; k++) {
				graph[subway[i][j]].push(subway[i][k]);
				graph[subway[i][k]].push(subway[i][j]);
			}
		}
	}

	let queue = [S];
	check[S] = 1;
	answer = BFS();

	return answer;

	// 호선별로 정보를 보고 자기 자신을 제외한 역을 queue에 집어넣는다.
	function BFS() {
		let level = 0;
		while (queue.length) {
			// console.log(queue);
			let len = queue.length;
			for (let i = 0; i < len; i++) {
				let trainNum = queue.shift();
				for (let j = 0; j < graph[trainNum].length; j++) {
					let temp = graph[trainNum][j];
					if (temp === E) return level;
					if (check[temp] === 0) {
						check[temp] = 1;
						queue.push(temp);
					}
				}
			}
			level += 1;
		}
		return -1;
	}
}
// console.log(
// 	solution(
// 		[
// 			[1, 2, 7],
// 			[3, 6, 7],
// 		],
// 		1,
// 		6
// 	)
// ); // 1
console.log(
	solution(
		[
			[7, 12],
			[5, 19],
			[7, 19],
			[9, 12, 13],
			[9, 5, 15],
		],
		9,
		19
	)
); // 1

// 지하철 노선 정보가 담겨있는 subway배열이 주어집니다. subway[i]는 i번 지하철이 운행하는 노선의 역번호가 담겨있습니다.
// 만약 subway[i]=[1, 2, 7]이면 i번 지하철는 1-->2-->7-->1-->2-->7-->1 처럼 역을 반복해서 운행합니다.
// 출발지에서 도착지까지의 최소 환승 경로를 구하는 프로그램을 작성하시오. 실제 경로를 구할 필요는 없고, 환승 회수만을 구하면 된다.

// ▣ 입력설명
// 매개변수 subway에 지하철 노선정보가 주어집니다. 매개변수 S에 출발역 번호, 매개변수 E에 도착역 번호가 주어집니다.
// subway의 길이는 1부터 1,000까지입니다. 각 노선은 2개 이상의 역으로 구성됩니다.
// 역번호는 0번부터 1,000,000까지입니다.
// 출발역과 도착역은 같지 않습니다.

// ▣ 출력설명
// 출발역에서 도착역까지 가는 최소 환승횟수를 반환합니다. 출발역에서 도착역까지 갈 수 없다면 -1를 반환합니다.

// ▣ 매개변수 형식 1
// [[1,2,7],[3,6,7]], 1, 6

// ▣ 반환값 형식 1
// 1

// 예제 1번 설명 : 1번 역에서 6번역으로 가는 최소환승경로는 1-->7(환승)-->6 입니다.

// ▣ 매개변수 형식 2
// [[7,12],[5,19],[7,19],[9,12,13],[9,5,15]], 9, 19

// ▣ 반환값 형식 2
// 1

// 예제 2번 설명 : 9번 역에서 19번 역으로 가는 최소 환승경로는 9-->5(환승)-->19 입니다.
