/**
 * ITERATIVE
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    if(root == null) return [];
    
    var stack = [root];
    var result = [];
    
    while(stack.length > 0){
        var current = stack.pop();
        result.push(current.val);
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return result;
};

/**
 * RECURSIVE
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    var stack = [];

    function preorder(node){
        if(!node) {
            return;
        }
        stack.push(node.val);
        preorder(node.left);
        preorder(node.right);
    }
    preorder(root);
    return stack;
};