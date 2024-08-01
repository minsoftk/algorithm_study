class BrowserHistory {
	protected history: string[] = [];
	protected index: number;
	constructor(homepage: string) {
		this.history = [homepage];
		this.index = 0;
	}

	visit(url: string): void {
		this.history.push(url);
		this.index = this.history.length - 1;
	}

	back(steps: number): string {
		this.index = Math.max(0, this.index - steps);
		return this.history[this.index];
	}

	forward(steps: number): string {
		this.index = Math.min(this.history.length - 1, this.index + steps);
		return this.history[this.index];
	}
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
const browserHistory = new BrowserHistory('leetcode.com');
console.log('🚀 ~ browserHistory:', browserHistory);
