/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    var next = null;
    var prev = null;
    var curr = head;
    
    while(curr != null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};