/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function sol(l1, l2) {
	ListNode temp = new ListNode();
	temp.insert(1);
	
	while (l1.next !== null && l2 !== null) {
		let carry = 0;
		let add = l1.val + l2.val;
		if (add > 9) {
			carry++;
		}
	}
}
console.log(sol([2, 4, 3], [1, 2, 3]));
