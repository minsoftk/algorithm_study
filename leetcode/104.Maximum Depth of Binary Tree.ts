/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

/** postOrder 방식 */
function maxDepth(root: TreeNode | null): number {
	if (!root) return 0;

	const left = maxDepth(root.left);
	const right = maxDepth(root.right);

	return Math.max(left, right) + 1;
}

/** levelOrder 방식 */
// function maxDepth(root: TreeNode | null): number {
// 	let queue = [root];
// 	let level = 0;

// 	if (!root) return level;

// 	while (queue.length > 0) {
// 		const len = queue.length;
// 		for (let i = 0; i < len; i += 1) {
// 			const front = queue.shift();
// 			if (front && front.left) {
// 				queue.push(front.left);
// 			}
// 			if (front && front.right) {
// 				queue.push(front.right);
// 			}
// 		}
// 		level += 1;
// 	}
// 	return level;
// }

//[3,9,20,null,null,15,7]
const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);
console.log('🚀 ~ maxDepth ~ maxDepth:', maxDepth(tree));
