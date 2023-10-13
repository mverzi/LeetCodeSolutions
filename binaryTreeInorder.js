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

