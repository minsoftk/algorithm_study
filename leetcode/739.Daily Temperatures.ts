function dailyTemperatures(temperatures: number[]): number[] {
	const len = temperatures.length;
	const answer: number[] = Array(len).fill(0);

	let stack: number[][] = [[temperatures[0], 0]];

	for (let i = 0; i < len; i++) {
		while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]) {
			const [popTemp, popIdx]: any = stack.pop();
			answer[popIdx] = i - popIdx;
		}
		stack.push([temperatures[i], i]);
	}
	return answer;
}

console.log('🚀 ~ dailyTemperatures ~ dailyTemperatures:', dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log('🚀 ~ dailyTemperatures ~ dailyTemperatures:', dailyTemperatures([30, 40, 50, 60])); //[1,1,1,0]
console.log('🚀 ~ dailyTemperatures ~ dailyTemperatures:', dailyTemperatures([30, 60, 90])); //[1,1,0]
