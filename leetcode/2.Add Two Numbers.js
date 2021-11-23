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
var addTwoNumbers = function (l1, l2) {
	let head,
		c = head,
		one = l1,
		two = l2,
		carry = 0;

	while (l1 || l2) {
		let x = 0,
			y = 0,
			sum = carry,
			next,
			tmpNode;
		if (l1.val) {
			x = l1.val;
		}
		if (l2.val) {
			y = l2.val;
		}
		sum += x + y;
		carry = Math.floor(sum / 10);
		next = sum % 10;
		tmpNode = new ListNode(next);
		if (head == null) {
			head = new ListNode(next);
			c = head;
		} else {
			c.next = tmpNode;
			c = c.next;
		}
		if (l1.next != null) {
			l1 = l1.next;
		} else {
			l1 = false;
		}
		if (l2.next != null) {
			l2 = l2.next;
		} else {
			l2 = false;
		}
	}
	if (carry > 0) {
		let tmpNode = new ListNode(carry);
		c.next = tmpNode;
	}
	return head;
};
