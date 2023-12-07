#Solution 1: 77ms 211.05 MB
def add_two_numbers(l1, l2)
    dummy = ListNode.new
    dummy_head = dummy

    carry = 0

    while l1 != nil || l2 != nil || carry != 0
      node_sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry

      carry = node_sum / 10
      dummy_head.next = ListNode.new(node_sum % 10)

      dummy_head = dummy_head.next

      l1 = l1.next if l1
      l2 = l2.next if l2
    end

    return dummy.next
end