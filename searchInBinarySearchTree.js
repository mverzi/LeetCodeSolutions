/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    if(root === null) return null;
    const stack = [root];
    while(stack.length > 0){
        const current = stack.pop();
        if(current.val === val) return current;
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return null;
};