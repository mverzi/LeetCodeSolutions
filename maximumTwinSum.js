/**
 * @param {ListNode} head
 * @return {number}
 */
 var pairSum = function(head) {
    var temp = head;
    var n = 0;
    var maxSum = 0;
    var stack = [];

    while(temp != null){
        n++;
        stack.push(temp.val);
        temp = temp.next; 
    }

    n = n / 2;

    while(n > 0){
        var twin = stack.pop();
        n--;
        if((head.val + twin) > maxSum){
            maxSum = head.val + twin;
        }
        head = head.next;
    }
    return maxSum;
};