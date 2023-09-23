/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {

    function reverseLinkedList(node){
        var prev = null;
        while(node){
            const next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return prev;
    }

    var slow = head;
    var fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    slow = reverseLinkedList(slow);

    while(slow){
        if(head.val !== slow.val){
            return false;
        }
        head = head.next;
        slow = slow.next;
    }
    return true;
};