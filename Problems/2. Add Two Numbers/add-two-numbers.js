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

//Solution: 86ms 48.1 MB
var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode();
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

    current.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};
