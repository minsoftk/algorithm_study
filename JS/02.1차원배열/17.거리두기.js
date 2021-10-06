// - 앞에서부터 한번, 뒤에서부터 한번 쭉 2면 해준다.
// - distance를 0으로 바꾼다. 0을 만나면 ++ -> 왼쪽 사람으로부터 떨어진 거리
// - 왜 distance를 1000으로 주는가? 1000 distance 설정을 해야 시작 부분에서 사람이 없을 경우에 1000으로 설정이 되서 나중에 거리 값을 측정할 때 min값으로 변경이 되게 된다.
function solution(nums) {
	let answer;
	let distance = 1000;
	let ch = Array(nums.length).fill(0);
	console.log(ch);
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			ch[i] = 0;
			distance = 1;
		} else {
			ch[i] = distance;
			distance++;
		}
	}
	distance = 1000;
	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[i] === 1) {
			ch[i] = 0;
			distance = 1;
		} else {
			ch[i] = Math.min(distance, ch[i]);
			distance++;
		}
	}
	console.log(ch);
	answer = -10;
	for (let x of ch) {
		answer = Math.max(x, answer);
	}
	return answer;
}

console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
