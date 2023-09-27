var removeNthFromEnd = function(head, n) {
    var slow = head;
    var fast = head;

    for(let i = 0; i < n; i++){
        fast = fast.next;
    }
    
    if(!fast){
        return head.next;
    }
    
    while(fast.next != null){
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    return head;
};