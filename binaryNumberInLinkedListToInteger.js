/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    var binaryArray = []
    var current = head;

    while(current){
        binaryArray.push(current.val);
        current = current.next;
    }

    var binaryString = binaryArray.join('');
    return parseInt(binaryString, 2);
};