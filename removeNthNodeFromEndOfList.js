var removeNthFromEnd = function(head, n) {
    var slow = head;
    var fast = head;

    // Get the fast pointer where it needs to be to find the end of the list and have the slow pointer pointing at the n index
    for(let i = 0; i < n; i++){
        fast = fast.next;
    }
    
    // If fast is null after the for loop, return the head node
    if(!fast){
        return head.next;
    }
    
    // Move the pointers forward until fast reaches the end of the list
    while(fast.next != null){
        slow = slow.next;
        fast = fast.next;
    }
    
    // Remove the node at the nth index by changing the pointer to skip over that node
    slow.next = slow.next.next;
    return head;
};