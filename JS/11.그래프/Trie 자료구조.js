// 문자를 편하게 탐색하기 위한 자료구조
class Node {
	constructor() {
		this.end = false;
		this.child = {};
	}
}

class Trie {
	constructor() {
		this.root = new Node();
	}

	insert(word) {
		let cur = this.root;
		for (let x of word) {
			if (cur.child[x] === undefined) cur.child[x] = new Node();
			cur = cur.child[x];
		}
		cur.end = true;
	}

	search(word) {
		let cur = this.root;
		for (let x of word) {
			console.log(x);
			if (cur.child[x] === undefined) return false;
			cur = cur.child[x];
		}
		return cur.end;
	}
	prefixS(str) {
		let cur = this.root;
		for (let x of str) {
			if (cur.child[x] === undefined) return false;
			cur = cur.child[x];
		}
		return true;
	}
}

let trie = new Trie();
trie.insert('study');
trie.insert('stky');
console.log(trie.search('stky'));
console.log(trie.prefixS('st'));
