/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteMiddle = function(head) {
    var slow = head
    var fast = head
    var prev = head

    if(!head || !head.next){
        return null
    }

    while(fast && fast.next){
        prev = slow
        fast = fast.next.next
        slow = slow.next
        
    }
    prev.next = slow.next
    return head
};